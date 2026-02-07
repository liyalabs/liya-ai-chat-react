import { Session } from '../../types';

interface SessionSidebarProps {
    sessions: Session[];
    currentSessionId?: string | null;
    isLoading?: boolean;
    assistantName?: string;
    onSelectSession: (session: Session) => void;
    onCreateSession: () => void;
    onDeleteSession: (sessionId: string) => void;
}
export declare function SessionSidebar({ sessions, currentSessionId, isLoading, assistantName, onSelectSession, onCreateSession, onDeleteSession, }: SessionSidebarProps): import("react/jsx-runtime").JSX.Element;
export {};
