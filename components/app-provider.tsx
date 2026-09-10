'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  PRODUCTS,
  RECICLAJES,
  type Product,
  type Reciclaje,
} from '@/lib/teacherv2-data'

export type ScreenName =
  | 'login'
  | 'register'
  | 'confirm-scan'
  | 'scan-document'
  | 'home'
  | 'canjes'
  | 'product'
  | 'qr'
  | 'recibo'
  | 'rangos'
  | 'informacion'
  | 'perfil'
  | 'datos'
  | 'ajustes'
  | 'reciclajes'
  | 'favoritos'
  | 'logout'

export const TAB_SCREENS: ScreenName[] = [
  'home',
  'canjes',
  'rangos',
  'perfil',
]

export type Receipt = {
  code: string
  product: Product
  date: string
}

type Frame = {
  screen: ScreenName
  product?: Product
  receipt?: Receipt
}

type AppState = {
  authed: boolean
  username: string
  points: number
  reciclajes: Reciclaje[]
  current: Frame
  canGoBack: boolean
  // auth
  login: () => void
  register: () => void
  finishScan: () => void
  logout: () => void
  // navigation
  navigate: (screen: ScreenName, extra?: Partial<Frame>) => void
  back: () => void
  switchTab: (screen: ScreenName) => void
  // domain
  generateReceipt: (product: Product) => Receipt
  confirmRedemption: (receipt: Receipt) => void
  setUsername: (name: string) => void
}

const AppContext = createContext<AppState | null>(null)

function makeCode() {
  return 'TV2-' + Math.random().toString(36).slice(2, 8).toUpperCase()
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false)
  const [username, setUsernameState] = useState('estudiante.uba')
  const [points, setPoints] = useState(740)
  const [reciclajes] = useState<Reciclaje[]>(RECICLAJES)
  const [stack, setStack] = useState<Frame[]>([{ screen: 'login' }])

  const current = stack[stack.length - 1]
  const canGoBack = stack.length > 1

  const navigate = useCallback((screen: ScreenName, extra?: Partial<Frame>) => {
    setStack((s) => [...s, { screen, ...extra }])
  }, [])

  const back = useCallback(() => {
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))
  }, [])

  const switchTab = useCallback((screen: ScreenName) => {
    setStack([{ screen }])
  }, [])

  const login = useCallback(() => {
    setAuthed(true)
    setStack([{ screen: 'home' }])
  }, [])

  const register = useCallback(() => {
    setStack((s) => [...s, { screen: 'confirm-scan' }])
  }, [])

  const finishScan = useCallback(() => {
    setAuthed(true)
    setStack([{ screen: 'home' }])
  }, [])

  const logout = useCallback(() => {
    setAuthed(false)
    setStack([{ screen: 'login' }])
  }, [])

  const generateReceipt = useCallback((product: Product): Receipt => {
    const receipt = {
      code: makeCode(),
      product,
      date: new Date().toISOString(),
    }
    setStack((s) => [...s, { screen: 'qr', product, receipt }])
    return receipt
  }, [])

  const confirmRedemption = useCallback((receipt: Receipt) => {
    setPoints((p) => Math.max(0, p - receipt.product.points))
    setStack((s) => [...s, { screen: 'recibo', receipt }])
  }, [])

  const setUsername = useCallback((name: string) => {
    setUsernameState(name)
  }, [])

  const value = useMemo<AppState>(
    () => ({
      authed,
      username,
      points,
      reciclajes,
      current,
      canGoBack,
      login,
      register,
      finishScan,
      logout,
      navigate,
      back,
      switchTab,
      generateReceipt,
      confirmRedemption,
      setUsername,
    }),
    [
      authed,
      username,
      points,
      reciclajes,
      current,
      canGoBack,
      login,
      register,
      finishScan,
      logout,
      navigate,
      back,
      switchTab,
      generateReceipt,
      confirmRedemption,
      setUsername,
    ],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export { PRODUCTS }
