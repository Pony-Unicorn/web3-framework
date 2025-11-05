import React from 'react'

// copy https://github.com/uidotdev/usehooks/blob/main/index.js#L543
export default function useIsClient() {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
