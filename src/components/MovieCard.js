import React from "react";
import {Button} from "react-bootstrap";
import {addFavourite,removeFavourite} from "./actions";

class MovieCard extends React.Component{

    favourite_clickHandler(){
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
        return;
    }
    un_favourite_clickHandler(){
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
        return;
    }
    render() {
        const{movie, isFavourite} = this.props
        return (
            <div className="movie_card">
                <div className="poster">
                    <img src={movie.posterurl} alt="" width="200" height="200"/>
                </div>
                <div className="desc">
                    <h4>{movie.title}</h4>
                    <p className="storyline">{movie.storyline}</p>
                    <p>Rating: <b>{movie.imdbRating}</b></p>
                    {isFavourite?<Button className="w-20 btn-danger" onClick={() => this.un_favourite_clickHandler()}>Un-favourite</Button>
                    :<Button className="w-20 btn-primary" onClick={() => this.favourite_clickHandler()}>Favourite</Button>}
                </div>
            </div>
        );
    }
}

export default MovieCard;