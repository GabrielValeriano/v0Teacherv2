'use client'

import { Coins, QrCode, TriangleAlert } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { Button } from '@/components/ui/button'
import type { Product } from '@/lib/teacherv2-data'

export function ProductScreen({ product }: { product?: Product }) {
  const { points, generateReceipt } = useApp()

  if (!product) return null
  const Icon = product.icon
  const affordable = points >= product.points
  const faltan = product.points - points

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Detalle del producto" />
      <div className="flex flex-1 flex-col px-6 pb-8 pt-4">
        <div className="flex flex-col items-center rounded-3xl border border-border bg-card p-8">
          <span className="flex size-24 items-center justify-center rounded-3xl bg-accent/25 text-primary">
            <Icon className="size-12" strokeWidth={1.8} />
          </span>
          <h2 className="mt-5 text-center font-heading text-xl font-bold text-balance">
            {product.name}
          </h2>
          <div className="mt-2 flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
            <Coins className="size-4" />
            <span className="font-bold">{product.points} puntos</span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty">
          {product.description}
        </p>

        <div className="mt-6 rounded-2xl bg-secondary/50 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Tus puntos</span>
            <span className="font-semibold">{points.toLocaleString('es-AR')}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Costo del canje</span>
            <span className="font-semibold">-{product.points}</span>
          </div>
          <div className="my-2 border-t border-border" />
          <div className="flex items-center justify-between">
            <span className="font-medium">Te quedarían</span>
            <span className="font-heading text-lg font-bold text-primary">
              {affordable
                ? (points - product.points).toLocaleString('es-AR')
                : '—'}
            </span>
          </div>
        </div>

        {!affordable && (
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            <span>
              Te faltan {faltan.toLocaleString('es-AR')} puntos. Seguí reciclando
              para desbloquear este canje.
            </span>
          </div>
        )}

        <Button
          onClick={() => generateReceipt(product)}
          disabled={!affordable}
          size="lg"
          className="mt-auto h-12 rounded-2xl text-base"
        >
          <QrCode className="size-5" />
          Generar QR de canje
        </Button>
      </div>
    </div>
  )
}
