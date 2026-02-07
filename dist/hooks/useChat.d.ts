import { Message, SendMessageResponse } from '../types';

interface UseChatReturn {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    currentSessionId: string | null;
    sendMessage: (content: string, fileIds?: string[]) => Promise<SendMessageResponse | null>;
    loadHistory: (sessionId: string) => Promise<void>;
    clearMessages: () => void;
    setSessionId: (sessionId: string | null) => void;
}
export declare function useChat(): UseChatReturn;
export {};
