import { FileAttachment } from '../types';

interface PendingFile {
    id: string;
    file: File;
    progress: number;
    status: 'pending' | 'uploading' | 'completed' | 'error';
    error?: string;
    attachment?: FileAttachment;
}
interface UseFileUploadReturn {
    pendingFiles: PendingFile[];
    uploadedFiles: FileAttachment[];
    isUploading: boolean;
    error: string | null;
    addFiles: (files: FileList | File[]) => void;
    uploadFiles: (sessionId: string) => Promise<FileAttachment[]>;
    removePendingFile: (fileId: string) => void;
    removeUploadedFile: (fileId: string) => void;
    clearAll: () => void;
    formatFileSize: (bytes: number) => string;
    getFileIcon: (fileType: string) => string;
}
export declare function useFileUpload(allowedTypes?: string[]): UseFileUploadReturn;
export {};
