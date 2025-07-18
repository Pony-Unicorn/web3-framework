'use client'

import { motion } from 'motion/react'

import { isTestnets, version } from '@/constants/app'
import { env } from '@/constants/env'
import { useText } from '@/hooks/useText'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from '@/components/elements/CopyButton'

const features = [
  {
    titleKey: 'home.features.nextjs-shadcn.title',
    descriptionKey: 'home.features.nextjs-shadcn.description',
    icon: '🧱',
  },
  {
    titleKey: 'home.features.tailwind.title',
    descriptionKey: 'home.features.tailwind.description',
    icon: '🎨',
  },
  {
    titleKey: 'home.features.motion.title',
    descriptionKey: 'home.features.motion.description',
    icon: '🌀',
  },
  {
    titleKey: 'home.features.wagmi.title',
    descriptionKey: 'home.features.wagmi.description',
    icon: '🔐',
  },
  {
    titleKey: 'home.features.appkit.title',
    descriptionKey: 'home.features.appkit.description',
    icon: '🚀',
  },
  {
    titleKey: 'home.features.ready.title',
    descriptionKey: 'home.features.ready.description',
    icon: '⏱',
  },
]

const createCommandStr = 'pnpm dlx degit Pony-Unicorn/web3-framework my-project'

export default function Home() {
  const { t } = useText()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold">{t('home.title')}</h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
          {t('home.description')}
        </p>
        <div className="flex justify-center">
          <CopyButton
            value={createCommandStr}
            className="group from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 focus:ring-primary/50 dark:focus:ring-primary/30 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-0.5 text-sm font-medium text-white focus:ring-2 focus:outline-none"
          >
            <span className="text-foreground text-sm group-hover:text-white sm:text-base">
              <span className="hidden sm:inline">{createCommandStr}</span>
              <span className="sm:hidden">pnpm dlx degit ...</span>
            </span>
          </CopyButton>
        </div>
      </motion.div>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.titleKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <div className="mb-2 text-3xl">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{t(feature.titleKey)}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t(feature.descriptionKey)}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="border-primary/10 bg-background/80 mt-20 mb-16 rounded-xl border py-4 shadow-sm">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          {t('home.info.title')}
        </h2>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              {t('home.info.version')}:
            </span>
            <Badge className="mt-1" variant="secondary">
              {version}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              {t('home.info.mode')}:
            </span>
            <Badge className="mt-1" variant="outline">
              {env.NEXT_PUBLIC_APP_MODE}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              {t('home.info.testnets')}:
            </span>
            <Badge
              className="mt-1"
              variant={isTestnets ? 'destructive' : 'default'}
            >
              {isTestnets.toString().toUpperCase()}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              {t('home.info.lastUpdate')}:
            </span>
            <Badge className="mt-1" variant="secondary">
              2025-05-16
            </Badge>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          {t('home.techStack')}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'React 19',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn UI',
            'Motion',
            'SWR',
            'AppKit',
            'wagmi',
            'viem',
          ].map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-primary/20 text-primary/80 bg-background rounded-xl border-2 px-3 py-1 text-sm font-semibold"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
