"use client"

import { MainLayout } from "./main-layout"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return <MainLayout>{children}</MainLayout>
}
