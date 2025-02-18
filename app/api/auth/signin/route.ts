import dbConnect from "@/database/connection"
import { getUserByEmail, verifyPassword } from "@/server/controllers/users"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  await dbConnect()

  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
  }

  try {
    const user = await getUserByEmail(email)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const isPasswordValid = await verifyPassword(user, password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    // Remove password from user object before sending it to the client
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({ user: userWithoutPassword })
  } catch (error) {
    console.error("Sign-in error:", error)
    return NextResponse.json({ error: "An error occurred during sign-in" }, { status: 500 })
  }
}

