import express from "express";
import { refreshToken, signIn, signUp } from "../controllers/auth.js";
import checkAuth from "../middlewares/auth.js";
import tryCash from "../middlewares/tryCash.js";
import {
  signInValidator,
  signUpValidator,
} from "../middlewares/validators/auth.js";

const router = express.Router();

router.post("/signUp", signUpValidator, tryCash(signUp));
router.post("/signIn", signInValidator, tryCash(signIn));
router.post("/refreshToken", checkAuth, tryCash(refreshToken));

export default router;
