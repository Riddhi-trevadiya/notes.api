import { Router } from "express";

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller";

import { validateNote } from "../middleware/validateNote";

const router = Router();

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", validateNote, createNote);

router.put("/:id", validateNote, updateNote);

router.delete("/:id", deleteNote);

export default router;