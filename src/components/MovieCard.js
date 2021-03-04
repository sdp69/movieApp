import React from "react";
import {Button} from "react-bootstrap";
import {addFavourite,removeFavourite} from "./actions";

class MovieCard extends React.Component{

    favourite_clickHandler(){
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
    }
    un_favourite_clickHandler(){
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render() {
        const{movie, isFavourite} = this.props
        return (
            <div className="movie_card">
                <div className="poster">
                    <img src={movie.posterurl || movie.Poster} alt="" width="200" height="200"/>
                </div>
                <div className="desc">
                    <h4>{movie.title || movie.Title}</h4>
                    <p className="storyline">{movie.storyline || movie.Plot}</p>
                    <p>Rating: <b>{movie.imdbRating}</b></p>
                    {isFavourite?<Button className="w-20 btn-danger" onClick={() => this.un_favourite_clickHandler()}>Un-favourite</Button>
                    :<Button className="w-20 btn-primary" onClick={() => this.favourite_clickHandler()}>Favourite</Button>}
                </div>
            </div>
        );
    }
}

export default MovieCard;