import { Router } from "express";
import {
  logOutUser,
  loginUser,
  refreshAccessToken,
  registerUser,
} from "../controllars/user.controllar.js";
import { upload } from "../middleware/multer.middelwere.js";
import { verifyJWT } from "../middleware/auth.middlewere.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/refresh").post(refreshAccessToken);
router.route("/logout").post(verifyJWT, logOutUser);
export default router;
