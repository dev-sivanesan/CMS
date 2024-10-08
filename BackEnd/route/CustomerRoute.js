import express from "express"
import checkToken from "../middleware/JwtMiddleware.js";
import { checkRole } from "../middleware/checkRole.js";
import { createUserController,getUserController,getallUserController,updateUserController,deleteUserController} from "../controller/CustomerController.js";

const CustomerRouter = express.Router();

CustomerRouter.post("/createUser", checkToken,checkRole(['Manager']), createUserController);
CustomerRouter.get("/getAllUsers", checkToken,checkRole(["Manager","Supervisor","Worker"]), getallUserController);
CustomerRouter.get("/getUser/:id",checkToken,checkRole(["Manager","Supervisor","Worker"]),getUserController)
CustomerRouter.put("/updateUser/:id", checkToken, checkRole(["Manager","Supervisor"]),updateUserController);
CustomerRouter.delete("/deleteUser/:id", checkToken,checkRole(["Manager"]), deleteUserController);

export default CustomerRouter;
