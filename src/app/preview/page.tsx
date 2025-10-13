'use client'

import { useMemo } from 'react'

import { useComputedState } from '@/hooks/useComputedState'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">预览页面</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          该页面汇集各类示例组件与用法，后续会持续补充更多示例分节。
        </p>
      </header>

      <main className="space-y-8">
        <UseComputedStateSection />
        {/* 后续在此继续追加更多 Section 组件 */}
      </main>
    </div>
  )
}

function UseComputedStateSection() {
  const { realValue, setRealValue, displayValue } = useComputedState<
    number,
    string
  >(1000, (v) =>
    v.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
  )

  const squared = useMemo(() => realValue * realValue, [realValue])

  return (
    <section id="use-computed-state" className="scroll-mt-20">
      <Card>
        <CardHeader>
          <CardTitle>useComputedState（派生状态）</CardTitle>
          <CardDescription>
            维护真实值与显示值，支持函数式更新与自定义派生计算。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-muted-foreground text-sm">真实值（数字）：</p>
              <div className="mt-2 flex items-center gap-2">
                <input
                  className="border-input bg-background ring-offset-background focus-visible:ring-ring w-40 rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
                  type="number"
                  value={realValue}
                  onChange={(e) => setRealValue(Number(e.target.value || 0))}
                  aria-label="真实值"
                />
                <Button onClick={() => setRealValue((prev) => prev + 1)}>
                  +1
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setRealValue((prev) => Math.max(0, prev - 1))}
                >
                  -1
                </Button>
                <Button variant="outline" onClick={() => setRealValue(0)}>
                  重置
                </Button>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">
                  派生显示值（格式化为人民币）：
                </p>
                <p className="mt-1 text-lg leading-7 font-medium">
                  {displayValue}
                </p>
              </div>

              <div className="rounded-md border p-4">
                <p className="text-muted-foreground text-sm">
                  额外派生（平方，仅示例）：
                </p>
                <p className="mt-1 text-lg leading-7 font-medium">{squared}</p>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">快速操作：</p>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => setRealValue(66)}>设为 66</Button>
                <Button onClick={() => setRealValue(1000)}>设为 1000</Button>
                <Button onClick={() => setRealValue((prev) => prev * 10)}>
                  ×10
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
