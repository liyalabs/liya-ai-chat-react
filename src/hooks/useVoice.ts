// Liya AI Chat React - useVoice Hook (Speech-to-Text)
import { useState, useCallback, useRef, useEffect } from 'react'

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
  resultIndex: number
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  abort(): void
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
  onstart: (() => void) | null
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition
    webkitSpeechRecognition: new () => SpeechRecognition
  }
}

interface UseVoiceReturn {
  isRecording: boolean
  transcript: string
  interimTranscript: string
  error: string | null
  isSupported: boolean
  startRecording: () => void
  stopRecording: () => string
  cancelRecording: () => void
  clearTranscript: () => void
}

export function useVoice(locale = 'tr-TR'): UseVoiceReturn {
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSupported, setIsSupported] = useState(false)
  
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    const SpeechRecognitionAPI = 
      typeof window !== 'undefined' 
        ? window.SpeechRecognition || window.webkitSpeechRecognition 
        : null
    setIsSupported(!!SpeechRecognitionAPI)
  }, [])

  const initRecognition = useCallback(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognitionAPI || recognitionRef.current) return

    const recognition = new SpeechRecognitionAPI()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = locale

    recognition.onstart = () => {
      setIsRecording(true)
      setError(null)
    }

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interim = ''
      let final = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          final += result[0].transcript
        } else {
          interim += result[0].transcript
        }
      }

      if (final) {
        setTranscript(prev => (prev ? prev + ' ' : '') + final)
      }
      setInterimTranscript(interim)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      const errorMessages: Record<string, string> = {
        'no-speech': 'No speech detected. Please try again.',
        'audio-capture': 'Microphone not available.',
        'not-allowed': 'Microphone permission denied.',
        'network': 'Network error occurred.',
        'aborted': 'Recording was cancelled.',
      }
      setError(errorMessages[event.error] || 'An error occurred during recording.')
      setIsRecording(false)
    }

    recognition.onend = () => {
      setIsRecording(false)
      setInterimTranscript('')
    }

    recognitionRef.current = recognition
  }, [locale])

  const startRecording = useCallback(() => {
    if (!isSupported) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    initRecognition()
    
    if (recognitionRef.current && !isRecording) {
      setTranscript('')
      setInterimTranscript('')
      setError(null)
      
      try {
        recognitionRef.current.start()
      } catch {
        setError('Failed to start recording')
      }
    }
  }, [isSupported, isRecording, initRecognition])

  const stopRecording = useCallback((): string => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop()
    }
    return transcript
  }, [isRecording, transcript])

  const cancelRecording = useCallback(() => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.abort()
    }
    setTranscript('')
    setInterimTranscript('')
  }, [isRecording])

  const clearTranscript = useCallback(() => {
    setTranscript('')
    setInterimTranscript('')
  }, [])

  useEffect(() => {
    return () => {
      if (recognitionRef.current && isRecording) {
        recognitionRef.current.abort()
      }
    }
  }, [isRecording])

  return {
    isRecording,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startRecording,
    stopRecording,
    cancelRecording,
    clearTranscript,
  }
}
