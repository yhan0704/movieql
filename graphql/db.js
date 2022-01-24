import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
  const res = await axios.get(API_URL).then((res) => res.data.data.movies);
  return res;
};

// export const getMovies = (limit, rating) =>
//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((json) => json.data.movies);

// export let movies = [
//   {
//     id: 1,
//     name: "Young Chan",
//     score: 1,
//   },
//   {
//     id: 2,
//     name: "Young In",
//     score: 8,
//   },
//   {
//     id: 3,
//     name: "Young Ji",
//     score: 99,
//   },
//   {
//     id: 4,
//     name: "Young A",
//     score: 2,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id !== id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
//   //   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   //   return cleanedMovies;
// };

// const findLastId = () => {
//   return movies[movies.length - 1].id;
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: findLastId() + 1,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
