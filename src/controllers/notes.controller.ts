import { Request, Response, NextFunction } from "express";
import * as notesService from "../services/notes.service";
import { AppError } from "../errors/AppError";
import { sendResponse } from "../utils/apiResponse";

export const getAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.userId;

    const notes = await notesService.getAllNotes(userId);

    sendResponse(
      res,
      200,
      "Notes retrieved successfully",
      notes,
      notes.length
    );
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
    const userId = req.user!.userId;

    const note = await notesService.getNoteById(id, userId);

    if (!note) {
      throw new AppError("Note not found", 404);
    }

    sendResponse(
      res,
      200,
      "Note retrieved successfully",
      note
    );
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
    const userId = req.user!.userId;

    const newNote = await notesService.createNote(
      title,
      content,
      userId
    );

    sendResponse(
      res,
      201,
      "Note created successfully",
      newNote
    );
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
    const userId = req.user!.userId;

    const updatedNote = await notesService.updateNote(
      id,
      title,
      content,
      userId
    );

    sendResponse(
      res,
      200,
      "Note updated successfully",
      updatedNote
    );
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
    const userId = req.user!.userId;

    await notesService.deleteNote(id, userId);

    sendResponse(
      res,
      200,
      "Note deleted successfully"
    );
  } catch (error) {
    next(error);
  }
};