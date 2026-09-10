'use client'

import {
  FileText,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Coins,
} from 'lucide-react'
import { useApp, type ScreenName } from '@/components/app-provider'
import { getRankForPoints } from '@/lib/teacherv2-data'

export function PerfilScreen() {
  const { username, points, navigate } = useApp()
  const rank = getRankForPoints(points)
  const RankIcon = rank.icon

  const items: {
    icon: typeof FileText
    label: string
    screen: ScreenName
    danger?: boolean
  }[] = [
    { icon: FileText, label: 'Datos y condiciones', screen: 'datos' },
    { icon: Heart, label: 'Mis productos preferidos', screen: 'favoritos' },
    { icon: Settings, label: 'Ajustes', screen: 'ajustes' },
    { icon: LogOut, label: 'Cerrar sesión', screen: 'logout', danger: true },
  ]

  return (
    <div className="flex flex-col gap-6 px-5 pb-6 pt-5">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Perfil</h1>

      <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-6">
        <span className="flex size-20 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-primary-foreground">
          {username.slice(0, 2).toUpperCase()}
        </span>
        <p className="mt-3 font-heading text-lg font-bold">@{username}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm font-medium">
            <RankIcon className="size-4 text-primary" />
            {rank.name}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Coins className="size-4" />
            {points.toLocaleString('es-AR')} pts
          </span>
        </div>
      </div>

      <ul className="flex flex-col gap-2">
        {items.map(({ icon: Icon, label, screen, danger }) => (
          <li key={label}>
            <button
              type="button"
              onClick={() => navigate(screen)}
              className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:bg-secondary/50"
            >
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${
                  danger
                    ? 'bg-destructive/10 text-destructive'
                    : 'bg-secondary text-primary'
                }`}
              >
                <Icon className="size-5" />
              </span>
              <span
                className={`flex-1 font-medium ${danger ? 'text-destructive' : ''}`}
              >
                {label}
              </span>
              <ChevronRight className="size-5 text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>

      <p className="text-center text-xs text-muted-foreground">
        TeacherV2 · versión 1.0.0
      </p>
    </div>
  )
}
