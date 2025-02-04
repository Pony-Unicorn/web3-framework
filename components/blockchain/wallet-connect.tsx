import { HtmlHTMLAttributes } from "react"

export const WalletConnect = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={className} {...props}>
      <appkit-button />
    </span>
  )
}
