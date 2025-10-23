# Bolt - Web3 DApp Framework 项目概述

## 📖 项目简介

**Bolt** 是一个现代化的 Web3 去中心化应用（DApp）开发框架，专为快速构建高质量的区块链应用而设计。该项目基于 Next.js 15 和 React 19，集成了业界领先的 Web3 工具链，提供了完整的开发环境和最佳实践。

Bolt 不仅是一个模板，更是一个开箱即用的解决方案，它结合了现代前端开发的最新技术栈和 Web3 生态的核心工具，让开发者可以专注于业务逻辑的实现，而不必担心基础设施的搭建。

## 🎯 设计理念

- **快速启动**: 零配置即可开始开发，所有基础设施已预配置完成
- **模块化**: 清晰的目录结构和模块划分，便于维护和扩展
- **类型安全**: 完整的 TypeScript 支持，提供类型推导和智能提示
- **最佳实践**: 遵循 React、Next.js 和 Web3 开发的最佳实践
- **开发体验**: 集成现代化的开发工具，提供流畅的开发体验

## ✨ 核心特性

### 前端技术栈

- **Next.js 15.5.6**: 采用最新的 App Router 架构，支持 Turbopack 构建，提供极致的开发和生产性能
- **React 19**: 最新版本的 React，享受最新的特性和性能优化
- **TypeScript**: 完整的类型支持，提升代码质量和开发效率
- **Tailwind CSS 4**: 原子化 CSS 框架，快速构建响应式界面
- **shadcn/ui**: 基于 Radix UI 的高质量组件库，支持完全自定义

### Web3 集成

- **@reown/appkit**: 一站式钱包连接解决方案（原 WalletConnect AppKit），支持多链和多钱包
- **Wagmi 2**: 强大的 React Hooks 库，简化以太坊交互逻辑
- **viem 2**: 轻量级、类型安全的以太坊库，性能优异
- **多链支持**: 可轻松扩展支持以太坊、BSC、Polygon 等多条 EVM 兼容链

### 开发工具

- **ESLint + Prettier**: 代码质量和风格统一保障
- **Motion (Framer Motion)**: 流畅的动画和交互效果
- **React Hook Form + Zod**: 表单处理和验证的最佳实践
- **SWR**: 高效的数据获取和缓存策略
- **Zustand**: 轻量级的状态管理（按需使用）

### 工程化

- **环境变量管理**: 基于 @t3-oss/env-core 的类型安全环境变量
- **资源管理**: AssetPack 资源优化和转换
- **部署支持**: 完美支持 Vercel 和 Cloudflare Pages 部署

## 🏗️ 技术架构

### 架构分层

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│   (React Components + UI Library)   │
├─────────────────────────────────────┤
│         Business Logic Layer        │
│     (Features + Custom Hooks)       │
├─────────────────────────────────────┤
│         Integration Layer           │
│   (Web3 Providers + API Clients)    │
├─────────────────────────────────────┤
│         Infrastructure Layer        │
│  (Next.js + Build Tools + Deploy)   │
└─────────────────────────────────────┘
```

### 核心依赖关系

- **UI 层**: shadcn/ui + Tailwind CSS + Motion
- **状态管理**: React Context + Zustand (可选)
- **数据获取**: SWR + Axios + TanStack Query
- **Web3 交互**: AppKit → Wagmi → viem → Blockchain
- **表单处理**: React Hook Form + Zod

## 📁 项目结构

```
web3-framework/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── globals.css         # 全局样式（唯一的 CSS 文件）
│   │   └── [...routes]/        # 其他路由页面
│   │
│   ├── features/               # 业务功能模块（按功能划分）
│   │   └── demo/               # 示例模块
│   │       └── Home.tsx        # 首页功能组件
│   │
│   ├── components/             # 通用组件
│   │   ├── ui/                 # shadcn/ui 基础组件
│   │   ├── elements/           # 封装的功能组件
│   │   ├── shared/             # 共享的业务组件（Header/Footer）
│   │   ├── layouts/            # 布局组件
│   │   └── reactbits/          # 动画效果组件
│   │
│   ├── context/                # React Context 提供者
│   │   └── AppKitProvider.tsx  # Web3 钱包连接上下文
│   │
│   ├── hooks/                  # 自定义 React Hooks
│   │   ├── useComputedState.ts # 计算状态钩子
│   │   └── useScroll.ts        # 滚动监听钩子
│   │
│   ├── lib/                    # 第三方库封装
│   │   ├── utils.ts            # 工具函数（cn 等）
│   │   └── axios.ts            # Axios 实例配置
│   │
│   ├── utils/                  # 通用工具函数
│   │   ├── common.ts           # 通用工具
│   │   ├── format.ts           # 格式化工具（地址、金额等）
│   │   ├── validate.ts         # 验证工具
│   │   └── result.ts           # 结果处理（neverthrow）
│   │
│   ├── constants/              # 常量和配置
│   │   ├── env.ts              # 环境变量配置
│   │   ├── app.ts              # 应用配置
│   │   ├── api.ts              # API 地址配置
│   │   └── *.abi.json          # 智能合约 ABI
│   │
│   └── types/                  # TypeScript 类型定义
│       └── api.d.ts            # API 类型定义
│
├── docs/                       # 项目文档
│   ├── overview.md             # 项目概述（本文档）
│   ├── architecture.md         # 架构文档
│   └── api.md                  # API 文档
│
├── public/                     # 静态资源
├── .cursor/                    # Cursor AI 配置
├── next.config.ts              # Next.js 配置
├── tailwind.config.ts          # Tailwind CSS 配置
├── tsconfig.json               # TypeScript 配置
├── components.json             # shadcn/ui 配置
└── package.json                # 项目依赖
```

## 🚀 主要功能模块

### 1. 钱包连接模块

- **位置**: `src/context/AppKitProvider.tsx`
- **功能**:
  - 多钱包支持（MetaMask、WalletConnect、Coinbase Wallet 等）
  - 多链切换
  - 账户状态管理
  - 交易签名

### 2. UI 组件系统

- **位置**: `src/components/ui/`
- **功能**:
  - 基于 shadcn/ui 的可复用组件
  - 支持深色模式（next-themes）
  - 响应式设计
  - 可定制主题

### 3. 数据获取和状态管理

- **位置**: `src/hooks/`, `src/lib/axios.ts`
- **功能**:
  - SWR 数据缓存和同步
  - Axios 请求拦截和错误处理
  - 自定义 Hooks 封装

### 4. 工具函数库

- **位置**: `src/utils/`
- **功能**:
  - 地址格式化和验证
  - 数值和日期格式化
  - 结果类型处理（Result 模式）
  - 通用工具函数

## 🔧 开发指南

### 环境要求

- **Node.js**: LTS/Iron (建议使用 fnm 管理版本)
- **包管理器**: pnpm (必须)
- **编辑器**: 推荐使用 Cursor 或 VSCode

### 快速开始

```bash
# 1. 克隆项目模板
pnpm dlx degit Pony-Unicorn/web3-framework my-dapp

# 2. 进入项目目录
cd my-dapp

# 3. 安装依赖
pnpm install

# 4. 配置环境变量
cp .env.example .env.development.local

# 5. 启动开发服务器
pnpm dev
```

### 开发命令

```bash
pnpm dev          # 启动开发服务器（Turbopack）
pnpm build        # 构建生产版本
pnpm start        # 运行生产服务器
pnpm lint         # 代码检查
pnpm format       # 代码格式化检查
pnpm format-fix   # 自动格式化代码
pnpm deploy       # 部署到 Cloudflare Pages
```

### 依赖管理

```bash
pnpm outdated     # 查看过期依赖
pnpm up           # 更新到 semver 范围内的最新版本
pnpm up -L <pkg>  # 将指定包升级到最新版本
```

## 📦 更新策略

- **定期更新**: 每月 10 号更新依赖包，包括安全补丁和功能更新
- **版本策略**: 优先小版本更新，重大版本更新会评估影响后决定
- **社区贡献**: 欢迎在更新日前提交依赖更新建议或 PR

## 🎨 主题定制

Bolt 提供了灵活的主题定制能力，推荐使用以下工具：

- [tweakcn](https://tweakcn.com/) - AI 主题生成和实时预览
- [tinte](https://www.tinte.dev/shadcn) - 4000+ 预设主题
- [rlabs generate](https://shadcn.rlabs.art/generate) - 主题生成器
- [10000+ Themes](https://ui.jln.dev/) - 海量主题库

## 🌐 部署方案

### Cloudflare Pages（推荐）

```bash
# 配置 wrangler
npx wrangler pages download config <PROJECT_NAME>

# 部署
pnpm deploy
```

### Vercel

项目包含 `vercel.json` 配置，推送到 GitHub 后可直接在 Vercel 导入部署。

## 📚 学习资源

### 官方文档

- [Next.js Documentation](https://nextjs.org/docs)
- [Wagmi Documentation](https://wagmi.sh/)
- [viem Documentation](https://viem.sh/)
- [Reown AppKit](https://docs.reown.com/appkit)
- [shadcn/ui](https://ui.shadcn.com/)

### 项目文档

- [架构设计](./architecture.md) - 详细的架构说明
- [API 文档](./api.md) - API 接口文档

## 🤝 开发规范

### 代码风格

- 使用 ESLint 和 Prettier 保持代码一致性
- 遵循 Airbnb JavaScript/React 风格指南
- 组件文件使用 PascalCase，工具文件使用 camelCase
- 优先使用函数式组件和 Hooks

### 目录组织

- **单一职责**: 每个文件和模块保持单一职责
- **就近原则**: 业务相关的代码放在 `features/` 下，通用代码放在对应的通用目录
- **避免循环依赖**: 保持清晰的依赖关系

### Git 提交规范

```
feat: 新功能
fix: 修复问题
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建工具或辅助工具的变动
```

## 🔮 未来规划

- [ ] 集成 Husky 进行 Git Hooks 管理
- [ ] 添加更多常用的 Web3 工具函数
- [ ] 提供更多的示例页面和组件
- [ ] 支持更多的区块链网络
- [ ] 完善测试覆盖率
- [ ] 添加 CI/CD 配置示例

## 📄 许可证

本项目采用 MIT 许可证，可自由使用、修改和分发。

---

**Made with ❤️ for Web3 Developers**
