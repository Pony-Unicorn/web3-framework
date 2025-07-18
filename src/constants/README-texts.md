# 文本管理系统

本项目采用简化的中文文本管理方案，适合静态导出的单语言应用。

## 📁 文件结构

```
src/
├── constants/
│   └── texts.ts           # 中文文本常量
└── hooks/
    └── useText.ts         # 文本Hook
```

## 🔧 使用方法

### 1. 基础用法

```tsx
import { useText } from '@/hooks/useText'

function MyComponent() {
  const { t } = useText()
  
  return <h1>{t('home.title')}</h1>
}
```

### 2. 带降级文本

```tsx
const { t } = useText()

// 如果文本不存在，使用降级文本
const title = t('home.title', '默认标题')
```

### 3. 直接导入

```tsx
import { getText } from '@/constants/texts'

// 直接使用，无需Hook
const title = getText('home.title')
```

## 📝 添加新文本

在 `src/constants/texts.ts` 中添加：

```ts
export const texts = {
  // ... 现有文本
  newSection: {
    title: '新标题',
    description: '新描述',
  },
} as const
```

## 💡 优势

- **轻量级** - 无需复杂的多语言系统
- **类型安全** - 完整的TypeScript支持
- **静态导出友好** - 无需客户端语言检测
- **性能优化** - 所有文本在构建时确定
- **维护简单** - 集中管理所有中文文本

## 🚀 迁移指南

如果将来需要支持多语言，可以：

1. 保留当前的 `texts.ts` 作为中文翻译文件
2. 创建其他语言的翻译文件
3. 添加语言切换逻辑
4. 更新Hook以支持动态语言切换

当前的API设计已经为将来的扩展预留了空间。