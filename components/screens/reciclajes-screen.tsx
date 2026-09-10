'use client'

import { Recycle, Plus } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'

export function ReciclajesScreen() {
  const { reciclajes } = useApp()
  const total = reciclajes.reduce((sum, r) => sum + r.points, 0)

  const groups = reciclajes.reduce<Record<string, typeof reciclajes>>(
    (acc, r) => {
      ;(acc[r.date] ??= []).push(r)
      return acc
    },
    {},
  )

  function formatDay(date: string) {
    return new Date(date + 'T00:00:00').toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
  }

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Reciclajes" />
      <div className="flex flex-1 flex-col px-5 pb-8 pt-4">
        <div className="flex items-center justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
          <div>
            <p className="text-sm text-primary-foreground/80">
              Total reciclado
            </p>
            <p className="font-heading text-2xl font-bold">
              {reciclajes.length} residuos
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-primary-foreground/80">Puntos ganados</p>
            <p className="font-heading text-2xl font-bold">+{total}</p>
          </div>
        </div>

        <p className="mb-2 mt-6 text-sm font-medium text-muted-foreground">
          Historial
        </p>
        <div className="flex flex-col gap-5">
          {Object.entries(groups).map(([date, items]) => (
            <div key={date}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground first-letter:uppercase">
                {formatDay(date)}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((r) => (
                  <li
                    key={r.id}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/25 text-primary">
                      <Recycle className="size-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{r.material}</p>
                      <p className="text-xs text-muted-foreground">
                        Reciclado en caja TeacherV2
                      </p>
                    </div>
                    <span className="flex items-center gap-0.5 font-heading text-sm font-bold text-primary">
                      <Plus className="size-3.5" strokeWidth={3} />
                      {r.points}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
