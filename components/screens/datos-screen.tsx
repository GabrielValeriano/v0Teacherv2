'use client'

import { ScreenHeader } from '@/components/screen-header'

const SECTIONS = [
  {
    title: 'Uso de tus datos',
    text: 'TeacherV2 utiliza el código de barras de tu DNI únicamente para identificarte al reciclar y acreditar los puntos a tu cuenta. No compartimos tus datos con terceros.',
  },
  {
    title: 'Puntos y canjes',
    text: 'Cada residuo reciclado en una caja TeacherV2 suma 5 puntos. Los puntos no tienen valor monetario, no son transferibles y solo pueden canjearse por los productos disponibles en el kiosco de la institución.',
  },
  {
    title: 'Validez de los canjes',
    text: 'El QR generado para un canje es de un solo uso y debe presentarse en la caja del kiosco. Una vez escaneado por el cajero, los puntos se descuentan y no se reintegran.',
  },
  {
    title: 'Buen uso de la caja',
    text: 'El uso indebido de la caja de reciclaje o el intento de sumar puntos con residuos no válidos puede resultar en la suspensión de la cuenta.',
  },
]

export function DatosScreen() {
  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Datos y condiciones" />
      <div className="flex flex-1 flex-col gap-4 px-6 pb-8 pt-4">
        {SECTIONS.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <h2 className="font-heading font-bold">{s.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
              {s.text}
            </p>
          </section>
        ))}
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Última actualización: septiembre 2026
        </p>
      </div>
    </div>
  )
}
