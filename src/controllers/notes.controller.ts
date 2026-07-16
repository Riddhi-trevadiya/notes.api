import { Request, Response, NextFunction } from "express";
import * as notesService from "../services/notes.service";
import { AppError } from "../errors/AppError";

export const getAllNotes = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const notes = notesService.getAllNotes();

    res.json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNoteById = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);

    const note = notesService.getNoteById(id);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { title, content } = req.body;

    const newNote = notesService.createNote(title, content);

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

export const updateNote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);

    const { title, content } = req.body;

    const updatedNote = notesService.updateNote(id, title, content);

    if (!updatedNote) {
      throw new AppError("Note not found", 404);
    }

    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const id = Number(req.params.id);

    const deleted = notesService.deleteNote(id);

    if (!deleted) {
      throw new AppError("Note not found", 404);
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};