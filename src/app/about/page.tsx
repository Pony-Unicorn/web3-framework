'use client'

import {
  Cloud,
  Heart,
  Moon,
  Mountain,
  Sparkles,
  Star,
  Sun,
  Zap,
} from 'lucide-react'
import { motion } from 'motion/react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden px-4 py-20"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-r" />

        {/* Floating Elements */}
        <motion.div
          className="text-primary/30 absolute top-20 left-10"
          variants={floatingAnimation}
        >
          <Sparkles size={40} />
        </motion.div>
        <motion.div
          className="text-accent/30 absolute top-40 right-20"
          variants={floatingAnimation}
          animate={{
            ...floatingAnimation.animate,
            transition: { ...floatingAnimation.animate.transition, delay: 1 },
          }}
        >
          <Star size={30} />
        </motion.div>
        <motion.div
          className="text-primary/30 absolute bottom-20 left-1/4"
          variants={floatingAnimation}
          animate={{
            ...floatingAnimation.animate,
            transition: { ...floatingAnimation.animate.transition, delay: 2 },
          }}
        >
          <Heart size={35} />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h1
            className="from-primary via-primary/80 to-accent mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
            variants={fadeInUp}
          >
            关于我
          </motion.h1>

          <motion.div className="mx-auto max-w-3xl" variants={fadeInUp}>
            <div className="border-border/50 bg-card/30 rounded-2xl border p-8 backdrop-blur-sm md:p-12">
              <div className="mb-8 text-center">
                <div className="from-primary to-accent mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br">
                  <span className="text-4xl">🐴</span>
                </div>
                <h2 className="text-foreground text-2xl font-bold md:text-3xl">
                  Hi, I'm Pony
                </h2>
                <p className="text-muted-foreground mt-2 text-lg">
                  A passionate self-taught Software developer 👋🏼
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <Heart className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-foreground">
                      I'm a{' '}
                      <span className="text-primary font-semibold">
                        decentralized believer
                      </span>
                      , not a believer in cryptocurrency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <Star className="text-accent h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-foreground">
                      Currently my main job{' '}
                      <span className="text-accent font-semibold">GameFi</span>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <Sparkles className="text-primary h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-foreground">
                      I'm currently learning{' '}
                      <span className="text-primary font-semibold">
                        Algorithm design
                      </span>{' '}
                      and{' '}
                      <span className="text-primary font-semibold">
                        Blockchain
                      </span>{' '}
                      related knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 flex h-8 w-8 items-center justify-center rounded-full">
                    <Zap className="text-accent h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-foreground">
                      How to reach me: Check out my{' '}
                      <a
                        href="https://github.com/Pony-Unicorn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline transition-colors"
                      >
                        GitHub
                      </a>{' '}
                      or create{' '}
                      <a
                        href="https://github.com/Pony-Unicorn/web3-framework/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline transition-colors"
                      >
                        issues
                      </a>{' '}
                      to discuss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Separator className="my-16" />

      {/* Skills & Interests Section */}
      <motion.section
        className="px-4 py-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div className="mb-16 text-center" variants={fadeInUp}>
            <h2 className="text-foreground mb-6 text-4xl font-bold">
              技能与兴趣
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              专注于区块链技术和游戏化金融的创新应用
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-0 shadow-lg backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="from-primary to-primary/80 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br">
                      <Zap className="text-primary-foreground h-6 w-6" />
                    </div>
                    <h3 className="text-foreground text-xl font-semibold">
                      技术栈
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      'React & Next.js',
                      'TypeScript',
                      'Solidity',
                      'Web3.js / Ethers.js',
                      'Node.js',
                      'PostgreSQL / MongoDB',
                    ].map((skill) => (
                      <div key={skill} className="flex items-center gap-3">
                        <div className="bg-primary h-2 w-2 rounded-full"></div>
                        <span className="text-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card/50 border-0 shadow-lg backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="from-accent to-accent/80 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br">
                      <Star className="text-accent-foreground h-6 w-6" />
                    </div>
                    <h3 className="text-foreground text-xl font-semibold">
                      专注领域
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      'GameFi 开发',
                      'DeFi 协议设计',
                      '智能合约审计',
                      '区块链架构',
                      '算法优化',
                      '去中心化应用',
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <div className="bg-accent h-2 w-2 rounded-full"></div>
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="px-4 py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="from-primary to-accent text-primary-foreground rounded-3xl bg-gradient-to-r p-8 md:p-12"
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              让我们一起构建未来
            </h2>
            <p className="mb-8 text-xl opacity-90">
              如果你对区块链、GameFi 或开源项目感兴趣，欢迎与我交流
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Pony-Unicorn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Badge
                  variant="secondary"
                  className="border-primary-foreground/30 bg-primary-foreground/20 text-primary-foreground cursor-pointer px-6 py-3 text-sm"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  GitHub
                </Badge>
              </a>
              <a
                href="https://github.com/Pony-Unicorn/web3-framework/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <Badge
                  variant="secondary"
                  className="border-primary-foreground/30 bg-primary-foreground/20 text-primary-foreground cursor-pointer px-6 py-3 text-sm"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Issues
                </Badge>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
