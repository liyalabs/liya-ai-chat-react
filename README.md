# @liyalabs/liya-ai-chat-react

React Chat Widget & Full App Component for Liya AI Assistants.

## Features

- 🎨 **Two Modes**: Widget (floating chatbox) & App (full chat interface)
- 💬 **Real-time Chat**: Send messages and receive AI responses
- 📁 **File Upload**: Attach files to your messages
- 🎤 **Voice Input**: Speech-to-text support
- 📜 **Session History**: Browse and continue previous conversations
- 🎯 **Customizable**: Theme, colors, position, and more
- 📱 **Responsive**: Mobile-friendly design
- 🔒 **TypeScript**: Full type support

## Installation

```bash
npm install @liyalabs/liya-ai-chat-react
# or
yarn add @liyalabs/liya-ai-chat-react
# or
pnpm add @liyalabs/liya-ai-chat-react
```

## Quick Start

### Widget Mode (Website Helper)

```tsx
import React from 'react'
import { LiyaChatProvider, LiyaChatWidget } from '@liyalabs/liya-ai-chat-react'
import '@liyalabs/liya-ai-chat-react/style.css'

function App() {
  return (
    <LiyaChatProvider config={{
      apiKey: 'liwhai_your_api_key_here',
      baseUrl: 'https://app-1-ai.liyalabs.com',
      assistantId: 'your-assistant-uuid',
      assistantName: 'Destek Asistanı',
    }}>
      <div>
        <h1>My Website</h1>
        <LiyaChatWidget 
          position="bottom-right"
          theme={{ primaryColor: '#6366f1' }}
          welcomeMessage="Bu chat hizmeti Liya AI tarafından sağlanmaktadır. Size bugün nasıl yardımcı olabilirim?"
          showVoice={true}
          showFileUpload={true}
          offsetX={32}
          offsetY={32}
        />
      </div>
    </LiyaChatProvider>
  )
}
```

### App Mode (Full Chat Application)

```tsx
import React from 'react'
import { LiyaChatProvider, LiyaChatApp } from '@liyalabs/liya-ai-chat-react'
import '@liyalabs/liya-ai-chat-react/style.css'

function App() {
  return (
    <LiyaChatProvider config={{
      apiKey: 'liwhai_your_api_key_here',
      baseUrl: 'https://app-1-ai.liyalabs.com',
      assistantId: 'your-assistant-uuid',
      assistantName: 'AI Assistant',
    }}>
      <div style={{ height: '100vh' }}>
        <LiyaChatApp 
          showSidebar={true}
          sidebarWidth="320px"
          welcomeMessage="Merhaba! Yeni bir sohbet başlatın."
          showVoice={true}
          showFileUpload={true}
          onSessionCreated={(session) => console.log('New session:', session)}
          onMessageSent={(message) => console.log('Sent:', message)}
        />
      </div>
    </LiyaChatProvider>
  )
}
```

## Configuration

### Provider Config

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `apiKey` | `string` | Yes | Your Liya API key |
| `baseUrl` | `string` | Yes | API base URL |
| `assistantId` | `string` | Yes | Assistant UUID |
| `assistantName` | `string` | No | Display name for the assistant |

### Theme Configuration

```typescript
interface ThemeConfig {
  primaryColor?: string      // Main brand color (default: #6366f1)
  secondaryColor?: string    // Secondary color
  backgroundColor?: string   // Background color
  textColor?: string         // Text color
  fontFamily?: string        // Font family
  borderRadius?: string      // Border radius
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  widgetSize?: 'small' | 'medium' | 'large'
  zIndex?: number            // Z-index for widget
}

// Position offsets (px) for fine tuning the widget placement
type OffsetConfig = {
  offsetX?: number
  offsetY?: number
}
```

## Components

### LiyaChatWidget

Floating chat widget for websites.

```tsx
<LiyaChatWidget
  position="bottom-right"
  theme={{ primaryColor: '#6366f1' }}
  welcomeMessage="Bu chat hizmeti Liya AI tarafından sağlanmaktadır. Size bugün nasıl yardımcı olabilirim?"
  placeholder="Mesajınızı yazın..."
  showBranding={true}
  showVoice={true}
  showFileUpload={true}
  offsetX={24}
  offsetY={24}
  customIcon="/assets/liya-icon.svg"
  onOpen={() => console.log('Widget opened')}
  onClose={() => console.log('Widget closed')}
  onMessageSent={(msg) => console.log('Sent:', msg)}
  onMessageReceived={(msg) => console.log('Received:', msg)}
/>
```

### LiyaChatApp

Full chat application with sidebar.

```tsx
<LiyaChatApp
  theme={{ primaryColor: '#6366f1' }}
  showSidebar={true}
  sidebarWidth="300px"
  welcomeMessage="Yeni sohbet başlatın"
  placeholder="Mesajınızı yazın..."
  showVoice={true}
  showFileUpload={true}
  onSessionCreated={(session) => {}}
  onSessionSelected={(session) => {}}
  onSessionDeleted={(sessionId) => {}}
  onMessageSent={(message) => {}}
  onMessageReceived={(message) => {}}
/>
```

## Hooks

Use hooks for custom implementations:

```typescript
import { useChat, useSessions, useVoice, useFileUpload } from '@liyalabs/liya-ai-chat-react'

function CustomChat() {
  const { messages, isLoading, sendMessage, loadHistory } = useChat()
  const { sessions, createSession, deleteSession } = useSessions()
  const { isRecording, startRecording, stopRecording } = useVoice()
  const { pendingFiles, addFiles, uploadFiles } = useFileUpload()

  // Build your custom UI
}
```

## API Functions

Direct API access:

```typescript
import { 
  sendMessage, 
  getSessions, 
  createSession, 
  getSessionHistory,
  uploadFile 
} from '@liyalabs/liya-ai-chat-react'

// Send a message
const response = await sendMessage('Hello!', sessionId)

// Get sessions
const { sessions } = await getSessions()

// Create new session
const session = await createSession('New Chat')
```

## Styling

### CSS Variables

```css
:root {
  --liya-primary-color: #6366f1;
  --liya-primary-hover: #4f46e5;
  --liya-bg-color: #ffffff;
  --liya-bg-secondary: #f3f4f6;
  --liya-text-color: #374151;
  --liya-text-muted: #9ca3af;
  --liya-border-color: #e5e7eb;
  --liya-border-radius: 12px;
}
```

## TypeScript

Full TypeScript support:

```typescript
import type {
  LiyaChatConfig,
  ThemeConfig,
  Session,
  Message,
  FileAttachment
} from '@liyalabs/liya-ai-chat-react'
```

## License

MIT © Liya Labs
