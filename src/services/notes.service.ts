import { Note } from "../models/note.model";

const notes: Note[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    content: "Finish interfaces today",
  },
  {
    id: 2,
    title: "Learn Express",
    content: "Build Notes API",
  },
];

export const getAllNotes = () => {
  return notes;
};

export const getNoteById = (id: number) => {
  return notes.find((note) => note.id === id);
};

export const createNote = (title: string, content: string) => {
  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };

  notes.push(newNote);

  return newNote;
};

export const updateNote = (
  id: number,
  title: string,
  content: string
) => {
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return undefined;
  }

  note.title = title;
  note.content = content;

  return note;
};

export const deleteNote = (id: number) => {
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return false;
  }

  notes.splice(index, 1);

  return true;
};