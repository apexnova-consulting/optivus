import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// For demo purposes, we'll use a simple in-memory user store
const users = [
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

const handler = NextAuth({
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
        if (!user || user.password !== credentials.password) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
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
        (session.user as any).role = token.role
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
