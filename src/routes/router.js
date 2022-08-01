import express from "express";
import auth from "./auth.js";
import notes from "./notes.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/notes", notes);

export default router;
