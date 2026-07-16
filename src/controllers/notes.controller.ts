import { Request, Response } from "express";
import * as notesService from "../services/notes.service";

export const getAllNotes = (req: Request, res: Response): void => {
  const notes = notesService.getAllNotes();

  res.json(notes);
};

export const getNoteById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const note = notesService.getNoteById(id);

  if (!note) {
    res.status(404).json({
      message: "Note not found",
    });
    return;
  }

  res.json(note);
};

export const createNote = (req: Request, res: Response): void => {
  const { title, content } = req.body;

  const newNote = notesService.createNote(title, content);

  res.status(201).json(newNote);
};

export const updateNote = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  const updatedNote = notesService.updateNote(id, title, content);

  if (!updatedNote) {
    res.status(404).json({
      message: "Note not found",
    });
    return;
  }

  res.json(updatedNote);
};

export const deleteNote = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const deleted = notesService.deleteNote(id);

  if (!deleted) {
    res.status(404).json({
      message: "Note not found",
    });
    return;
  }

  res.status(204).send();
};