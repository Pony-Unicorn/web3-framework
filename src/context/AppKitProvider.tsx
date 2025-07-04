'use client'

import React, { type ReactNode } from 'react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { AppKitNetwork, mainnet, sepolia } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, type Config } from 'wagmi'

import { isTestnets } from '@/constants/app'

// Get projectId from https://cloud.reown.com
export const projectId = 'b56e18d47c72ab683b10814fe9495694' // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = isTestnets
  ? [sepolia]
  : [mainnet]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
})

// Set up queryClient
const queryClient = new QueryClient()

// Set up metadata
const metadata = {
  name: 'appkit-example',
  description: 'AppKit Example',
  url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  themeMode: 'light' as const,
  // themeVariables: {
  //   '--w3m-accent': '#000000',
  // },
  projectId,
  networks,
  metadata: metadata,
  features: {
    email: false,
    socials: false,
    swaps: false,
    onramp: false,
  },
  allWallets: 'ONLY_MOBILE',
  debug: isTestnets,
  enableWalletConnect: false, // default to true, Remove trust wallet and WalletConnect
  enableEIP6963: true,
  enableCoinbase: false, // default to true, Remove Coinbase
  featuredWalletIds: [
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
  ],
})

function AppKitProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default AppKitProvider
