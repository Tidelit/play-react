'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  // Se usa useState para evitar reinicializar el cliente en cada render
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
