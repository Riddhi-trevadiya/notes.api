import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    const user = await authService.registerUser(
      name,
      email,
      password
    );

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};