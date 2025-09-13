import { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { type User } from "next-auth"

// For demo purposes, we'll use a simple in-memory user store
const users: User[] = [
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
] as const

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = users.find((user) => user.email === credentials.email)
        if (!user || (user as any).password !== credentials.password) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
}
