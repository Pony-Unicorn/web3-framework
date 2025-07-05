# Bolt

> A fast, modular Web3 starter built with **Next.js**, **shadcn/ui**, **Tailwind CSS**, **Motion**, and the latest in wallet tooling: **Wagmi**, **viem**, and **@reown/appkit**.

**Bolt 是一款专为 Web3 DApp 开发打造的现代前端模板**，内置最先进的钱包接入工具与设计系统，结合主流最佳实践，旨在帮助开发者以更快速度构建高质量的链上应用。

---

## 📦 更新策略

- 本项目会在每月 10 号定期更新所安装的前端依赖（如 npm 包等），以保持项目的安全性和兼容性。更新内容包括但不限于：
  - 安全补丁与漏洞修复
  - 小版本功能更新
  - 与主要依赖库的适配更新
- 如遇重大版本更新，会根据变更内容评估其影响，并视情况推迟合并。
- 欢迎社区成员在该日之前提交依赖更新的建议或 PR 🙌

---

## ⚡️ 特性 Features

- 🧱 **Next.js + shadcn/ui** — 强大且现代的全栈 UI 架构
- 🎨 **Tailwind CSS** — 原子化 CSS，快速搭建响应式 UI
- 🌀 **Framer Motion** — 炫酷且顺滑的动画体验
- 🔐 **Wagmi + viem** — 下一代 EVM 钱包交互工具
- 🚀 **@reown/appkit** — 一站式 DApp 构建集成方案
- 🧹 **ESLint + Prettier** — 内建代码风格统一与格式校验
- ⚙️ **约定式目录结构** — 支持合约 ABI、env 环境变量、类型声明等规范组织
- ⏱ **开箱即用** — 快速启动，支持拓展与定制

快速启动，模块清晰，组件现代，Bolt 是你构建下一代 Web3 应用的理想起点。

---

## 🚀 Quick Start

- Clone project

```bash
pnpm dlx degit Pony-Unicorn/web3-framework my-project

cd my-project

pnpm i
```

- Development

```bash
pnpm run dev
```

- Deploy - cloudflare page

```bash
pnpm run deploy
```

---

## 🧱 Core Dependencies

- [react](https://react.dev/) - The library for web and native user interfaces
- [nextjs](https://nextjs.org/) - The React Framework for the Web
- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [shadcn/ui](https://ui.shadcn.com) - components are included in the `/components/ui` folder
- [next-themes](https://github.com/pacocoursey/next-themes) - next themes
- [lucide](https://lucide.dev/) – Beautiful & consistent icons Made by the community.
- [Motion](https://www.framer.com/motion/) – A modern animation library
- [Font animation reference](https://variantvault.chrisabdo.dev/text-variants)
- [Simple Icons](https://simpleicons.org/) - popular brands svg

## 🛠️ Tooling

- Node Js: Use .nvmrc file for management, the version is lts/iron, it is recommended to use fnm as version management
- [pnpm](https://pnpm.io/) - The package manager must be pnpm, and the recommended version is the LTS version.
- [.gitignore](https://git-scm.com/docs/gitignore/zh_HANS-CN) - Git ignore files
- [ESLint](https://eslint.org/) - statically analyzes your code to quickly find problems.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter
- [ ] [husky](https://typicode.github.io/husky/zh/get-started.html) - Automatically check commit messages, verify code, and run tests during commits or pushes.
- [assetpack](https://pixijs.io/assetpack/docs/guide/getting-started/installation/) - It can be used to transform, combine, compress assets.

## ⚙️ Environment Configuration

- [.env](https://env.t3.gg/docs/core) - define environment variables validation for your app.

## Third-Party Libraries

- [axios](https://www.axios-http.cn/docs/intro) - Axios is a promise-based HTTP Client for node.js and the browser
- [swr](https://swr.vercel.app/zh-CN) - React Hooks library for data requests
- [dayjs](https://day.js.org/zh-CN/) - Lightweight processing time and date library
- [react-hook-form](https://react-hook-form.com/) - Form validation library
- [zod](https://zod.dev/) - TypeScript-first schema validation with static type inference
- zustand In fact, maybe you really don’t need state management in nextjs

## 🌐 Domain-specific

- [Wagmi](https://wagmi.sh/) - Wagmi Reactivity for Ethereum apps
- [viem](https://viem.sh/) - Ethereum library
- [@reown/appkit](https://docs.reown.com/appkit/next/core/installation) - Wallet connection manager

## 🤖 AI Development

- [cursor](https://www.cursor.com/cn) - AI Code Editor
  - `.cursor/rules`: [Rules](https://docs.cursor.com/context/rules#domain-specific-guidance) for Cursor AI-assisted development
  - `.cursorignore`: Files to ignore during AI code operations

## 🛰️ Deployment

- [vercel](https://vercel.com/docs/project-configuration) - vercel Configuring projects
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) - Cloudflare Pages

  - Recommend using Cloudflare Pages for deployment
  - Download your Pages project config `npx wrangler pages download config <PROJECT_NAME>`

## Shadcn/ui Theme Tooling

- [tweakcn](https://tweakcn.com/) - 近乎完美的主题生成器，自定义颜色、字体和布局，以及 AI 生成并实时预览
- [tinte](https://www.tinte.dev/shadcn) - 自带 4000+ 主题同时支持 AI 生成
- [rlabs generate](https://shadcn.rlabs.art/generate) - 功能单一的主题生成器，默认也有很多主题可选
- [10000+ Themes](https://ui.jln.dev/) - 10000+ 的主题

## 📁 Project directory structure

```text
src/
├── app/                     # App Router, nextjs Folder and file conventions
│   ├── globals.css          # 全局样式文件，只允许有这一个 css 文件

├── features/                # 业务模块，例如首页、登录、用户中心等
│   └── dashboard/
│       ├── ChartPanel.tsx   # 专属组件
│       ├── StatsCard.tsx    # 专属组件
│       ├── useProfile.ts    # 专属 hook
│       └── types.ts         # 专属类型定义

├── components/              # 通用组件
│   ├── ui/                  # shadcn/ui 自动生成的 UI 组件
│   ├── layouts/             # 页面布局组件（如 MainLayout、AuthLayout）
│   ├── shared/              # 多页面复用组件（如 Header、Footer）
│   └── elements/            # 小型功能组件（如 Modal、Toast、Loading）

├── constants/               # 所有配置文件和常量
│   ├── api.ts               # 接口地址配置
│   ├── MyToken.abi.json/ts  # 合约 ABI 文件
│   ├── app.ts               # 应用配置（如主题、模式）
│   ├── env.ts               # 环境变量
│   └── uiLabels.ts          # 按钮/标题等文案常量

├── context/                 # 所有 Context\Provider 相关的逻辑
│   └── AppKitProvider.tsx   # AppKit evm wallet

├── hooks/                   # 自定义 Hook
│   └── useDebounce.ts

├── lib/                     # 第三方库的封装（如 axios、shadcn/ui 工具函数的封装）属于“外部库的本地适配器”
│   ├── axios.ts             # axios 实例
│   └── utils.ts             # shadcn/ui 的 `cn` 函数自动生成

├── types/                   # 类型声明与接口定义
│   ├── user.d.ts            # 全局声明类型
│   └── api.d.ts             # 接口响应结构，建议所有 api 接口声明在这里

├── utils/                   # 通用工具函数，例如格式化地址、校验邮箱等，属于“业务无关的自定义纯工具”
│   ├── common.ts            # 通用工具函数
│   ├── format.ts            # 日期/金额、钱包地址等所有格式化工具类
│   └── validate.ts          # 所有验证工具类
```

## 常用命令

- 查看当前有哪些包已过时 pnpm outdated
- 升级到 semver 范围内的最新版本 pnpm up
- 将依赖升级到最新版本 pnpm up -L axios

## ✅ Todo List

- [ ] preview 页面开发
- [ ] 更改字体，避免本地开发和打包时在国内加载不稳定
- [ ] 一些常见配置
- [ ] husky
