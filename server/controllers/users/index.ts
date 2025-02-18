import { User } from "@/server/models/users/users.models"
import { IUser } from "@/server/models/users/users.types"
import bcrypt from "bcryptjs"

export async function createUser(userData: Omit<IUser, "id">): Promise<IUser> {
  const hashedPassword = await bcrypt.hash(userData.password, 10)
  const user = new User({ ...userData, password: hashedPassword })
  await user.save()
  return user.toObject()
}

export async function getUserByEmail(email: string): Promise<IUser | null> {
  return User.findOne({ email }).lean()
}

export async function updateUser(id: string, userData: Partial<IUser>): Promise<IUser | null> {
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, 12)
  }
  return User.findByIdAndUpdate(id, userData, { new: true }).lean()
}

export async function verifyPassword(user: IUser, password: string): Promise<boolean> {
  return bcrypt.compare(password, user.password)
}

