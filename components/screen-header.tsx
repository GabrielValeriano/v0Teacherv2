'use client'

import { ChevronLeft } from 'lucide-react'
import { useApp } from '@/components/app-provider'

export function ScreenHeader({
  title,
  onBack,
}: {
  title: string
  onBack?: () => void
}) {
  const { back } = useApp()
  return (
    <header className="sticky top-0 z-20 flex items-center gap-2 border-b border-border/60 bg-background/85 px-3 py-3 backdrop-blur-md">
      <button
        type="button"
        onClick={onBack ?? back}
        aria-label="Volver"
        className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary active:scale-95"
      >
        <ChevronLeft className="size-6" />
      </button>
      <h1 className="font-heading text-lg font-semibold tracking-tight text-balance">
        {title}
      </h1>
    </header>
  )
}
