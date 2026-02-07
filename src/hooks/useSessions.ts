// Liya AI Chat React - useSessions Hook
import { useState, useCallback } from 'react'
import type { Session } from '../types'
import {
  getSessions as apiGetSessions,
  createSession as apiCreateSession,
  deleteSession as apiDeleteSession,
} from '../api'

interface UseSessionsReturn {
  sessions: Session[]
  currentSession: Session | null
  isLoading: boolean
  error: string | null
  totalSessions: number
  loadSessions: (limit?: number, offset?: number) => Promise<void>
  createSession: (sessionName?: string) => Promise<Session | null>
  deleteSession: (sessionId: string) => Promise<boolean>
  selectSession: (session: Session | null) => void
  clearSessions: () => void
}

export function useSessions(): UseSessionsReturn {
  const [sessions, setSessions] = useState<Session[]>([])
  const [currentSession, setCurrentSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [totalSessions, setTotalSessions] = useState(0)

  const loadSessions = useCallback(async (limit = 20, offset = 0): Promise<void> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await apiGetSessions(limit, offset)
      setSessions(response.sessions)
      setTotalSessions(response.total)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load sessions')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createSession = useCallback(async (sessionName?: string): Promise<Session | null> => {
    setIsLoading(true)
    setError(null)

    try {
      const session = await apiCreateSession(sessionName)
      setSessions(prev => [session, ...prev])
      setCurrentSession(session)
      return session
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create session')
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  const deleteSession = useCallback(async (sessionId: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      await apiDeleteSession(sessionId)
      setSessions(prev => prev.filter(s => s.id !== sessionId))
      
      if (currentSession?.id === sessionId) {
        setCurrentSession(null)
      }
      
      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete session')
      return false
    } finally {
      setIsLoading(false)
    }
  }, [currentSession])

  const selectSession = useCallback((session: Session | null) => {
    setCurrentSession(session)
  }, [])

  const clearSessions = useCallback(() => {
    setSessions([])
    setCurrentSession(null)
    setTotalSessions(0)
  }, [])

  return {
    sessions,
    currentSession,
    isLoading,
    error,
    totalSessions,
    loadSessions,
    createSession,
    deleteSession,
    selectSession,
    clearSessions,
  }
}
