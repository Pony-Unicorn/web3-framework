import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

import AppKitProvider from '@/context/AppKitProvider'
import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/sonner'
import { TailwindIndicator } from '@/components/elements/TailwindIndicator'
import { Footer } from '@/components/shared/Footer'
import { SiteHeader } from '@/components/shared/SiteHeader'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Bolt',
  description: 'Bolt',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <AppKitProvider>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />

              <main className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-8">
                {children}
              </main>

              <Footer />
            </div>
          </AppKitProvider>
          <Toaster />
        </ThemeProvider>
        <TailwindIndicator />
      </body>
    </html>
  )
}
