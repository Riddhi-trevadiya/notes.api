import { Response } from "express";

export const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: unknown,
  count?: number
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(count !== undefined && { count }),
    ...(data !== undefined && { data }),
  });
};