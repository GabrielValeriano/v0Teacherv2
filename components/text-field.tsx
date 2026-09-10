'use client'

import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon?: ReactNode
}

export function TextField({ label, icon, className, ...props }: TextFieldProps) {
  const id = useId()
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={cn(
            'h-12 w-full rounded-2xl border border-border bg-card px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25',
            icon && 'pl-11',
            className,
          )}
          {...props}
        />
      </div>
    </div>
  )
}
