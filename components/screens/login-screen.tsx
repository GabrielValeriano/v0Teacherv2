'use client'

import { AtSign, Lock } from 'lucide-react'
import { useApp } from '@/components/app-provider'
import { TeacherV2Logo } from '@/components/teacherv2-logo'
import { TextField } from '@/components/text-field'
import { Button } from '@/components/ui/button'

export function LoginScreen() {
  const { login, navigate } = useApp()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    login()
  }

  return (
    <div className="flex min-h-full flex-col justify-between px-6 pb-8 pt-14">
      <div className="flex flex-col items-center gap-6">
        <TeacherV2Logo size={64} withWordmark />
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold tracking-tight text-balance">
            Reciclá. Sumá puntos. Canjeá.
          </h1>
          <p className="mt-2 text-sm text-muted-foreground text-pretty">
            Ingresá a tu cuenta para ver tus puntos y canjearlos por productos
            reales del kiosco.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <TextField
          label="Cuenta"
          type="text"
          placeholder="tu.usuario"
          icon={<AtSign className="size-5" />}
          autoComplete="username"
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          icon={<Lock className="size-5" />}
          autoComplete="current-password"
          required
        />
        <button
          type="button"
          className="self-end text-sm font-medium text-primary"
        >
          ¿Olvidaste tu contraseña?
        </button>
        <Button type="submit" size="lg" className="mt-2 h-12 rounded-2xl text-base">
          Ingresar
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        ¿No tenés cuenta?{' '}
        <button
          type="button"
          onClick={() => navigate('register')}
          className="font-semibold text-primary underline-offset-4 hover:underline"
        >
          Registrate
        </button>
      </p>
    </div>
  )
}
