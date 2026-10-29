import { films } from "../data/films.data.js";

let nextId = films.length ? Math.max(...films.map((film) => film.id)) + 1 : 1;

export function getAllFilms(genre) {
  if (!genre) return films;
  return films.filter((film) => film.genre.toLowerCase() === genre.toLowerCase());
}

export function getFilmById(id) {
  return films.find((film) => film.id === id);
}

export function createFilm(data) {
  const film = { id: nextId++, ...data };
  films.push(film);
  return film;
}

export function updateFilm(id, data) {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) return null;
  films[index] = { ...films[index], ...data, id };
  return films[index];
}

export function deleteFilm(id) {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) return false;
  films.splice(index, 1);
  return true;
}
