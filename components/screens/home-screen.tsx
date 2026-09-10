'use client'

import { Gift, Leaf, ArrowRight, Info, Recycle } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { TeacherV2Logo } from '@/components/teacherv2-logo'
import { Button } from '@/components/ui/button'
import { getRankForPoints, getNextRank } from '@/lib/teacherv2-data'

export function HomeScreen() {
  const { username, points, navigate, switchTab, reciclajes } = useApp()
  const rank = getRankForPoints(points)
  const next = getNextRank(points)
  const RankIcon = rank.icon

  const progress = next
    ? Math.min(
        100,
        Math.round(((points - rank.min) / (next.min - rank.min)) * 100),
      )
    : 100
  const faltan = next ? next.min - points : 0

  return (
    <div className="flex flex-col gap-5 px-5 pb-6 pt-5">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Hola de nuevo,</p>
          <p className="font-heading text-lg font-bold tracking-tight">
            @{username}
          </p>
        </div>
        <TeacherV2Logo size={40} />
      </header>

      {/* Points hero */}
      <section className="relative overflow-hidden rounded-3xl bg-primary p-5 text-primary-foreground shadow-lg">
        <div className="absolute -right-8 -top-10 opacity-15">
          <Recycle className="size-40" strokeWidth={1.5} />
        </div>
        <div className="relative">
          <p className="text-sm font-medium text-primary-foreground/80">
            Tus puntos
          </p>
          <p className="mt-1 font-heading text-5xl font-bold tracking-tight">
            {points.toLocaleString('es-AR')}
          </p>

          <div className="mt-4 flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-sm font-medium backdrop-blur w-fit">
            <RankIcon className="size-4" />
            Rango {rank.name}
          </div>

          <div className="mt-4">
            <div className="h-2 overflow-hidden rounded-full bg-primary-foreground/20">
              <div
                className="h-full rounded-full bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/80">
              {next
                ? `Te faltan ${faltan.toLocaleString('es-AR')} puntos para llegar a ${next.name}`
                : '¡Alcanzaste el rango máximo! 🌳'}
            </p>
          </div>

          <Button
            onClick={() => switchTab('canjes')}
            size="lg"
            className="mt-5 h-12 w-full rounded-2xl bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Gift className="size-5" />
            Ir a canjes
          </Button>
        </div>
      </section>

      {/* Recycling quick stat */}
      <button
        type="button"
        onClick={() => navigate('reciclajes')}
        className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/25 text-primary">
            <Leaf className="size-5" />
          </span>
          <div>
            <p className="font-semibold">{reciclajes.length} reciclajes</p>
            <p className="text-sm text-muted-foreground">Ver tu historial</p>
          </div>
        </div>
        <ArrowRight className="size-5 text-muted-foreground" />
      </button>

      {/* Info container */}
      <section className="rounded-3xl border border-border bg-secondary/40 p-5">
        <div className="flex items-center gap-2 text-primary">
          <Info className="size-5" />
          <h2 className="font-heading font-bold">¿Por qué TeacherV2?</h2>
        </div>
        <p className="mt-2 text-sm text-muted-foreground text-pretty">
          Convertimos el reciclaje en recompensas reales para que cada botella,
          lata o papel que reciclás tenga un impacto positivo, en tu escuela y
          en el planeta.
        </p>
        <Button
          onClick={() => navigate('informacion')}
          variant="outline"
          className="mt-4 rounded-xl bg-transparent"
        >
          Conocer más
        </Button>
      </section>
    </div>
  )
}
