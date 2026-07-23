import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";

export const getAllNotes = async () => {
  return await prisma.note.findMany();
};

export const getNoteById = async (id: number) => {
  return await prisma.note.findUnique({
    where: {
      id,
    },
  });
};

export const createNote = async (
  title: string,
  content: string
) => {
  return await prisma.note.create({
    data: {
      title,
      content,
    },
  });
};

export const updateNote = async (
  id: number,
  title: string,
  content: string
) => {
  try {
    return await prisma.note.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new AppError("Note not found", 404);
    }

    throw error;
  }
};

export const deleteNote = async (id: number) => {
  const existingNote = await prisma.note.findUnique({
    where: {
      id,
    },
  });

  if (!existingNote) {
    throw new AppError("Note not found", 404);
  }

  return await prisma.note.delete({
    where: {
      id,
    },
  });
};