import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '~/lib/utils'

import { Button } from '~/components/ui/button'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
}

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  children,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 3000)
  }, [hasCopied])

  return (
    <Button
      className={cn('relative z-10 flex items-center gap-x-2', className)}
      onClick={async () => {
        await copyToClipboard(value)
        setHasCopied(true)
      }}
      {...props}
    >
      {children}
      <span className="sr-only">Copy</span>
      {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}
