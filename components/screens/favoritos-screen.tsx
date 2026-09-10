'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useApp, PRODUCTS } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { cn } from '@/lib/utils'

export function FavoritosScreen() {
  const { navigate } = useApp()
  const [favorites, setFavorites] = useState<string[]>([
    'cafe',
    'cuaderno',
    'entrada',
  ])

  function toggle(id: string) {
    setFavorites((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id],
    )
  }

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Productos preferidos" />
      <div className="flex flex-1 flex-col px-5 pb-8 pt-4">
        <p className="text-sm text-muted-foreground text-pretty">
          Marcá los productos que más te interesan para tenerlos a mano cuando
          canjeás.
        </p>

        <ul className="mt-5 flex flex-col gap-2">
          {PRODUCTS.map((product) => {
            const Icon = product.icon
            const fav = favorites.includes(product.id)
            return (
              <li
                key={product.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5"
              >
                <button
                  type="button"
                  onClick={() => navigate('product', { product })}
                  className="flex flex-1 items-center gap-3 text-left"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent/25 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-primary">{product.points} pts</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => toggle(product.id)}
                  aria-label={fav ? 'Quitar de preferidos' : 'Agregar a preferidos'}
                  aria-pressed={fav}
                  className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                >
                  <Heart
                    className={cn(
                      'size-5 transition-colors',
                      fav
                        ? 'fill-destructive text-destructive'
                        : 'text-muted-foreground',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
