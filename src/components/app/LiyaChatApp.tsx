// Liya AI Chat React - ChatApp Component
import React, { useState, useEffect } from 'react'
import type { ChatAppProps, Session } from '../../types'
import { useChat } from '../../hooks/useChat'
import { useSessions } from '../../hooks/useSessions'
import { useFileUpload } from '../../hooks/useFileUpload'
import { getConfig } from '../../api'
import { SessionSidebar } from './SessionSidebar'
import { MessageList } from '../shared/MessageList'
import { ChatInput } from '../shared/ChatInput'
import './LiyaChatApp.css'

function adjustColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const G = (num >> 8 & 0x00FF) + amt
  const B = (num & 0x0000FF) + amt
  return '#' + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)
}

export function LiyaChatApp({
  theme = {},
  showSidebar = true,
  sidebarWidth = '300px',
  welcomeMessage = 'Merhaba! Size nasıl yardımcı olabilirim?',
  placeholder = 'Mesajınızı yazın...',
  showVoice = true,
  voiceEnabled = true,
  showFileUpload = true,
  onSessionCreated,
  onSessionSelected,
  onSessionDeleted,
  onMessageSent,
  onMessageReceived,
}: ChatAppProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const config = getConfig()

  const {
    messages,
    isLoading: isChatLoading,
    currentSessionId,
    sendMessage,
    loadHistory,
    clearMessages,
    setSessionId,
  } = useChat()

  const {
    sessions,
    currentSession,
    isLoading: isSessionsLoading,
    loadSessions,
    createSession,
    deleteSession,
    selectSession,
  } = useSessions()

  const { uploadFiles, clearAll: clearFiles } = useFileUpload()

  const assistantName = config.assistantName || 'Assistant'

  const cssVars = {
    '--liya-primary-color': theme.primaryColor || '#6366f1',
    '--liya-primary-hover': theme.primaryColor ? adjustColor(theme.primaryColor, -10) : '#4f46e5',
    '--liya-secondary-color': theme.secondaryColor || '#e5e7eb',
    '--liya-bg-color': theme.backgroundColor || '#ffffff',
    '--liya-bg-secondary': '#f3f4f6',
    '--liya-text-color': theme.textColor || '#374151',
    '--liya-text-muted': '#9ca3af',
    '--liya-border-color': '#e5e7eb',
    '--liya-border-radius': theme.borderRadius || '12px',
    '--liya-font-family': theme.fontFamily || 'system-ui, -apple-system, sans-serif',
    '--liya-sidebar-width': sidebarWidth,
  } as React.CSSProperties

  const handleSelectSession = async (session: Session) => {
    selectSession(session)
    setSessionId(session.id)
    await loadHistory(session.id)
    setIsMobileSidebarOpen(false)
    onSessionSelected?.(session)
  }

  const handleCreateSession = async () => {
    const session = await createSession()
    if (session) {
      selectSession(session)
      setSessionId(session.id)
      clearMessages()
      setIsMobileSidebarOpen(false)
      onSessionCreated?.(session)
    }
  }

  const handleDeleteSession = async (sessionId: string) => {
    const success = await deleteSession(sessionId)
    if (success) {
      if (currentSessionId === sessionId) {
        clearMessages()
        setSessionId(null)
        selectSession(null)
      }
      onSessionDeleted?.(sessionId)
    }
  }

  const handleSend = async (message: string, fileIds?: string[]) => {
    if (!message.trim() && (!fileIds || fileIds.length === 0)) return

    if (!currentSessionId) {
      const session = await createSession(message.substring(0, 30))
      if (session) {
        selectSession(session)
        setSessionId(session.id)
        onSessionCreated?.(session)
      }
    }

    let uploadedIds = fileIds
    if (currentSessionId && fileIds && fileIds.length > 0) {
      const uploaded = await uploadFiles(currentSessionId)
      uploadedIds = uploaded.map(f => f.id)
    }

    onMessageSent?.(message)
    
    const response = await sendMessage(message, uploadedIds)
    
    if (response?.assistant_message?.content || response?.response) {
      onMessageReceived?.(response.assistant_message?.content || response.response || '')
    }
    
    clearFiles()
    loadSessions()
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion)
  }

  useEffect(() => {
    loadSessions()
  }, [])

  return (
    <div className="liya-app" style={cssVars}>
      <div className="liya-app__mobile-header">
        <button className="liya-app__menu-btn" onClick={() => setIsMobileSidebarOpen(true)}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
        <span className="liya-app__mobile-title">
          {currentSession?.session_name || assistantName}
        </span>
        <button className="liya-app__new-btn" onClick={handleCreateSession}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </div>

      {showSidebar && (
        <aside className={`liya-app__sidebar ${isMobileSidebarOpen ? 'liya-app__sidebar--open' : ''}`}>
          <SessionSidebar
            sessions={sessions}
            currentSessionId={currentSessionId}
            isLoading={isSessionsLoading}
            assistantName={assistantName}
            onSelectSession={handleSelectSession}
            onCreateSession={handleCreateSession}
            onDeleteSession={handleDeleteSession}
          />
        </aside>
      )}

      {isMobileSidebarOpen && (
        <div 
          className="liya-app__overlay"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <main className="liya-app__main">
        <div className="liya-app__header">
          <div className="liya-app__header-info">
            <div className="liya-app__avatar">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="liya-app__header-text">
              <h2 className="liya-app__title">
                {currentSession?.session_name || assistantName}
              </h2>
              <span className="liya-app__status">
                {currentSession ? `${currentSession.message_count} mesaj` : 'Yeni sohbet başlatın'}
              </span>
            </div>
          </div>
        </div>

        <MessageList
          messages={messages}
          isLoading={isChatLoading}
          assistantName={assistantName}
          welcomeMessage={welcomeMessage}
          onSuggestionClick={handleSuggestionClick}
        />

        <ChatInput
          placeholder={placeholder}
          disabled={isChatLoading}
          showVoice={showVoice}
          voiceEnabled={voiceEnabled}
          showFileUpload={showFileUpload}
          sessionId={currentSessionId}
          onSend={handleSend}
        />
      </main>
    </div>
  )
}
