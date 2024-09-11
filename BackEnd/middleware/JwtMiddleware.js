import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const checkToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ message: "Unauthorized accsess" , status:false});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ message: "Invalid token" });
        }
        req.user = decoded;
        req.user.userId = decoded.userId;
        req.user.role = decoded.role;
        next();
    });
};
export default checkToken;