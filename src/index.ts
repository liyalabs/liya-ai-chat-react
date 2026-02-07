// Liya AI Chat React - Main Entry Point
// React Chat Widget & Full App Component for AI Assistants

// Styles
import './styles/variables.css'

// Context
export { LiyaChatProvider, useLiyaChatContext } from './context/LiyaChatContext'

// Components
export { LiyaChatWidget } from './components/widget'
export { LiyaChatApp, SessionSidebar } from './components/app'
export { MessageBubble, MessageList, ChatInput } from './components/shared'

// Hooks
export { useChat } from './hooks/useChat'
export { useSessions } from './hooks/useSessions'
export { useVoice } from './hooks/useVoice'
export { useFileUpload } from './hooks/useFileUpload'

// API
export {
  initializeClient,
  getClient,
  getConfig,
  isInitialized,
  sendMessage,
  getSessionHistory,
  getSessions,
  createSession,
  getSession,
  deleteSession,
  uploadFile,
} from './api'

// Types
export type {
  ChatMode,
  LiyaChatConfig,
  ThemeConfig,
  FeaturesConfig,
  ApiResponse,
  Assistant,
  Session,
  SessionListResponse,
  CreateSessionRequest,
  Message,
  MessageRole,
  SendMessageRequest,
  SendMessageResponse,
  SessionHistoryResponse,
  FileAttachment,
  UploadFileRequest,
  ChatWidgetProps,
  ChatAppProps,
  MessageBubbleProps,
  ChatInputProps,
  LiyaChatContextValue,
} from './types'
