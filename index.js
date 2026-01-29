import express from "express";
import namesRouter from "./routes/names.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/nodejs")
.then(()=>console.log("mongodb is conneted "))
.catch((err)=>console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Names API");
});




app.use("/names", namesRouter);

// START THE SERVER
app.listen(5000, () => {
  console.log(`Server running on port ${PORT }`);
});
