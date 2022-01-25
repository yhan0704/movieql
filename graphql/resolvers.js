import { getMovies, getMovie, getSuggesions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggesions: (_, { id }) => getSuggesions(id),
  },
};

export default resolvers;
