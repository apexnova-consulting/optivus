export type UserRole = "admin" | "user"

export interface UserCredentials {
  id: string
  name: string
  email: string
  password: string
  role: UserRole
}

export interface SafeUser {
  id: string
  name: string
  email: string
  role: UserRole
}