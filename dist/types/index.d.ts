export type ChatMode = 'widget' | 'app';
export interface LiyaChatConfig {
    mode?: ChatMode;
    apiKey: string;
    baseUrl: string;
    assistantId: string;
    assistantName?: string;
    theme?: ThemeConfig;
    features?: FeaturesConfig;
    locale?: string;
}
export interface ThemeConfig {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
    borderRadius?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    widgetSize?: 'small' | 'medium' | 'large';
    zIndex?: number;
}
export interface FeaturesConfig {
    voice?: boolean;
    voiceEnabled?: boolean;
    fileUpload?: boolean;
    sessionHistory?: boolean;
    markdown?: boolean;
    codeHighlight?: boolean;
    typingIndicator?: boolean;
    soundEffects?: boolean;
}
export interface ApiResponse<T = unknown> {
    status: 'success' | 'error';
    data?: T;
    message?: string;
    errors?: Record<string, string[]>;
}
export interface Assistant {
    id: string;
    name: string;
    description: string;
    model: string;
    total_messages: number;
}
export interface Session {
    id: string;
    assistant_id?: string;
    session_name: string;
    message_count: number;
    created_at: string;
    last_message_at: string | null;
}
export interface SessionListResponse {
    sessions: Session[];
    total: number;
    limit: number;
    offset: number;
}
export interface CreateSessionRequest {
    assistant_id: string;
    session_name?: string;
    external_session_id?: string;
}
export type MessageRole = 'user' | 'assistant';
export interface Message {
    id: string;
    content: string;
    role: MessageRole;
    created_at: string;
    response_time?: number;
    attachments?: FileAttachment[];
    raw_response?: string;
}
export interface ParsedResponse {
    response: string;
    suggestions?: string[];
    source?: string;
    metadata?: {
        confidence?: number;
        category?: string;
        requires_followup?: boolean;
    };
}
export interface SendMessageRequest {
    assistant_id: string;
    message: string;
    session_id?: string;
    external_session_id?: string;
    file_ids?: string[];
}
export interface SendMessageResponse {
    session_id: string;
    message_id?: string;
    response?: string;
    response_time?: number;
    user_message?: Message;
    assistant_message?: Message;
}
export interface SessionHistoryResponse {
    session_id: string;
    messages: Message[];
    total: number;
}
export interface FileAttachment {
    id: string;
    file_name: string;
    file_size: number;
    file_type: string;
    openai_file_id?: string;
    created_at: string;
}
export interface UploadFileRequest {
    session_id: string;
    file: File;
}
export interface ChatWidgetProps {
    position?: ThemeConfig['position'];
    theme?: ThemeConfig;
    welcomeMessage?: string;
    placeholder?: string;
    showBranding?: boolean;
    showVoice?: boolean;
    voiceEnabled?: boolean;
    showFileUpload?: boolean;
    offsetX?: number;
    offsetY?: number;
    customIcon?: string;
    onOpen?: () => void;
    onClose?: () => void;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
}
export interface ChatAppProps {
    theme?: ThemeConfig;
    showSidebar?: boolean;
    sidebarWidth?: string;
    welcomeMessage?: string;
    placeholder?: string;
    showVoice?: boolean;
    voiceEnabled?: boolean;
    showFileUpload?: boolean;
    onSessionCreated?: (session: Session) => void;
    onSessionSelected?: (session: Session) => void;
    onSessionDeleted?: (sessionId: string) => void;
    onMessageSent?: (message: string) => void;
    onMessageReceived?: (message: string) => void;
}
export interface MessageBubbleProps {
    message: Message;
    showAvatar?: boolean;
    assistantName?: string;
    onSuggestionClick?: (suggestion: string) => void;
}
export interface ChatInputProps {
    placeholder?: string;
    disabled?: boolean;
    showVoice?: boolean;
    voiceEnabled?: boolean;
    showFileUpload?: boolean;
    maxLength?: number;
    sessionId?: string | null;
    onSend: (message: string, fileIds?: string[]) => void;
}
export interface LiyaChatContextValue {
    config: LiyaChatConfig;
    isInitialized: boolean;
}
