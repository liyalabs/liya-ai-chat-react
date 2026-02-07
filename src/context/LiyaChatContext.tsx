// Liya AI Chat React - Context Provider
import React, { createContext, useContext, useEffect, useState } from 'react'
import type { LiyaChatConfig, LiyaChatContextValue } from '../types'
import { initializeClient } from '../api'

const LiyaChatContext = createContext<LiyaChatContextValue | null>(null)

export interface LiyaChatProviderProps {
  config: LiyaChatConfig
  children: React.ReactNode
}

export function LiyaChatProvider({ config, children }: LiyaChatProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (config.apiKey && config.baseUrl && config.assistantId) {
      initializeClient(config)
      setIsInitialized(true)
    }
  }, [config])

  const value: LiyaChatContextValue = {
    config,
    isInitialized,
  }

  return (
    <LiyaChatContext.Provider value={value}>
      {children}
    </LiyaChatContext.Provider>
  )
}

export function useLiyaChatContext(): LiyaChatContextValue {
  const context = useContext(LiyaChatContext)
  if (!context) {
    throw new Error('useLiyaChatContext must be used within a LiyaChatProvider')
  }
  return context
}

export { LiyaChatContext }
