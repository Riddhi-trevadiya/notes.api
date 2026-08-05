import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";

export const getAllNotes = async (userId: number) => {
  return prisma.note.findMany({
    where: {
      userId,
    },
  });
};

export const getNoteById = async (
  id: number,
  userId: number
) => {
  return prisma.note.findFirst({
    where: {
      id,
      userId,
    },
  });
};

export const createNote = async (
  title: string,
  content: string,
  userId: number
) => {
  return prisma.note.create({
    data: {
      title,
      content,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
};

export const updateNote = async (
  id: number,
  title: string,
  content: string,
  userId: number
) => {
  const existingNote = await prisma.note.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!existingNote) {
    throw new AppError("Note not found", 404);
  }

  return prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
};

export const deleteNote = async (
  id: number,
  userId: number
) => {
  const existingNote = await prisma.note.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!existingNote) {
    throw new AppError("Note not found", 404);
  }

  return prisma.note.delete({
    where: {
      id,
    },
  });
};