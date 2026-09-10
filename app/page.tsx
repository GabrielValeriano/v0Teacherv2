import { AppProvider } from '@/components/app-provider'
import { AppRouter } from '@/components/app-router'
import { PhoneFrame } from '@/components/phone-frame'

export default function Page() {
  return (
    <PhoneFrame>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </PhoneFrame>
  )
}
