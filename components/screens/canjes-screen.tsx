'use client'

import { Leaf, Coins, Lock, ChevronRight } from 'lucide-react'
import { useApp, PRODUCTS } from '@/components/app-provider'
import { cn } from '@/lib/utils'

export function CanjesScreen() {
  const { points, navigate } = useApp()

  return (
    <div className="flex flex-col gap-5 px-5 pb-6 pt-5">
      <h1 className="font-heading text-2xl font-bold tracking-tight">Canjear</h1>

      {/* points + reciclajes button */}
      <div className="flex items-stretch gap-3">
        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-primary p-4 text-primary-foreground">
          <Coins className="size-6" />
          <div>
            <p className="text-xs text-primary-foreground/80">Tus puntos</p>
            <p className="font-heading text-xl font-bold">
              {points.toLocaleString('es-AR')}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate('reciclajes')}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-card px-4 text-primary transition-colors hover:bg-secondary/60"
        >
          <Leaf className="size-6" />
          <span className="text-xs font-semibold text-foreground">
            Reciclajes
          </span>
        </button>
      </div>

      <div>
        <h2 className="mb-3 font-heading font-bold">Productos disponibles</h2>
        <ul className="grid grid-cols-2 gap-3">
          {PRODUCTS.map((product) => {
            const affordable = points >= product.points
            const Icon = product.icon
            return (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => navigate('product', { product })}
                  className="flex h-full w-full flex-col rounded-2xl border border-border bg-card p-4 text-left transition-all hover:border-primary/40 hover:shadow-sm active:scale-[0.98]"
                >
                  <span
                    className={cn(
                      'flex size-12 items-center justify-center rounded-xl',
                      affordable
                        ? 'bg-accent/25 text-primary'
                        : 'bg-secondary text-muted-foreground',
                    )}
                  >
                    <Icon className="size-6" />
                  </span>
                  <p className="mt-3 line-clamp-2 text-sm font-semibold leading-snug">
                    {product.name}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5">
                    {!affordable && (
                      <Lock className="size-3.5 text-muted-foreground" />
                    )}
                    <span
                      className={cn(
                        'text-sm font-bold',
                        affordable ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      {product.points} pts
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {/* rank benefits shortcut */}
      <button
        type="button"
        onClick={() => navigate('rangos')}
        className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-colors hover:bg-secondary/70"
      >
        <div>
          <p className="font-semibold">Beneficios por rango</p>
          <p className="text-sm text-muted-foreground">
            Descubrí qué desbloqueás al reciclar más
          </p>
        </div>
        <ChevronRight className="size-5 text-muted-foreground" />
      </button>
    </div>
  )
}
