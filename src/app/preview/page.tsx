'use client'

import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div>
      <p>this is preview page</p>
      <Button
        onClick={() => {
          console.log('click me')
        }}
      >
        Click me
      </Button>
    </div>
  )
}
