import { default as React } from 'react';
import { LiyaChatConfig, LiyaChatContextValue } from '../types';

declare const LiyaChatContext: React.Context<LiyaChatContextValue | null>;
export interface LiyaChatProviderProps {
    config: LiyaChatConfig;
    children: React.ReactNode;
}
export declare function LiyaChatProvider({ config, children }: LiyaChatProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useLiyaChatContext(): LiyaChatContextValue;
export { LiyaChatContext };
