import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourites} from "./actions";



const data_1 = require('./json/top-rated-movies-01.json');

class App extends React.Component{
    componentDidMount() {
        const {store} = this.props;
        store.subscribe(() => {
            console.log(`Updated`);
            console.log(`Store`, this.props.store.getState());
            this.forceUpdate();
        });
        store.dispatch(addMovies(data_1));
        console.log(`STATE`, this.props.store.getState());
    }
    isMovie_inFavourite(movie){
        const {movies} = this.props.store.getState();
        const {favourites} = movies;
        const index = favourites.indexOf(movie);
        return index !== -1;
    }
    setFavourite(val){
        this.props.store.dispatch(setShowFavourites(val));
    }
    render() {
        const {movies, search} = this.props.store.getState();
        console.log(search);
        const {list, favourites, showFavourites} = movies;
        const display = showFavourites? favourites:list;
        return (
            <div className="App">
                <Navigation tab={this.setFavourite.bind(this)} store={this.props.store}/>
                <Container fluid="md">
                    <Row>
                        <Col fluid="md">{
                            display.map((movie, index) => {
                                return (
                                    <MovieCard movie={movie} key={`movie_${index}`} dispatch={this
                                        .props.store.dispatch}
                                               isFavourite={this.isMovie_inFavourite(movie)}
                                    />
                                );
                            })
                        }</Col>
                    </Row>
                </Container>
                {display.length === 0? <div style={{textAlign: `center`}}><b>Nothing to display here!</b></div> : null}
            </div>
        );
    }
}



export default App;
