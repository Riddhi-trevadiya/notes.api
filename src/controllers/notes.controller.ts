import { Request, Response } from "express";
import * as notesService from "../services/notes.service";

export const getAllNotes = (req: Request, res: Response) => {
  const notes = notesService.getAllNotes();

  res.json(notes);
};

export const getNoteById = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const note = notesService.getNoteById(id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json(note);
};

export const createNote = (req: Request, res: Response) => {
  const { title, content } = req.body;

  const newNote = notesService.createNote(title, content);

  res.status(201).json(newNote);
};

export const updateNote = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const updatedNote = notesService.updateNote(id, title, content);

  if (!updatedNote) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json(updatedNote);
};

export const deleteNote = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const deleted = notesService.deleteNote(id);

  if (!deleted) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.status(204).send();
};