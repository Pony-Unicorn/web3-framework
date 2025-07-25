import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',

  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
}

export default nextConfig
