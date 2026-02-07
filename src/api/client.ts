// Liya AI Chat React - HTTP Client
import axios, { AxiosInstance, AxiosError } from 'axios'
import type { ApiResponse, LiyaChatConfig } from '../types'

let apiClient: AxiosInstance | null = null
let currentConfig: LiyaChatConfig | null = null

export function initializeClient(config: LiyaChatConfig): AxiosInstance {
  currentConfig = config
  
  apiClient = axios.create({
    baseURL: config.baseUrl,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': config.apiKey,
    },
  })

  apiClient.interceptors.request.use(
    (requestConfig) => requestConfig,
    (error) => Promise.reject(error)
  )

  apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiResponse>) => {
      const errorMessage = error.response?.data?.message || error.message || 'An error occurred'
      console.error('[LiyaChat] API Error:', errorMessage)
      return Promise.reject(new Error(errorMessage))
    }
  )

  return apiClient
}

export function getClient(): AxiosInstance {
  if (!apiClient) {
    throw new Error('[LiyaChat] API client not initialized. Call initializeClient first.')
  }
  return apiClient
}

export function getConfig(): LiyaChatConfig {
  if (!currentConfig) {
    throw new Error('[LiyaChat] Config not set. Initialize the provider first.')
  }
  return currentConfig
}

export function isInitialized(): boolean {
  return apiClient !== null && currentConfig !== null
}
