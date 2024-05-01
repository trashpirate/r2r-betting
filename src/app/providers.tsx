"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, cookieToInitialState } from 'wagmi'
import { ConnectKitProvider } from 'connectkit'
import { config } from '@/lib/config';

const queryClient = new QueryClient()

export function Providers({ children, cookie }: { children: React.ReactNode, cookie: string | null }) {
    const initialState = cookieToInitialState(config, cookie);
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}