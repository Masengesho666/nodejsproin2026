import mongoose, { Schema } from "mongoose"

const registerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "email is required"
    },
    password: {
        type: String,
        required: "password is required"
    }
})

export default mongoose.model("register", registerSchema)