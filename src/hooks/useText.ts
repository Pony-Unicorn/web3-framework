import { getText } from '@/constants/texts'

/**
 * 简化的文本Hook
 * 只支持中文，无需语言切换
 */
export function useText() {
  return {
    t: getText,
  }
}

/**
 * 更简洁的文本Hook
 */
export function useT() {
  return getText
}