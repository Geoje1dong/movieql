let movies = [
    {
        id:0,
        name: 'kimjaehyune',
        score: 30
    },
    {
        id:1,
        name: 'tomato',
        score: 12
    },
    {
        id: 2,
        name: 'smile',
        score: 11
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie ={
        id: parseInt(`${movies.length + 1}`),
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}