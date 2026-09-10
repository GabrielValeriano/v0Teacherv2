'use client'

import { Home, Gift, Trophy, User } from 'lucide-react'
import { useApp, type ScreenName } from '@/components/app-provider'
import { cn } from '@/lib/utils'

const TABS: { screen: ScreenName; label: string; icon: typeof Home }[] = [
  { screen: 'home', label: 'Home', icon: Home },
  { screen: 'canjes', label: 'Canje', icon: Gift },
  { screen: 'rangos', label: 'Rangos', icon: Trophy },
  { screen: 'perfil', label: 'Perfil', icon: User },
]

export function BottomNav({ active }: { active: ScreenName }) {
  const { switchTab } = useApp()
  return (
    <nav className="border-t border-border/70 bg-card/95 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-md">
      <ul className="flex items-stretch justify-around">
        {TABS.map(({ screen, label, icon: Icon }) => {
          const isActive = active === screen
          return (
            <li key={screen} className="flex-1">
              <button
                type="button"
                onClick={() => switchTab(screen)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'flex w-full flex-col items-center gap-1 rounded-xl py-1.5 text-[11px] font-medium transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'flex h-8 w-14 items-center justify-center rounded-full transition-colors',
                    isActive && 'bg-primary/12',
                  )}
                >
                  <Icon className="size-5" strokeWidth={isActive ? 2.6 : 2} />
                </span>
                {label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
