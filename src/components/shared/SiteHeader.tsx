'use client'

import { HTMLAttributeAnchorTarget } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import useScroll from '@/hooks/use-scroll'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

interface NavItem {
  label: string
  href: string
  target?: HTMLAttributeAnchorTarget
}

const navItems: NavItem[] = [
  {
    label: '首页',
    href: '/',
  },
  {
    label: '预览',
    href: '/preview',
  },
  {
    label: '关于',
    href: '/about',
  },
  {
    label: 'Github',
    href: 'https://github.com/Pony-Unicorn/web3-framework',
    target: '_blank',
  },
  {
    label: 'X',
    href: 'https://x.com/shunfengge',
    target: '_blank',
  },
]

export function SiteHeader() {
  const scrolled = useScroll()
  const pathname = usePathname()

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b backdrop-blur transition-all',
        scrolled && 'bg-background/50'
      )}
    >
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* <MainNav /> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="hover:text-foreground active:text-foreground focus:text-foreground hover:bg-transparent focus:bg-transparent focus:outline-none active:bg-transparent"
              >
                <Link href="/">
                  <img
                    src="/bolt-logo-transparent.png"
                    alt="bolt logo"
                    className="h-14 w-auto"
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {navItems.map(({ label, href, target }) => (
              <NavigationMenuItem key={label}>
                <NavigationMenuLink
                  asChild
                  active={pathname === href}
                  className="hover:text-foreground/80 focus:text-foreground/80 data-[active=true]:text-primary inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-transparent"
                >
                  <Link href={href} target={target}>
                    <span className="relative inline-block">
                      {label}
                      {target === '_blank' && (
                        <ArrowUpRight
                          size={12}
                          className="text-foreground/50 absolute -top-1 -right-4"
                          aria-label="New window opens"
                        />
                      )}
                    </span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* <MobileNav /> */}

        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          {/* <LanguageToggle /> */}
          {/* <ThemeToggle /> */}
          <appkit-button />
        </div>
      </div>
    </header>
  )
}
