import { Request, Response, NextFunction } from "express";

export const validateNote = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400).json({
      message: "Title and content are required",
    });

    return;
  }

  if (
    typeof title !== "string" ||
    typeof content !== "string"
  ) {
    res.status(400).json({
      message: "Title and content must be strings",
    });

    return;
  }

  next();
};