// Liya AI Chat React - useChat Hook
import { useState, useCallback } from 'react'
import type { Message, SendMessageResponse } from '../types'
import { sendMessage as apiSendMessage, getSessionHistory } from '../api'

interface UseChatReturn {
  messages: Message[]
  isLoading: boolean
  error: string | null
  currentSessionId: string | null
  sendMessage: (content: string, fileIds?: string[]) => Promise<SendMessageResponse | null>
  loadHistory: (sessionId: string) => Promise<void>
  clearMessages: () => void
  setSessionId: (sessionId: string | null) => void
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(() => {
    try {
      return localStorage.getItem('liya_chat_session_id')
    } catch {
      return null
    }
  })

  const saveSessionToStorage = useCallback((sessionId: string) => {
    try {
      localStorage.setItem('liya_chat_session_id', sessionId)
    } catch {
      // localStorage not available
    }
  }, [])

  const clearSessionFromStorage = useCallback(() => {
    try {
      localStorage.removeItem('liya_chat_session_id')
    } catch {
      // localStorage not available
    }
  }, [])

  const sendMessage = useCallback(async (
    content: string,
    fileIds?: string[]
  ): Promise<SendMessageResponse | null> => {
    if (!content.trim()) return null

    setIsLoading(true)
    setError(null)

    // Optimistic update
    const tempUserMessage: Message = {
      id: `temp-${Date.now()}`,
      content: content.trim(),
      role: 'user',
      created_at: new Date().toISOString(),
    }
    setMessages(prev => [...prev, tempUserMessage])

    try {
      const response = await apiSendMessage(
        content.trim(),
        currentSessionId || undefined,
        fileIds
      )

      // Update session ID
      if (response.session_id) {
        setCurrentSessionId(response.session_id)
        saveSessionToStorage(response.session_id)
      }

      // Replace temp message with real one
      setMessages(prev => {
        const filtered = prev.filter(m => m.id !== tempUserMessage.id)
        const newMessages = [...filtered]
        
        if (response.user_message) {
          newMessages.push(response.user_message)
        } else {
          newMessages.push({ ...tempUserMessage, id: `user-${Date.now()}` })
        }

        if (response.assistant_message) {
          newMessages.push(response.assistant_message)
        } else if (response.response) {
          newMessages.push({
            id: response.message_id || `msg-${Date.now()}`,
            content: response.response,
            role: 'assistant',
            created_at: new Date().toISOString(),
            response_time: response.response_time,
          })
        }

        return newMessages
      })

      return response
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
      setMessages(prev => prev.filter(m => m.id !== tempUserMessage.id))
      return null
    } finally {
      setIsLoading(false)
    }
  }, [currentSessionId, saveSessionToStorage])

  const loadHistory = useCallback(async (sessionId: string): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await getSessionHistory(sessionId)
      setMessages(response.messages)
      setCurrentSessionId(sessionId)
      saveSessionToStorage(sessionId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load history')
    } finally {
      setIsLoading(false)
    }
  }, [saveSessionToStorage])

  const clearMessages = useCallback(() => {
    setMessages([])
    setCurrentSessionId(null)
    clearSessionFromStorage()
  }, [clearSessionFromStorage])

  const setSessionId = useCallback((sessionId: string | null) => {
    setCurrentSessionId(sessionId)
    if (sessionId) {
      saveSessionToStorage(sessionId)
    } else {
      clearSessionFromStorage()
    }
  }, [saveSessionToStorage, clearSessionFromStorage])

  return {
    messages,
    isLoading,
    error,
    currentSessionId,
    sendMessage,
    loadHistory,
    clearMessages,
    setSessionId,
  }
}
