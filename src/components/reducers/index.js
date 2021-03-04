import {combineReducers} from "redux";
import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES, ADD_THE_SEARCH_MOVIE, DISPLAY_NONE} from "../actions";

const initialState = {
    list: [],
    favourites: [],
    showFavourites: false
};

export function movies(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const index = state.favourites.indexOf(action.movie);
            state.favourites.splice(index, 1);
            return {
                ...state
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}
const initialSearchState = {
    result: {},
    showSearchResults: false
};
export function search(state = initialSearchState, action){
    switch (action.type){
        case ADD_THE_SEARCH_MOVIE:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true,
            }
        case DISPLAY_NONE:
            return {
                ...state,
                showSearchResults: action.val
            }
        case ADD_MOVIES:
            return {
                ...state,
                showSearchResults: false
            }
        default:
            return state;
    }

}
/*const initialRootState = {
    movies: initialState,
    search: initialSearchState
};*/
/*export default function rootReducer (state = initialRootState, action){
    return{
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}*/
export default combineReducers({
    movies,
    search
});