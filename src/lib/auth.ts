import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    Credentials({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const admin = await prisma.admin.findUnique({
          where: { 
            email: credentials.email as string,
            active: true,
          },
        })

        if (!admin) {
          return null
        }

        const isValidPassword = await compare(
          credentials.password as string,
          admin.passwordHash
        )

        if (!isValidPassword) {
          return null
        }

        // Update last login
        await prisma.admin.update({
          where: { id: admin.id },
          data: { lastLogin: new Date() },
        })

        return {
          id: admin.id,
          email: admin.email,
          name: admin.name,
          role: admin.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as { role?: string }).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        (session.user as { role?: string }).role = token.role as string
      }
      return session
    },
  },
})
