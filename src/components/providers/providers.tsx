import { ClientProvider } from "./client-provider"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ClientProvider>{children}</ClientProvider>
}