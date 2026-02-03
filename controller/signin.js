
import SignUp from "../models/register.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await SignUp.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }


    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Your password is wrong",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "teckcode",
      { expiresIn: "3d" }
    );

   
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

   
    res
      .status(200)
      .cookie("token", token, options)
      .json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      });

  } catch (err) {
    console.error("Error caught:", err);
    res.status(500).json({
      message: "Failed to process the data",
    });
  }
};

export default signInController;
