// Liya AI Chat React - MessageList Component
import { useRef, useEffect } from 'react'
import type { Message } from '../../types'
import { MessageBubble } from './MessageBubble'
import './MessageList.css'

interface MessageListProps {
  messages: Message[]
  isLoading?: boolean
  assistantName?: string
  welcomeMessage?: string
  onSuggestionClick?: (suggestion: string) => void
}

export function MessageList({ 
  messages, 
  isLoading = false, 
  assistantName = 'Assistant',
  welcomeMessage = '',
  onSuggestionClick
}: MessageListProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  return (
    <div ref={containerRef} className="liya-message-list">
      {messages.length === 0 && welcomeMessage && (
        <div className="liya-welcome">
          <div className="liya-welcome__icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
          </div>
          <p className="liya-welcome__text">{welcomeMessage}</p>
        </div>
      )}

      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          assistantName={assistantName}
          onSuggestionClick={onSuggestionClick}
        />
      ))}

      {isLoading && (
        <div className="liya-typing">
          <div className="liya-typing__avatar">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div className="liya-typing__dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  )
}
