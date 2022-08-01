import express from "express";
import {
  refreshToken,
  signIn,
  signInGoogle,
  signUp,
} from "../controllers/authController.js";
import {
  signInValidator,
  signUpValidator,
} from "../middlewares/validators/auth.js";
import checkAuth from "../middlewares/auth.js";
import tryCash from "../middlewares/tryCash.js";

const router = express.Router();

router.post("/sign-up", signUpValidator, tryCash(signUp));
router.post("/sign-in", signInValidator, tryCash(signIn));
router.post("/sign-in-google", tryCash(signInGoogle));
router.post("/refresh-token", checkAuth, tryCash(refreshToken));

export default router;
