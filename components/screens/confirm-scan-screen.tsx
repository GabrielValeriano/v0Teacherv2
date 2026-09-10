'use client'

import { ScanLine, ShieldCheck, IdCard } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { Button } from '@/components/ui/button'

export function ConfirmScanScreen() {
  const { navigate } = useApp()

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Verificá tu identidad" />
      <div className="flex flex-1 flex-col px-6 pb-8 pt-6">
        <div className="mx-auto flex size-24 items-center justify-center rounded-3xl bg-primary/10 text-primary">
          <IdCard className="size-12" strokeWidth={1.8} />
        </div>

        <h2 className="mt-6 text-center font-heading text-xl font-bold text-balance">
          Vamos a escanear tu documento
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground text-pretty">
          Necesitamos leer el código de barras de tu DNI para vincular tus
          reciclajes a tu cuenta. Así sabemos a quién sumarle los puntos en la
          caja TeacherV2.
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {[
            {
              icon: ScanLine,
              text: 'Escaneamos únicamente el código de barras del DNI.',
            },
            {
              icon: ShieldCheck,
              text: 'Tus datos se usan solo para identificarte al reciclar.',
            },
          ].map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-5" />
              </span>
              <span className="text-sm text-muted-foreground text-pretty">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => navigate('scan-document')}
          size="lg"
          className="mt-auto h-12 rounded-2xl text-base"
        >
          <ScanLine className="size-5" />
          Escanear documento
        </Button>
      </div>
    </div>
  )
}
