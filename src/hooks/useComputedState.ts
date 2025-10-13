import { useCallback, useMemo, useState } from 'react'

/**
 * useComputedState
 *
 * 一个用于维护「真实值」与「派生显示值」的 React Hook。
 *
 * ### 功能特性
 * - 支持函数式更新：`setRealValue(prev => prev + 1)`
 * - 自动计算 displayValue = compute(realValue)
 * - compute 默认是恒等函数：v => v
 * - 类型安全，轻量无副作用
 *
 * ---
 *
 * ### 🧩 基本用法
 * ```tsx
 * const { realValue, displayValue, setRealValue } = useComputedState(10, v => v * 2);
 * // realValue = 10
 * // displayValue = 20
 * setRealValue(prev => prev + 1);
 * // realValue = 11
 * // displayValue = 22
 * ```
 *
 * ### 💰 示例：格式化金额显示
 * ```tsx
 * const { realValue, displayValue, setRealValue } = useComputedState(12345, v =>
 *   v.toLocaleString("zh-CN", { style: "currency", currency: "CNY" })
 * );
 *
 * <div>
 *   <input
 *     type="number"
 *     value={realValue}
 *     onChange={e => setRealValue(Number(e.target.value))}
 *   />
 *   <p>显示值：{displayValue}</p>
 * </div>
 * ```
 *
 * ### ⚙️ 默认 compute（无需自定义）
 * ```tsx
 * const { realValue, displayValue, setRealValue } = useComputedState("hello");
 * // compute 默认为 v => v
 * // displayValue === realValue
 * ```
 */
export function useComputedState<T, U = T>(
  initialValue: T,
  compute?: (value: T) => U
) {
  const [realValue, setRealValue] = useState<T>(initialValue)

  // 若未传入 compute，则使用恒等函数
  const finalCompute = compute ?? ((v: any) => v as U)

  // 根据 realValue 计算派生值
  const displayValue = useMemo(
    () => finalCompute(realValue),
    [realValue, finalCompute]
  )

  // 支持函数式更新（与 useState 相同）
  const updateRealValue = useCallback((next: T | ((prev: T) => T)) => {
    setRealValue((prev) =>
      typeof next === 'function' ? (next as (p: T) => T)(prev) : next
    )
  }, [])

  return { realValue, setRealValue: updateRealValue, displayValue }
}
