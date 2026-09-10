'use client'

import { AtSign, Lock, Mail } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { ScreenHeader } from '@/components/screen-header'
import { TextField } from '@/components/text-field'
import { Button } from '@/components/ui/button'

export function RegisterScreen() {
  const { register } = useApp()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    register()
  }

  return (
    <div className="flex min-h-full flex-col">
      <ScreenHeader title="Crear cuenta" />
      <div className="flex flex-1 flex-col px-6 pb-8 pt-4">
        <p className="text-sm text-muted-foreground text-pretty">
          Creá tu cuenta de TeacherV2 para empezar a sumar puntos por cada
          reciclaje.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-4">
          <TextField
            label="Correo institucional"
            type="email"
            placeholder="nombre@escuela.uba.ar"
            icon={<Mail className="size-5" />}
            required
          />
          <TextField
            label="Nombre de usuario"
            type="text"
            placeholder="tu.usuario"
            icon={<AtSign className="size-5" />}
            required
          />
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Mínimo 8 caracteres"
            icon={<Lock className="size-5" />}
            required
          />
          <TextField
            label="Verificar contraseña"
            type="password"
            placeholder="Repetí tu contraseña"
            icon={<Lock className="size-5" />}
            required
          />

          <Button
            type="submit"
            size="lg"
            className="mt-auto h-12 rounded-2xl text-base"
          >
            Siguiente
          </Button>
        </form>
      </div>
    </div>
  )
}
