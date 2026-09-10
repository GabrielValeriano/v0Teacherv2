'use client'

import { useApp, TAB_SCREENS } from '@/components/app-provider'
import { BottomNav } from '@/components/bottom-nav'
import { LoginScreen } from '@/components/screens/login-screen'
import { RegisterScreen } from '@/components/screens/register-screen'
import { ConfirmScanScreen } from '@/components/screens/confirm-scan-screen'
import { ScanDocumentScreen } from '@/components/screens/scan-document-screen'
import { HomeScreen } from '@/components/screens/home-screen'
import { CanjesScreen } from '@/components/screens/canjes-screen'
import { ProductScreen } from '@/components/screens/product-screen'
import { QrScreen } from '@/components/screens/qr-screen'
import { ReciboScreen } from '@/components/screens/recibo-screen'
import { RangosScreen } from '@/components/screens/rangos-screen'
import { InformacionScreen } from '@/components/screens/informacion-screen'
import { PerfilScreen } from '@/components/screens/perfil-screen'
import { DatosScreen } from '@/components/screens/datos-screen'
import { AjustesScreen } from '@/components/screens/ajustes-screen'
import { ReciclajesScreen } from '@/components/screens/reciclajes-screen'
import { FavoritosScreen } from '@/components/screens/favoritos-screen'
import { LogoutScreen } from '@/components/screens/logout-screen'

export function AppRouter() {
  const { current } = useApp()
  const { screen, product, receipt } = current
  const showTabs = TAB_SCREENS.includes(screen)

  function renderScreen() {
    switch (screen) {
      case 'login':
        return <LoginScreen />
      case 'register':
        return <RegisterScreen />
      case 'confirm-scan':
        return <ConfirmScanScreen />
      case 'scan-document':
        return <ScanDocumentScreen />
      case 'home':
        return <HomeScreen />
      case 'canjes':
        return <CanjesScreen />
      case 'product':
        return <ProductScreen product={product} />
      case 'qr':
        return <QrScreen receipt={receipt} />
      case 'recibo':
        return <ReciboScreen receipt={receipt} />
      case 'rangos':
        return <RangosScreen />
      case 'informacion':
        return <InformacionScreen />
      case 'perfil':
        return <PerfilScreen />
      case 'datos':
        return <DatosScreen />
      case 'ajustes':
        return <AjustesScreen />
      case 'reciclajes':
        return <ReciclajesScreen />
      case 'favoritos':
        return <FavoritosScreen />
      case 'logout':
        return <LogoutScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <div className="flex h-full flex-col">
      <main key={screen} className="flex-1 animate-fade-in overflow-y-auto">
        {renderScreen()}
      </main>
      {showTabs && <BottomNav active={screen} />}
    </div>
  )
}
