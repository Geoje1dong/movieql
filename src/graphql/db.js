import axios from "axios";
const API_KEY = 'api_key=d5f6d7a1803c7ddadee30f4f693b4340';
const BASE_URL = `http://api.themoviedb.org/3/`;
const LIST_MOVIES_URL = `${BASE_URL}discover/movie?${API_KEY}&language=ko&sort_by=popularity.desc&include_adult=false&include_video=true`
let MOVIE_DETAILS_URL 
let MOVIE_Recommendation

export const getMovies = async (page) => {
  const {
    data: {
      results 
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      page
    }
  });
  return results;
};

export const getMovie = async (id, ) => {
  MOVIE_DETAILS_URL = `${BASE_URL}movie/${id}?${API_KEY}&language=ko&append_to_response=videos`;
  const {
    data
  } = await axios(MOVIE_DETAILS_URL, {
  });
  return data;
};

export const Recommendation = async (id, ) => {
  MOVIE_Recommendation = `${BASE_URL}movie/${id}/recommendations?${API_KEY}&language=ko&page=1`;
  const {
    data: {
      results
    }
  } = await axios(MOVIE_Recommendation, {
  });
  return results;
};

export const movieTrailer = async (id, ) => {
  MOVIE_DETAILS_URL = `${BASE_URL}movie/${id}?${API_KEY}&language=ko&append_to_response=videos`;
  const {
    data:{
      videos:{
        results
      }
    }
  } = await axios(MOVIE_DETAILS_URL, {
  });
  return results[0];
};