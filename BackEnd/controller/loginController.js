import User from "../model/userModel.js";
import Roles from "../model/rolesModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: [{ model: Roles, attributes: ["role_name"] }],
    });

    if (!user) {
      return res.json({ message: "User not found", status: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "Invalid password", status: false });
    }

    const token = jwt.sign(
      { userId: user.id, roleId: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 1, 
      path: "/",
    });

    return res.json({
      message: "Login successful",
      role: user.Role.role_name,
      token,
      status: true,
    });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error", status: false });
  }
};

export default loginController;
