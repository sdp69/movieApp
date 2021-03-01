import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES} from "../actions";

const initialState = {
    list: [],
    favourites: [],
    showFavourites: false
};

export default function movies(state = initialState, action){
    switch (action.type){
        case ADD_MOVIES:
            return{
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