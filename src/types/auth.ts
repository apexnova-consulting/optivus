export interface UserCredentials {
  id: string
  name: string
  email: string
  password: string
  role: "admin" | "user"
}

export interface SafeUser {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}
