import signup from "../models/register.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const data = req.body;

    // Check if user already exists
    const check = await signup.findOne({ email: data.email });

    if (check) {
      return res.status(409).json({
        message: "user already exist with this email",
      });
    }

    //  Generate salt
    const salt = await bcrypt.genSalt(7);

    //  Hash password
    const hashpassword = await bcrypt.hash(data.password, salt);

    data.password = hashpassword;

    //  Create new user
    let registerInstance = new signup({
      email: data.email,
      password: data.password,
    });

    //  Save to DB
    let result = await registerInstance.save();

    //  Send response ONCE
    res.status(200).json({
      message: "data saved successfully",
      error: null,
      data: result,
    });

  } catch (erro) {
    console.log("error catched", erro);

    res.status(500).json({
      message: "failed to save the data",
      error: "failed",
    });
  }
};

export default register;
