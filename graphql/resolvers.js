import { getMovies, getById, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};

export default resolvers;
