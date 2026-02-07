// Liya AI Chat React - useFileUpload Hook
import { useState, useCallback } from 'react'
import type { FileAttachment } from '../types'
import { 
  uploadFile as apiUploadFile, 
  formatFileSize, 
  isValidFileType,
  DEFAULT_ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE 
} from '../api'

interface PendingFile {
  id: string
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'completed' | 'error'
  error?: string
  attachment?: FileAttachment
}

interface UseFileUploadReturn {
  pendingFiles: PendingFile[]
  uploadedFiles: FileAttachment[]
  isUploading: boolean
  error: string | null
  addFiles: (files: FileList | File[]) => void
  uploadFiles: (sessionId: string) => Promise<FileAttachment[]>
  removePendingFile: (fileId: string) => void
  removeUploadedFile: (fileId: string) => void
  clearAll: () => void
  formatFileSize: (bytes: number) => string
  getFileIcon: (fileType: string) => string
}

export function useFileUpload(allowedTypes = DEFAULT_ALLOWED_FILE_TYPES): UseFileUploadReturn {
  const [pendingFiles, setPendingFiles] = useState<PendingFile[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<FileAttachment[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addFiles = useCallback((files: FileList | File[]) => {
    setError(null)
    const fileArray = Array.from(files)
    
    const newPendingFiles: PendingFile[] = []
    
    for (const file of fileArray) {
      if (file.size > MAX_FILE_SIZE) {
        setError(`File "${file.name}" exceeds maximum size of ${formatFileSize(MAX_FILE_SIZE)}`)
        continue
      }
      
      if (!isValidFileType(file, allowedTypes)) {
        setError(`File type "${file.type}" is not allowed`)
        continue
      }
      
      newPendingFiles.push({
        id: `pending-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        progress: 0,
        status: 'pending',
      })
    }
    
    setPendingFiles(prev => [...prev, ...newPendingFiles])
  }, [allowedTypes])

  const uploadFiles = useCallback(async (sessionId: string): Promise<FileAttachment[]> => {
    if (pendingFiles.length === 0) return []
    
    setIsUploading(true)
    setError(null)
    const uploaded: FileAttachment[] = []

    for (const pending of pendingFiles) {
      if (pending.status === 'completed') continue
      
      setPendingFiles(prev => 
        prev.map(f => f.id === pending.id ? { ...f, status: 'uploading' as const } : f)
      )

      try {
        const attachment = await apiUploadFile(sessionId, pending.file)
        uploaded.push(attachment)
        setUploadedFiles(prev => [...prev, attachment])
        
        setPendingFiles(prev => 
          prev.map(f => f.id === pending.id 
            ? { ...f, status: 'completed' as const, progress: 100, attachment } 
            : f
          )
        )
      } catch (err) {
        setPendingFiles(prev => 
          prev.map(f => f.id === pending.id 
            ? { ...f, status: 'error' as const, error: err instanceof Error ? err.message : 'Upload failed' } 
            : f
          )
        )
      }
    }

    setPendingFiles(prev => prev.filter(f => f.status !== 'completed'))
    setIsUploading(false)
    return uploaded
  }, [pendingFiles])

  const removePendingFile = useCallback((fileId: string) => {
    setPendingFiles(prev => prev.filter(f => f.id !== fileId))
  }, [])

  const removeUploadedFile = useCallback((fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId))
  }, [])

  const clearAll = useCallback(() => {
    setPendingFiles([])
    setUploadedFiles([])
    setError(null)
  }, [])

  const getFileIcon = useCallback((fileType: string): string => {
    if (fileType.startsWith('image/')) return '🖼️'
    if (fileType.startsWith('video/')) return '🎬'
    if (fileType.startsWith('audio/')) return '🎵'
    if (fileType.includes('pdf')) return '📄'
    if (fileType.includes('word') || fileType.includes('document')) return '📝'
    if (fileType.includes('excel') || fileType.includes('spreadsheet')) return '📊'
    if (fileType.includes('json')) return '📋'
    if (fileType.startsWith('text/')) return '📃'
    return '📎'
  }, [])

  return {
    pendingFiles,
    uploadedFiles,
    isUploading,
    error,
    addFiles,
    uploadFiles,
    removePendingFile,
    removeUploadedFile,
    clearAll,
    formatFileSize,
    getFileIcon,
  }
}
