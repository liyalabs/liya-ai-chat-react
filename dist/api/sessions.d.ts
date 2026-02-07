import { Session, SessionListResponse } from '../types';

export declare function getSessions(limit?: number, offset?: number): Promise<SessionListResponse>;
export declare function createSession(sessionName?: string, externalSessionId?: string): Promise<Session>;
export declare function getSession(sessionId: string): Promise<Session>;
export declare function deleteSession(sessionId: string): Promise<void>;
