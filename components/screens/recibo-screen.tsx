'use client'

import { Check } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { Button } from '@/components/ui/button'
import type { Receipt } from '@/components/app-provider'

export function ReciboScreen({ receipt }: { receipt?: Receipt }) {
  const { points, switchTab } = useApp()

  if (!receipt) return null

  const fecha = new Date(receipt.date).toLocaleString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="flex min-h-full flex-col px-6 pb-8 pt-14">
      <div className="flex flex-col items-center">
        <span className="flex size-20 animate-[pop_0.4s_ease-out] items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-11" strokeWidth={3} />
        </span>
        <h1 className="mt-5 font-heading text-2xl font-bold tracking-tight">
          ¡Canje exitoso!
        </h1>
        <p className="mt-1 text-center text-sm text-muted-foreground text-pretty">
          Mostrá este recibo para retirar tu producto en el kiosco.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-border bg-card p-6">
        <div className="flex flex-col gap-4">
          <Row label="Producto" value={receipt.product.name} />
          <Row label="Puntos canjeados" value={`-${receipt.product.points}`} />
          <Row
            label="Puntos restantes"
            value={points.toLocaleString('es-AR')}
          />
          <Row label="Código" value={receipt.code} mono />
          <Row label="Fecha" value={fecha} />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-primary/10 py-2.5 text-sm font-semibold text-primary">
          <Check className="size-4" />
          Producto entregado
        </div>
      </div>

      <Button
        onClick={() => switchTab('canjes')}
        size="lg"
        className="mt-auto h-12 rounded-2xl text-base"
      >
        Volver a canjes
      </Button>

      <style>{`
        @keyframes pop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

function Row({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`text-right text-sm font-semibold text-foreground ${mono ? 'font-mono tracking-wider' : ''}`}
      >
        {value}
      </span>
    </div>
  )
}
