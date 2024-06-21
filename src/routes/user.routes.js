import { Router } from "express";
import { registerUser } from "../controllars/user.controllar.js";

const router = Router();
router.route("/register").post(registerUser)


export default router;