import express from "express";
import filmsRouter from "./routes/films.routes.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/films", filmsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
