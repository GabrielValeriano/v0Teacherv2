import type { ReactNode } from 'react'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-secondary/60 p-0 sm:p-6">
      <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-background sm:h-[860px] sm:max-w-[400px] sm:rounded-[2.75rem] sm:border-8 sm:border-foreground sm:shadow-2xl">
        {/* notch (only on desktop framed view) */}
        <div className="pointer-events-none absolute left-1/2 top-0 z-30 hidden h-6 w-36 -translate-x-1/2 rounded-b-2xl bg-foreground sm:block" />
        <div className="relative flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
