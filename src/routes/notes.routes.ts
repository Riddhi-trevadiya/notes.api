import { Router } from "express";

import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller";

import { validateNote } from "../middleware/validateNote";
import { validateId } from "../middleware/validateId";

const router = Router();

router.get("/", getAllNotes);

router.get("/:id", validateId, getNoteById);

router.post("/", validateNote, createNote);

router.put("/:id", validateId, validateNote, updateNote);

router.delete("/:id", validateId, deleteNote);

export default router;