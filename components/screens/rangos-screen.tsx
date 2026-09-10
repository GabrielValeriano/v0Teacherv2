'use client'

import { Check, Crown } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { cn } from '@/lib/utils'
import {
  RANKS,
  LEADERBOARD,
  getRankForPoints,
} from '@/lib/teacherv2-data'

export function RangosScreen() {
  const { points } = useApp()
  const myRank = getRankForPoints(points)
  const ranking = [...LEADERBOARD].sort((a, b) => b.points - a.points)

  return (
    <div className="flex flex-col gap-6 px-5 pb-6 pt-5">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Rangos</h1>

      {/* Leaderboard */}
      <section>
        <h2 className="mb-3 font-heading font-bold">Tabla de recicladores</h2>
        <ul className="flex flex-col gap-2">
          {ranking.map((entry, i) => (
            <li
              key={entry.id}
              className={cn(
                'flex items-center gap-3 rounded-2xl border p-3',
                entry.isCurrentUser
                  ? 'border-primary/40 bg-primary/8'
                  : 'border-border bg-card',
              )}
            >
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                  i === 0
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-muted-foreground',
                )}
              >
                {i + 1}
              </span>
              <span className="flex-1 font-medium">
                {entry.name}
                {entry.isCurrentUser && (
                  <span className="ml-2 rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">
                    vos
                  </span>
                )}
              </span>
              {i === 0 && <Crown className="size-4 text-accent" />}
              <span className="font-heading text-sm font-bold text-primary">
                {entry.points.toLocaleString('es-AR')}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Benefits by rank */}
      <section>
        <h2 className="mb-3 font-heading font-bold">Beneficios por rango</h2>
        <ul className="flex flex-col gap-3">
          {RANKS.map((rank) => {
            const Icon = rank.icon
            const unlocked = points >= rank.min
            const isCurrent = rank.id === myRank.id
            return (
              <li
                key={rank.id}
                className={cn(
                  'rounded-2xl border p-4',
                  isCurrent
                    ? 'border-primary bg-primary/8'
                    : unlocked
                      ? 'border-border bg-card'
                      : 'border-border bg-secondary/30 opacity-70',
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex size-11 items-center justify-center rounded-xl',
                      unlocked
                        ? 'bg-accent/25 text-primary'
                        : 'bg-secondary text-muted-foreground',
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <div className="flex-1">
                    <p className="font-heading font-bold">{rank.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Desde {rank.min.toLocaleString('es-AR')} pts
                    </p>
                  </div>
                  {isCurrent && (
                    <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      Actual
                    </span>
                  )}
                </div>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {rank.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
