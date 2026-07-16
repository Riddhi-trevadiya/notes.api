import express from "express";
import notesRouter from "./routes/notes.routes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Notes API 🚀");
});

app.use("/notes", notesRouter);

export default app;