import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error("ERROR:", error);
  console.error("MESSAGE:", error.message);
  console.error("STACK:", error.stack);

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      message: error.message,
    });

    return;
  }

  res.status(500).json({
    message: error.message,
  });
};