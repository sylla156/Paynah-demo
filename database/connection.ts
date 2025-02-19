import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI

async function dbConnect() {
  // Check if already connected
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  // Check if URI exists
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    // Connect to MongoDB
    const connection = await mongoose.connect(MONGODB_URI);

    // Connection event listeners
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    return connection;
  } catch (error) {
    console.error("Initial MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;
