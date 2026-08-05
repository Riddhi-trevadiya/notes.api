import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new AppError("Authentication token missing", 401);
        }

        const [scheme, token] = authHeader.split(" ");

        if (scheme !== "Bearer" || !token) {
            throw new AppError("Invalid authentication token", 401);
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        const payload = decoded as {
            userId: number;
        };
        console.log("Authenticated User:", payload);

        req.user = payload;
        next();
    } catch (error) {
        next(error);
    }
};