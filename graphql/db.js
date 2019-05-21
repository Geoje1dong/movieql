let movies = [
    {
        id:'0',
        name: 'kimjaehyune',
        score:'30'
    },
    {
        id:'1',
        name: 'tomato',
        score:'12'
    },
    {
        id:'2',
        name: 'smile',
        score:'11'
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanedMovies.length){
        movie = cleanedMovies;
        retrun
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie ={
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}