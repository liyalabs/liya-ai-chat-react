// Liya AI Chat React - ChatInput Component
import React, { useState, useRef, useEffect } from 'react'
import type { ChatInputProps } from '../../types'
import { useVoice } from '../../hooks/useVoice'
import { useFileUpload } from '../../hooks/useFileUpload'
import './ChatInput.css'

export function ChatInput({
  placeholder = 'Mesajınızı yazın...',
  disabled = false,
  showVoice = true,
  voiceEnabled = true,  // false for STANDARD users - shows disabled mic icon
  showFileUpload = true,
  maxLength = 4000,
  onSend,
}: ChatInputProps) {
  const [inputText, setInputText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { 
    isRecording, 
    transcript,
    isSupported: voiceSupported,
    startRecording, 
    stopRecording,
  } = useVoice()

  const {
    pendingFiles,
    uploadedFiles,
    isUploading,
    addFiles,
    removePendingFile,
    clearAll: clearFiles,
    formatFileSize,
    getFileIcon,
  } = useFileUpload()

  const canSend = (inputText.trim().length > 0 || uploadedFiles.length > 0) && 
                  !disabled && 
                  !isUploading

  useEffect(() => {
    if (transcript) {
      setInputText(transcript)
    }
  }, [transcript])

  const handleSend = () => {
    if (!canSend) return
    
    const message = inputText.trim()
    const fileIds = uploadedFiles.length > 0 ? uploadedFiles.map(f => f.id) : undefined
    
    onSend(message, fileIds)
    
    setInputText('')
    clearFiles()
    adjustTextareaHeight()
  }

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px'
    }
  }

  const handleVoiceClick = () => {
    if (isRecording) {
      const result = stopRecording()
      if (result) {
        setInputText(result)
      }
    } else {
      startRecording()
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      addFiles(event.target.files)
      event.target.value = ''
    }
  }

  return (
    <div className="liya-chat-input">
      {pendingFiles.length > 0 && (
        <div className="liya-chat-input__files">
          {pendingFiles.map((file) => (
            <div 
              key={file.id} 
              className={`liya-file-chip ${file.status === 'error' ? 'liya-file-chip--error' : ''}`}
            >
              <span className="liya-file-chip__icon">{getFileIcon(file.file.type)}</span>
              <span className="liya-file-chip__name">{file.file.name}</span>
              <span className="liya-file-chip__size">{formatFileSize(file.file.size)}</span>
              <button 
                type="button" 
                className="liya-file-chip__remove"
                onClick={() => removePendingFile(file.id)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="liya-chat-input__wrapper">
        {showFileUpload && (
          <>
            <button
              type="button"
              className="liya-chat-input__btn liya-chat-input__btn--file"
              disabled={disabled}
              onClick={() => fileInputRef.current?.click()}
              title="Dosya ekle"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
              </svg>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="liya-chat-input__file-input"
              onChange={handleFileSelect}
            />
          </>
        )}

        <textarea
          ref={textareaRef}
          value={inputText}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className="liya-chat-input__textarea"
          rows={1}
          onChange={(e) => {
            setInputText(e.target.value)
            adjustTextareaHeight()
          }}
          onKeyDown={handleKeydown}
        />

        {showVoice && voiceSupported && (
          <button
            type="button"
            className={`liya-chat-input__btn liya-chat-input__btn--voice ${isRecording ? 'liya-chat-input__btn--recording' : ''} ${!voiceEnabled ? 'liya-chat-input__btn--voice-disabled' : ''}`}
            disabled={disabled || !voiceEnabled}
            onClick={voiceEnabled ? handleVoiceClick : undefined}
            title={!voiceEnabled ? 'Sesli yazma özelliği Premium üyelik gerektirir' : (isRecording ? 'Kaydı durdur' : 'Sesle yaz')}
          >
            {/* Disabled mic icon (with slash) for STANDARD users */}
            {!voiceEnabled ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>
              </svg>
            ) : !isRecording ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M6 6h12v12H6z"/>
              </svg>
            )}
          </button>
        )}

        <button
          type="button"
          className="liya-chat-input__btn liya-chat-input__btn--send"
          disabled={!canSend}
          onClick={handleSend}
          title="Gönder"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>

      {inputText.length > maxLength * 0.8 && (
        <div className="liya-chat-input__count">
          {inputText.length} / {maxLength}
        </div>
      )}
    </div>
  )
}
