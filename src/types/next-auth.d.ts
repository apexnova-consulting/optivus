import { type SafeUser, type UserRole } from "./auth"

declare module "next-auth" {
  interface User extends SafeUser {}

  interface Session {
    user: SafeUser
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: UserRole
  }
}