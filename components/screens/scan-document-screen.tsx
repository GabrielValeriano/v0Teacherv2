'use client'

import { useEffect, useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { useApp } from '@/components/app-provider'

type Stage = 'scanning' | 'detected' | 'loading'

export function ScanDocumentScreen() {
  const { finishScan } = useApp()
  const [stage, setStage] = useState<Stage>('scanning')

  useEffect(() => {
    const t1 = setTimeout(() => setStage('detected'), 2600)
    const t2 = setTimeout(() => setStage('loading'), 3800)
    const t3 = setTimeout(() => finishScan(), 5600)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [finishScan])

  return (
    <div className="flex min-h-full flex-col bg-foreground text-background">
      <div className="flex items-center justify-between px-6 pt-6 text-sm text-background/70">
        <span>Documento</span>
        <span>{stage === 'scanning' ? 'Buscando…' : 'DNI'}</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6">
        {stage === 'loading' ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="size-12 animate-spin text-accent" />
            <p className="text-base font-medium">Ingresando a TeacherV2…</p>
          </div>
        ) : (
          <div className="relative aspect-[1.58/1] w-full max-w-xs overflow-hidden rounded-3xl border border-background/20 bg-background/5">
            {/* card mockup */}
            <div className="absolute inset-x-5 top-5 space-y-2">
              <div className="h-2 w-20 rounded-full bg-background/25" />
              <div className="h-2 w-28 rounded-full bg-background/15" />
            </div>
            <div className="absolute bottom-5 left-5 flex items-end gap-[3px]">
              {Array.from({ length: 22 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-full bg-background/70"
                  style={{ height: 10 + ((i * 7) % 22) }}
                />
              ))}
            </div>

            {/* corner brackets */}
            <span className="absolute left-2 top-2 size-6 rounded-tl-xl border-l-2 border-t-2 border-accent" />
            <span className="absolute right-2 top-2 size-6 rounded-tr-xl border-r-2 border-t-2 border-accent" />
            <span className="absolute bottom-2 left-2 size-6 rounded-bl-xl border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-2 right-2 size-6 rounded-br-xl border-b-2 border-r-2 border-accent" />

            {stage === 'scanning' && (
              <span className="absolute inset-x-0 top-0 h-0.5 animate-[scan_2.4s_ease-in-out_infinite] bg-accent shadow-[0_0_12px_2px_var(--color-accent)]" />
            )}

            {stage === 'detected' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-foreground/70 backdrop-blur-sm">
                <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-7" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">Documento detectado</span>
              </div>
            )}
          </div>
        )}

        {stage !== 'loading' && (
          <p className="mt-8 text-center text-sm text-background/70 text-pretty">
            Alineá el código de barras de tu DNI dentro del recuadro.
          </p>
        )}
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 4%; }
          50% { top: 94%; }
          100% { top: 4%; }
        }
      `}</style>
    </div>
  )
}
