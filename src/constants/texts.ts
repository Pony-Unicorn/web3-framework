/**
 * 中文文本常量
 * 简化的文本管理，只支持中文
 */
export const texts = {
  nav: {
    home: '首页',
    about: '关于',
    preview: '预览',
  },
  home: {
    title: 'Bolt 是构建 Dapp 的新起点',
    description: '快速启动，模块清晰，组件现代，是你构建下一代 Web3 应用的理想起点',
    features: {
      'nextjs-shadcn': {
        title: 'Next.js + shadcn/ui',
        description: '强大且现代的全栈 UI 架构',
      },
      'tailwind': {
        title: 'Tailwind CSS',
        description: '原子化 CSS，快速搭建响应式 UI',
      },
      'motion': {
        title: 'Framer Motion',
        description: '炫酷且顺滑的动画体验',
      },
      'wagmi': {
        title: 'Wagmi + viem',
        description: '下一代 EVM 钱包交互工具',
      },
      'appkit': {
        title: '@reown/appkit',
        description: '一站式 DApp 构建集成方案',
      },
      'ready': {
        title: '开箱即用',
        description: '快速启动，支持拓展与定制',
      },
    },
    info: {
      title: '框架信息',
      version: '版本',
      mode: '模式',
      testnets: '使用测试网',
      lastUpdate: '最后更新',
    },
    techStack: '技术栈',
  },
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    confirm: '确认',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    copy: '复制',
    copied: '已复制',
    connectWallet: '连接钱包',
    disconnectWallet: '断开钱包',
  },
  wallet: {
    connected: '已连接',
    disconnected: '未连接',
    balance: '余额',
    address: '地址',
    network: '网络',
    switchNetwork: '切换网络',
  },
  errors: {
    walletNotConnected: '钱包未连接',
    networkNotSupported: '不支持的网络',
    transactionFailed: '交易失败',
    insufficientBalance: '余额不足',
  },
} as const

/**
 * 获取文本的工具函数
 * @param key 文本键，支持嵌套访问，如 'home.title'
 * @param fallback 降级文本
 * @returns 文本内容
 */
export function getText(key: string, fallback?: string): string {
  const keys = key.split('.')
  let value: any = texts
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return fallback || key
    }
  }
  
  return typeof value === 'string' ? value : fallback || key
}

// 类型定义
export type TextKey = keyof typeof texts
export type NestedKeyOf<T> = T extends string 
  ? never 
  : T extends object 
  ? {
      [K in keyof T]: K extends string 
        ? T[K] extends object 
          ? `${K}.${NestedKeyOf<T[K]>}` 
          : K
        : never
    }[keyof T]
  : never

export type TextPath = NestedKeyOf<typeof texts>