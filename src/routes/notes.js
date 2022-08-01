import express from "express";
import upload from "../configs/multer.js";
import {
  deleteNote,
  getNotes,
  saveNote,
  updateNote,
} from "../controllers/notesController.js";
import checkAuth from "../middlewares/auth.js";
import tryCash from "../middlewares/tryCash.js";
import fileUpload from "../services/fileUpload.js";

const router = express.Router();

router.use(checkAuth);

router.get("/", tryCash(getNotes));
router.delete("/:id", tryCash(deleteNote));

router.use(upload(), fileUpload);

router.post("/", tryCash(saveNote));
router.put("/:id", tryCash(updateNote));

export default router;
