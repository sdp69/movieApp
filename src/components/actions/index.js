export const ADD_MOVIES = `ADD_MOVIES`; //Remember action types are variables
export const ADD_FAVOURITE= `ADD_FAVOURITE`;
export const REMOVE_FAVOURITE = `REMOVE_FAVOURITE`;

export function addMovies(movies){ //action creators are functions, conventionally speaking.
  return {
      type: ADD_MOVIES,
      movies: movies
  }
};

export function addFavourite(movie){ //action creators are functions, conventionally speaking.
    return {
        type: ADD_FAVOURITE,
        movie: movie
    }
};

export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie: movie
    }
};