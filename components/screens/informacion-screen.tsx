'use client'

import { ScanBarcode, IdCard, Coins, Gift, Recycle } from 'lucide-react'
import { ScreenHeader } from '@/components/screen-header'

const STEPS = [
  {
    icon: ScanBarcode,
    title: 'Escaneá el residuo',
    text: 'La caja TeacherV2 lee el código de barras del residuo que vas a reciclar.',
  },
  {
    icon: IdCard,
    title: 'Identificate',
    text: 'Escaneás tu documento para que la caja sepa a quién sumarle los puntos.',
  },
  {
    icon: Coins,
    title: 'Sumás puntos',
    text: 'Por cada reciclaje se te acreditan 5 puntos automáticamente en la app.',
  },
  {
    icon: Gift,
    title: 'Canjeás premios',
    text: 'Usás tus puntos para canjear productos reales del kiosco de la institución.',
  },
]

export function InformacionScreen() {
  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="¿Cómo funciona?" />
      <div className="flex flex-1 flex-col px-6 pb-8 pt-4">
        <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
          <Recycle className="size-8" />
          <h2 className="mt-3 font-heading text-xl font-bold text-balance">
            Reciclar nunca fue tan gratificante
          </h2>
          <p className="mt-2 text-sm text-primary-foreground/85 text-pretty">
            TeacherV2 premia a los estudiantes que reciclan en la secundaria de
            la UBA, transformando cada residuo en puntos canjeables.
          </p>
        </div>

        <ol className="mt-6 flex flex-col gap-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4"
            >
              <div className="flex flex-col items-center">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent/25 text-primary">
                  <Icon className="size-5" />
                </span>
                {i < STEPS.length - 1 && (
                  <span className="mt-1 h-full w-px flex-1 bg-border" />
                )}
              </div>
              <div className="pb-1">
                <p className="font-heading font-bold">{title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground text-pretty">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4 text-center">
          <p className="font-heading text-3xl font-bold text-primary">+5</p>
          <p className="text-sm text-muted-foreground">
            puntos por cada residuo reciclado
          </p>
        </div>
      </div>
    </div>
  )
}
