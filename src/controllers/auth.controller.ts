import { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth.service";
import { sendResponse } from "../utils/apiResponse";

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

    sendResponse(
      res,
      201,
      "User registered successfully",
      user
    );
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const result = await authService.loginUser(
      email,
      password
    );

    sendResponse(
      res,
      200,
      "Login successful",
      result
    );
  } catch (error) {
    next(error);
  }
};