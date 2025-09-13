import { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { type UserCredentials, type SafeUser, type UserRole } from "@/types/auth"

// For demo purposes, we'll use a simple in-memory user store
const users: UserCredentials[] = [
  {
    id: "1",
    name: "Demo Admin",
    email: "admin@optivus.com",
    password: "demo123", // In production, use hashed passwords
    role: "admin",
  },
  {
    id: "2",
    name: "Demo User",
    email: "user@optivus.com",
    password: "demo123",
    role: "user",
  },
]

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<SafeUser | null> {
        if (!credentials?.email || !credentials?.password) return null

        const user = users.find((user) => user.email === credentials.email)
        if (!user || user.password !== credentials.password) return null

        // Return only safe user data (exclude password)
        const { password: _, ...safeUser } = user
        return safeUser
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role as UserRole
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.role = token.role as UserRole
      }
      return session
    },
  },
}