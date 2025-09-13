import { getServerSession } from "next-auth"
import { authOptions } from "./auth.config"
import { type SafeUser } from "@/types/auth"

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser(): Promise<SafeUser | null> {
  const session = await getSession()
  return session?.user ?? null
}

export function isAdmin(user: SafeUser | null): boolean {
  return user?.role === "admin"
}

export function isUser(user: SafeUser | null): boolean {
  return user?.role === "user"
}