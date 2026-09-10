'use client'

import { QRCodeSVG } from 'qrcode.react'
import { ScanLine } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { Button } from '@/components/ui/button'
import type { Receipt } from '@/components/app-provider'

export function QrScreen({ receipt }: { receipt?: Receipt }) {
  const { confirmRedemption } = useApp()

  if (!receipt) return null
  const Icon = receipt.product.icon

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Mostrá este QR" />
      <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-4">
        <p className="text-center text-sm text-muted-foreground text-pretty">
          Mostrale este código al cajero del kiosco. Al escanearlo se descontarán
          los puntos y recibirás tu producto.
        </p>

        <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
          <div className="rounded-2xl bg-white p-4">
            <QRCodeSVG
              value={JSON.stringify({
                code: receipt.code,
                product: receipt.product.id,
                points: receipt.product.points,
              })}
              size={196}
              level="M"
              fgColor="#12261b"
              bgColor="#ffffff"
            />
          </div>
          <p className="mt-4 text-center font-mono text-sm font-semibold tracking-wider text-foreground">
            {receipt.code}
          </p>
        </div>

        <div className="mt-6 flex w-full items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-4">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent/25 text-primary">
            <Icon className="size-5" />
          </span>
          <div className="flex-1">
            <p className="font-semibold">{receipt.product.name}</p>
            <p className="text-sm text-muted-foreground">
              {receipt.product.points} puntos
            </p>
          </div>
        </div>

        <Button
          onClick={() => confirmRedemption(receipt)}
          size="lg"
          className="mt-auto h-12 w-full rounded-2xl text-base"
        >
          <ScanLine className="size-5" />
          El cajero escaneó el QR
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          (Simulación del escaneo en la caja del kiosco)
        </p>
      </div>
    </div>
  )
}
