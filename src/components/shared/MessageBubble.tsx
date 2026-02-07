// Liya AI Chat React - MessageBubble Component
import { useMemo } from 'react'
import type { MessageBubbleProps, ParsedResponse } from '../../types'
import './MessageBubble.css'

function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

// Helper function to parse JSON response from AI
function parseJsonResponse(content: string): ParsedResponse | null {
  if (!content) return null
  
  try {
    let jsonStr = content.trim()
    
    // Remove markdown code blocks if present
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.replace(/^```json\s*/, '').replace(/\s*```$/, '')
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```\s*/, '').replace(/\s*```$/, '')
    }
    
    // Try to extract JSON from text if it contains JSON object
    const jsonMatch = jsonStr.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      jsonStr = jsonMatch[0]
    }
    
    const parsed = JSON.parse(jsonStr)
    
    // Validate it has the expected structure
    if (parsed && typeof parsed.response === 'string') {
      return parsed as ParsedResponse
    }
    return null
  } catch {
    return null
  }
}

export function MessageBubble({ 
  message, 
  showAvatar = true, 
  assistantName: _assistantName = 'Assistant',
  onSuggestionClick
}: MessageBubbleProps) {
  void _assistantName // Reserved for future use
  const isUser = message.role === 'user'

  // Parse JSON response for assistant messages
  const parsedResponse = useMemo(() => {
    if (isUser) return null
    return parseJsonResponse(message.raw_response || message.content)
  }, [isUser, message.raw_response, message.content])

  // Get display content - either parsed response text or original content
  const displayContent = parsedResponse?.response || message.content

  // Get suggestions from parsed response
  const suggestions = parsedResponse?.suggestions || []

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionClick?.(suggestion)
  }

  return (
    <div className={`liya-message ${isUser ? 'liya-message--user' : 'liya-message--assistant'}`}>
      {showAvatar && !isUser && (
        <div className="liya-message__avatar">
          <div className="liya-avatar liya-avatar--assistant">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
        </div>
      )}
      
      <div className="liya-message__content">
        <div className="liya-message__bubble">
          <div className="liya-message__text" dangerouslySetInnerHTML={{ __html: displayContent }} />
        </div>
        
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="liya-message__suggestions">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="liya-suggestion"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                </svg>
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <div className="liya-message__meta">
          <span className="liya-message__time">{formatTime(message.created_at)}</span>
          {message.response_time && (
            <span className="liya-message__response-time">
              {message.response_time.toFixed(1)}s
            </span>
          )}
        </div>
      </div>
      
      {showAvatar && isUser && (
        <div className="liya-message__avatar">
          <div className="liya-avatar liya-avatar--user">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}
