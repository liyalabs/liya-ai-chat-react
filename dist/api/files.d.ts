import { FileAttachment } from '../types';

export declare function uploadFile(sessionId: string, file: File): Promise<FileAttachment>;
export declare function formatFileSize(bytes: number): string;
export declare function isValidFileType(file: File, allowedTypes?: string[]): boolean;
export declare const DEFAULT_ALLOWED_FILE_TYPES: string[];
export declare const MAX_FILE_SIZE: number;
