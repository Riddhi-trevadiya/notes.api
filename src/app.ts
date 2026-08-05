import express from "express";
import { logger } from "./middleware/logger";
import notesRoutes from "./routes/notes.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/notes", notesRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

export default app;