import { Request, Response, NextFunction } from "express";

export const validateNote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title, content } = req.body;

  if (
    typeof title !== "string" ||
    typeof content !== "string"
  ) {
    res.status(400).json({
      message: "Title and content must be strings",
    });

    return;
  }

  if (!title.trim() || !content.trim()) {
    res.status(400).json({
      message: "Title and content cannot be empty",
    });

    return;
  }

  next();
};