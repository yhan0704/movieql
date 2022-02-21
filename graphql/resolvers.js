import { getMovies, getMovie, getSuggesions, addProduct, product } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
    suggesions: (_, { id }) => getSuggesions(id),
    products: () => product,
  },
  Mutation: {
    addProduct: (_, input) => addProduct(input),
  },
};

export default resolvers;
