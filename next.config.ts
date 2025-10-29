import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    removeConsole:
      process.env.NEXT_PUBLIC_APP_MODE === 'pro'
        ? {
            exclude: ['error', 'warn', 'info'], // info 是需要打印的信息，warn 警告，需要处理，error 错误
          }
        : false,
  },
  // Docs: https://nextjs.org/docs/app/guides/static-exports
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
