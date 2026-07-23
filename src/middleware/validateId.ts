import { Request, Response, NextFunction } from "express";

export const validateId = (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): void => {
  const id = req.params.id;

  if (!id || !/^\d+$/.test(id)) {
    res.status(400).json({
      message: "Invalid note ID",
    });

    return;
  }

  next();
};