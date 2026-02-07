import { Message } from '../../types';

interface MessageListProps {
    messages: Message[];
    isLoading?: boolean;
    assistantName?: string;
    welcomeMessage?: string;
    onSuggestionClick?: (suggestion: string) => void;
}
export declare function MessageList({ messages, isLoading, assistantName, welcomeMessage, onSuggestionClick }: MessageListProps): import("react/jsx-runtime").JSX.Element;
export {};
