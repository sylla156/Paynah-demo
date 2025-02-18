import mongoose, { type Model } from "mongoose";
import { IUser } from "./users.types";
import { UserSchema } from "./users.schema";

export interface UsersDocument extends Document, IUser {}

// Check if the model already exists to prevent recompilation
export const User: Model<UsersDocument> =
  mongoose.models.users ||
  mongoose.model<UsersDocument>("users", UserSchema);
