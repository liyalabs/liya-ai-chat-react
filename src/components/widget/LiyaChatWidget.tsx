// Liya AI Chat React - ChatWidget Component
import React, { useState, useEffect } from 'react'
import type { ChatWidgetProps } from '../../types'
import { useChat } from '../../hooks/useChat'
import { useFileUpload } from '../../hooks/useFileUpload'
import { getConfig } from '../../api'
import { MessageList } from '../shared/MessageList'
import { ChatInput } from '../shared/ChatInput'
import './LiyaChatWidget.css'

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

export function LiyaChatWidget({
  position = 'bottom-right',
  theme = {},
  welcomeMessage = 'Bu chat hizmeti Liya AI tarafından sağlanmaktadır. Size bugün nasıl yardımcı olabilirim?',
  placeholder = 'Mesajınızı yazın...',
  showBranding = true,
  showVoice = true,
  voiceEnabled = true,
  showFileUpload = true,
  offsetX = 20,
  offsetY = 20,
  onOpen,
  onClose,
  onMessageSent,
  onMessageReceived,
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const config = getConfig()

  const {
    messages,
    isLoading,
    currentSessionId,
    sendMessage,
    loadHistory,
  } = useChat()

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
    '--liya-border-radius': theme.borderRadius || '16px',
    '--liya-font-family': theme.fontFamily || 'system-ui, -apple-system, sans-serif',
    '--liya-z-index': theme.zIndex || 9999,
    '--liya-offset-x': `${offsetX}px`,
    '--liya-offset-y': `${offsetY}px`,
  } as React.CSSProperties

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion)
  }

  const toggleWidget = () => {
    const newState = !isOpen
    setIsOpen(newState)
    if (newState) {
      onOpen?.()
    } else {
      onClose?.()
    }
  }

  const handleSend = async (message: string, fileIds?: string[]) => {
    if (!message.trim() && (!fileIds || fileIds.length === 0)) return

    let uploadedFileIds = fileIds
    if (currentSessionId && fileIds && fileIds.length > 0) {
      const uploaded = await uploadFiles(currentSessionId)
      uploadedFileIds = uploaded.map(f => f.id)
    }

    onMessageSent?.(message)
    
    const response = await sendMessage(message, uploadedFileIds)
    
    if (response?.assistant_message?.content || response?.response) {
      onMessageReceived?.(response.assistant_message?.content || response.response || '')
    }
    
    clearFiles()
  }

  useEffect(() => {
    try {
      const storedSessionId = localStorage.getItem('liya_chat_session_id')
      if (storedSessionId) {
        loadHistory(storedSessionId)
      }
    } catch {
      // localStorage not available
    }
  }, [])

  return (
    <div className={`liya-widget liya-widget--${position}`} style={cssVars}>
      <button 
        className={`liya-widget__toggle ${isOpen ? 'liya-widget__toggle--open' : ''}`}
        onClick={toggleWidget}
        aria-label={isOpen ? 'Sohbeti kapat' : 'Sohbeti aç'}
      >
        {!isOpen ? (
          <svg viewBox="0 0 80 92" fill="none" width="28" height="28">
            <rect x="0" y="0" width="80" height="80" rx="18" fill="#6366F1"/>
            <path d="M22 80 L34 80 L28 92 Z" fill="#6366F1"/>
            <path d="M36 26 V58 H56" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="36" cy="26" r="3" fill="#FFFFFF"/>
            <circle cx="36" cy="58" r="3" fill="#FFFFFF"/>
            <circle cx="56" cy="58" r="3" fill="#FFFFFF"/>
            <text x="40" y="52" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif" fill="#FFFFFF">ai</text>
            <path d="M58 16 L60 20 L64 22 L60 24 L58 28 L56 24 L52 22 L56 20 Z" fill="#FFFFFF"/>
            <path d="M66 30 L67.5 33 L71 34.5 L67.5 36 L66 39 L64.5 36 L61 34.5 L64.5 33 Z" fill="#FFFFFF"/>
            <path d="M50 18 L51.5 21 L55 22.5 L51.5 24 L50 27 L48.5 24 L45 22.5 L48.5 21 Z" fill="#FFFFFF"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="liya-widget__panel">
          <div className="liya-widget__header">
            <div className="liya-widget__header-info">
              <div className="liya-widget__avatar">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="liya-widget__header-text">
                <h3 className="liya-widget__title">{assistantName}</h3>
                <span className="liya-widget__status">Çevrimiçi</span>
              </div>
            </div>
            <button className="liya-widget__close" onClick={toggleWidget}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          <MessageList
            messages={messages}
            isLoading={isLoading}
            assistantName={assistantName}
            welcomeMessage={welcomeMessage}
            onSuggestionClick={handleSuggestionClick}
          />

          <ChatInput
            placeholder={placeholder}
            disabled={isLoading}
            showVoice={showVoice}
            voiceEnabled={voiceEnabled}
            showFileUpload={showFileUpload}
            sessionId={currentSessionId}
            onSend={handleSend}
          />

          {showBranding && (
            <div className="liya-widget__branding">
              Powered by <a href="https://liyalabs.com" target="_blank" rel="noopener noreferrer">Liya AI</a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
