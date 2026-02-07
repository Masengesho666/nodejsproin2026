import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import namesRouter from "./routes/names.js";
import registerRouter from "./routes/register.js";
import signinRouter from "./routes/signin.js";

dotenv.config();

const app = express();

// PORT fallback
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Names API</h1>");
});

// Routes
app.use("/names", namesRouter);
app.use("/register", registerRouter);
app.use("/signin", signinRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
