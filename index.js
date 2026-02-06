import express from "express";
import mongoose from "mongoose";

import namesRouter from "./routes/names.js";
import registerRouter from "./routes/register.js"; 

const app = express();
const PORT = 5000;


app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/nodejs")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Names API</h1>");
});


app.use("/names", namesRouter);
app.use("/register", registerRouter); 


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
