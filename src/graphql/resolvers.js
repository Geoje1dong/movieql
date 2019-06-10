import { getMovies, getMovie, Recommendation, movieTrailer } from './db';

const resolvers = {
    Query: {
        movies: (_, { page }) => getMovies(page),
        movie: (_, { id }) => getMovie(id),
        Recommendation: (_, { id }) => Recommendation(id),
        movieTrailer:(_, { id })=> movieTrailer(id)
    }
}

export default resolvers;