import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB:", process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit the app if DB fails
  }
};

export default connectDB;
