'use client'

import { motion } from 'motion/react'

import { isTestnets, version } from '@/constants/app'
import { env } from '@/constants/env'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from '@/components/elements/CopyButton'

const features = [
  {
    title: 'Next.js + shadcn/ui',
    description: '强大且现代的全栈 UI 架构',
    icon: '🧱',
  },
  {
    title: 'Tailwind CSS',
    description: '原子化 CSS，快速搭建响应式 UI',
    icon: '🎨',
  },
  {
    title: 'Framer Motion',
    description: '炫酷且顺滑的动画体验',
    icon: '🌀',
  },
  {
    title: 'Wagmi + viem',
    description: '下一代 EVM 钱包交互工具',
    icon: '🔐',
  },
  {
    title: '@reown/appkit',
    description: '一站式 DApp 构建集成方案',
    icon: '🚀',
  },
  {
    title: '开箱即用',
    description: '快速启动，支持拓展与定制',
    icon: '⏱',
  },
]

const createCommandStr = 'pnpm dlx degit Pony-Unicorn/web3-framework my-project'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold">Bolt 是构建 Dapp 的新起点</h1>
        <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
          快速启动，模块清晰，组件现代，是你构建下一代 Web3 应用的理想起点
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
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <div className="mb-2 text-3xl">{feature.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="border-primary/10 bg-background/80 mt-20 mb-16 rounded-xl border py-4 shadow-sm">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
          框架信息
        </h2>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              Version:
            </span>
            <Badge className="mt-1" variant="secondary">
              {version}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              Mode:
            </span>
            <Badge className="mt-1" variant="outline">
              {env.NEXT_PUBLIC_APP_MODE}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm font-medium">
              Use Testnets:
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
              Last Update:
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
          技术栈
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
