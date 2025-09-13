"use client"

import { MainLayout } from "./main-layout"

export function ClientMainLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>
}
