import axios from "axios";

const API_URL = "https://yts.mx/api/v2/";
const LIST_MOVIE_URL = `${API_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIE_URL, {
    params: { limit, minimum_rating: rating },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(MOVIE_DETAILS_URL, {
    params: { movie_id: id },
  });
  console.log(movie);
  return movie;
};

export const getSuggesions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(MOVIE_SUGGESTIONS_URL, {
    params: { movie_id: id },
  });
  return movies;
};
