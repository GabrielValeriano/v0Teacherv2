'use client'

import { useState } from 'react'
import { AtSign, Lock, Check } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { TextField } from '@/components/text-field'
import { Button } from '@/components/ui/button'

export function AjustesScreen() {
  const { username, setUsername, back } = useApp()
  const [name, setName] = useState(username)
  const [saved, setSaved] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUsername(name.trim() || username)
    setSaved(true)
    setTimeout(() => back(), 900)
  }

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Ajustes" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col gap-5 px-6 pb-8 pt-4"
      >
        <div>
          <h2 className="font-heading font-bold">Cuenta</h2>
          <p className="text-sm text-muted-foreground">
            Actualizá tu usuario y contraseña.
          </p>
        </div>

        <TextField
          label="Nombre de usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<AtSign className="size-5" />}
        />
        <TextField
          label="Nueva contraseña"
          type="password"
          placeholder="Dejar en blanco para no cambiar"
          icon={<Lock className="size-5" />}
        />
        <TextField
          label="Verificar contraseña"
          type="password"
          placeholder="Repetí la nueva contraseña"
          icon={<Lock className="size-5" />}
        />

        <Button
          type="submit"
          size="lg"
          className="mt-auto h-12 rounded-2xl text-base"
        >
          {saved ? (
            <>
              <Check className="size-5" />
              Guardado
            </>
          ) : (
            'Guardar cambios'
          )}
        </Button>
      </form>
    </div>
  )
}
