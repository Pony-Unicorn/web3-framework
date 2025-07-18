'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'
import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'
import FuzzyText from '@/components/reactbits/FuzzyText'

export default function NotFound() {
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
            404
          </FuzzyText>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          页面未找到
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md text-lg">
          抱歉，您访问的页面不存在或已被移动。请检查 URL 或返回首页。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-3"
      >
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
