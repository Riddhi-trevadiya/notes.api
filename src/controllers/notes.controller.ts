import { Request, Response, NextFunction } from "express";
import * as notesService from "../services/notes.service";
import { AppError } from "../errors/AppError";

export const getAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const notes = await notesService.getAllNotes();

    res.json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNoteById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const note = await notesService.getNoteById(id);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { title, content } = req.body;

    const newNote = await notesService.createNote(title, content);

    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    const { title, content } = req.body;

    const updatedNote = await notesService.updateNote(
      id,
      title,
      content
    );

    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);

    await notesService.deleteNote(id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};