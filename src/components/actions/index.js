export const ADD_MOVIES = `ADD_MOVIES`; //Remember action types are variables
export const ADD_FAVOURITE= `ADD_FAVOURITE`;
export const REMOVE_FAVOURITE = `REMOVE_FAVOURITE`;
export const SET_SHOW_FAVOURITES = `SET_SHOW_FAVOURITES`;
export const ADD_THE_SEARCH_MOVIE = `ADD_THE_SEARCH_MOVIE`;
export const DISPLAY_NONE = `DISPLAY_NONE`

export function addMovies(movies){ //action creators are functions, conventionally speaking.
  return {
      type: ADD_MOVIES,
      movies: movies
  }
}

export function addFavourite(movie){ //action creators are functions, conventionally speaking.
    return {
        type: ADD_FAVOURITE,
        movie: movie
    }
}

export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie: movie
    }
}

export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function searchtheMovie(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(movie => {
                //console.log(`movie`, movie);
                //Here you dispatch an item
                dispatch(addMovieSearchResult(movie));
            })
    }
}

export function addMovieSearchResult(movie){
    return {
        type: `ADD_THE_SEARCH_MOVIE`,
        movie
    }
}

export function display_hide(val){
    return{
        type: `DISPLAY_NONE`,
        val
    }
}