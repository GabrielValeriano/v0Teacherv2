'use client'

import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { TeacherV2Logo } from '@/components/teacherv2-logo'

export function LogoutScreen() {
  const { logout } = useApp()

  useEffect(() => {
    const t = setTimeout(() => logout(), 1400)
    return () => clearTimeout(t)
  }, [logout])

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 px-6">
      <TeacherV2Logo size={56} withWordmark />
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="size-5 animate-spin" />
        <span className="text-sm">Cerrando sesión…</span>
      </div>
    </div>
  )
}
