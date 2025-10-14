import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Docs: https://nextjs.org/docs/app/guides/static-exports
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}

export default nextConfig
