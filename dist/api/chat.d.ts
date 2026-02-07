import { SendMessageResponse, SessionHistoryResponse } from '../types';

export declare function sendMessage(message: string, sessionId?: string, fileIds?: string[]): Promise<SendMessageResponse>;
export declare function getSessionHistory(sessionId: string, limit?: number, offset?: number): Promise<SessionHistoryResponse>;
