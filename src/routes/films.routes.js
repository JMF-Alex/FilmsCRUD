import { Router } from "express";
import * as filmsController from "../controllers/films.controller.js";

const router = Router();

router.get("/", filmsController.listFilms);
router.get("/:id", filmsController.getFilm);
router.post("/", filmsController.createFilm);
router.put("/:id", filmsController.updateFilm);
router.delete("/:id", filmsController.deleteFilm);

export default router;
