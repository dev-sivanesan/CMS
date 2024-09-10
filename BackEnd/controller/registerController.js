import express from "express";
import User from "../model/userModel.js";
import Roles from "../model/rolesModel.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const registerController = async (req, res) => {
  try {
    console.log("registered");
    const { userName, email, password, role } = req.body;

    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.json({ message: "User already exists", status: false });
    }

    const roleData = await Roles.findOne({ where: { role_name: role } });
    if (!roleData) {
      return res.json({ message: "Role does not exist", status: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: userName,
      email: email,
      password: hashPassword,
      role_id: roleData.role_number,
    });

    res.json({ message: "User created successfully", status: true });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error", status: false });
  }
};

export default registerController;
