import axios from "axios";

export const product = [
  {
    id: 1,
    name: "Young",
  },
  {
    id: 2,
    name: "Young su",
  },
];

const API_URL = "https://yts.mx/api/v2/";
const LIST_MOVIE_URL = `${API_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_URL}movie_suggestions.json`;

// export const getProduct = () => product;

export const addProduct = (input) => {
  const a = JSON.parse(JSON.stringify(input));
  console.log(a.input);

  const { id, name } = a.input;

  console.log(id, name);

  const newProduct = {
    id,
    name,
  };
  if (parseInt(product[1].id) === parseInt(id)) {
    product.push(newProduct);
  }
  return newProduct;
};

export const getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIE_URL);
  console.log(movies);
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
