import express from "express";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("user not found");
      return res.json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { userId: user.id, roleId: user.role_id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 1,
      secure: true,
      path: "/",
    });
    return res.json({
      message: "Login successful",
      role: user.role,
      token,
      status: true,
    });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error", status: false });
  }
};
export default loginController;
