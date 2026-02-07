import { Session } from '../types';

interface UseSessionsReturn {
    sessions: Session[];
    currentSession: Session | null;
    isLoading: boolean;
    error: string | null;
    totalSessions: number;
    loadSessions: (limit?: number, offset?: number) => Promise<void>;
    createSession: (sessionName?: string) => Promise<Session | null>;
    deleteSession: (sessionId: string) => Promise<boolean>;
    selectSession: (session: Session | null) => void;
    clearSessions: () => void;
}
export declare function useSessions(): UseSessionsReturn;
export {};
