import route from "./userRoute.js";
import CustomerRouter from "./CustomerRoute.js";

import express from "express"

const router=express.Router();

router.use('/',route);
router.use('/user',CustomerRouter);

export default router;