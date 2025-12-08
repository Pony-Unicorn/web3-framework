import { Home } from 'lucide-react'
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import { motion } from 'motion/react'
import { TailwindIndicator } from '~/components/elements/TailwindIndicator'
import FuzzyText from '~/components/react-bits/FuzzyText'
import { Footer } from '~/components/shared/Footer'
import { SiteHeader } from '~/components/shared/SiteHeader'
import { Button } from '~/components/ui/button'
import { Toaster } from '~/components/ui/sonner'
import AppKitProvider from '~/context/AppKitProvider'
import type { Route } from './+types/root'
import './app.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Bolt' },
    {
      name: 'description',
      content:
        'dApp framework built using React Router, @reown/appkit and more! ',
    },
  ]
}

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
        <TailwindIndicator />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col items-center justify-center"
      >
        <div className="mb-5">
          <FuzzyText
            baseIntensity={0.3}
            // hoverIntensity={hoverIntensity}
            // enableHover={enableHover}
            color="#ee9a00ff"
          >
            {message}
          </FuzzyText>
        </div>

        <p className="text-muted-foreground mb-8 max-w-md text-lg">{details}</p>

        {stack && (
          <pre className="w-full overflow-x-auto p-4">
            <code>{stack}</code>
          </pre>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-3"
      >
        <Button asChild size="lg">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
