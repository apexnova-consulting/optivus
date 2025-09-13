import { type SafeUser } from "./auth"

declare module "next-auth" {
  interface User extends SafeUser {}

  interface Session {
    user: SafeUser
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: string
  }
}