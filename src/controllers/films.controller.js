import * as filmsService from "../services/films.service.js";

const REQUIRED_FIELDS = ["title", "genre", "year", "director"];

function validateFilmPayload(body) {
  const missing = REQUIRED_FIELDS.filter((field) => body[field] === undefined);
  return missing;
}

export function listFilms(req, res) {
  const { genre } = req.query;
  const films = filmsService.getAllFilms(genre);
  res.json(films);
}

export function getFilm(req, res) {
  const id = Number(req.params.id);
  const film = filmsService.getFilmById(id);

  if (!film) {
    return res.status(404).json({ message: `Film with id ${id} not found` });
  }

  res.json(film);
}

export function createFilm(req, res) {
  const missing = validateFilmPayload(req.body);
  if (missing.length > 0) {
    return res.status(400).json({ message: `Missing required fields: ${missing.join(", ")}` });
  }

  const { title, genre, year, director } = req.body;
  const film = filmsService.createFilm({ title, genre, year, director });
  res.status(201).json(film);
}

export function updateFilm(req, res) {
  const id = Number(req.params.id);
  const updated = filmsService.updateFilm(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: `Film with id ${id} not found` });
  }

  res.json(updated);
}

export function deleteFilm(req, res) {
  const id = Number(req.params.id);
  const deleted = filmsService.deleteFilm(id);

  if (!deleted) {
    return res.status(404).json({ message: `Film with id ${id} not found` });
  }

  res.status(204).send();
}
