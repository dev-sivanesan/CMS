import express from "express";
import registerController from "../controller/registerController.js";
import loginController from "../controller/loginController.js";
const route = express.Router();

route.post("/register", registerController);
route.post("/login", loginController);



export default route;

