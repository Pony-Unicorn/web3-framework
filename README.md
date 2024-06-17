# Hexagon - Web3 App Starter Kit

# Getting Started

nodeJs：使用 .nvmrc 文件进行管理，版本为 lts/iron , 建议使用 fnm 作为版本管理

依赖包管理：必须使用 pnpm，版本为 9.1.4

### Use

```bash
pnpm create next-app -e https://github.com/Pony-Unicorn/web3-framework
```

#### Development

```bash
pnpm dev
```

### 错误处理

- 推荐使用 `[err, res]` first error 形式进行错误处理，外部 throw 进行封装

```
const [err, res] = getUserInfo()
if(err){
  // Left code
}
// Right code
```

### Core Dependencies

- [Wagmi](https://wagmi.sh/) - Wagmi Reactivity for Ethereum apps
- [viem](https://viem.sh/) - Ethereum library
- [web3modal](https://docs.walletconnect.com/appkit/next/core/installation/) - Wallet connection manager
- [Vercel](https://vercel.com/) - App Infrastructure

### User Interface

- [TailwindCSS](https://tailwindcss.com) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [shadcn-ui-theme-generator](https://gradient.page/tools/shadcn-ui-theme-generator) - theme generator
- [ui.shadcn.com](https://ui.shadcn.com) components are included in the `/components/ui` folder
- [Framer Motion](https://www.framer.com/motion/) – Motion library for React to animate components with ease
- [React Icons](https://github.com/react-icons/react-icons) – Beautifully simple, pixel-perfect icons

### Developer Experience

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript
- [AssetPack](https://github.com/pixijs/assetpack/tree/main/) – AssetPack is a tool for optimising assets for the web. It can be used to transform, combine, compress assets. Any asset that you want to transform or optimise into something else can be done with AssetPack.

### 目录结构

### 命名：

- 组件名字使用大驼峰，组件的文件名使用连字符
- 基础变量使用匈牙利命名规范，变量名 = 前缀(类型) + 描述(首字母大写)。例如 const iMyAge: number = 18

| 前缀 | 描述                 |
| :--- | :------------------- |
| a    | 数组 Array           |
| b    | 布尔值 Boolean       |
| cr   | 颜色参考值 Color Ref |
| fn   | 函数 Function        |
| h    | 句柄 Handle          |
| i    | 整形 Int             |
| s    | 字符串 String        |

### Color

- background 背景色
- foreground 前景色
- popover 弹出窗色
- card 卡片色
- border 边框色
- input 输入框色
- muted 柔和色
- primary 重要色
- secondary 次要色
- accent 强调色
- destructive 警告、破坏性的
- ring

### Todo

- [ ] 布局组件 flex、box、grid
- [ ] 面板弹窗管理
- [ ] 框架优化
  - [ ] 项目以后自己安装 ui shadcn
  - [ ] 替换 `react-icons/fa` 图标库
  - [ ] 调试控制台报错
  - [ ] 项目配置使用配置文件生成，只配置一遍？，最好配置文件，然后脚本生成一下
  - [ ] 合约调用返回错误，框架中没有友好的提示 viem 的错误处理
    - console.log("error message >>>", error?.message.split("\n")[2])

### 多语言注意事项

- 配置多语言后，需要使用src/navigation 中的 Link, redirect, usePathname, useRouter
