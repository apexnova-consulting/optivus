import { getServerSession } from "next-auth"

export async function getSession() {
  return await getServerSession()
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}

// Custom type for the user object including role
export type User = {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}

// Custom type for the session including our custom user type
declare module "next-auth" {
  interface Session {
    user: User
  }
}
