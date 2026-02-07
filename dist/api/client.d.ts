import { AxiosInstance } from 'axios';
import { LiyaChatConfig } from '../types';

export declare function initializeClient(config: LiyaChatConfig): AxiosInstance;
export declare function getClient(): AxiosInstance;
export declare function getConfig(): LiyaChatConfig;
export declare function isInitialized(): boolean;
