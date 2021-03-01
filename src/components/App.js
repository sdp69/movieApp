import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies} from "./actions";



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
        const {favourites} = this.props.store.getState();
        const index = favourites.indexOf(movie);
        if(index !== -1){
            return true;
        }
        return false;
    }
    render() {
        const {list} = this.props.store.getState();
        return (
            <div className="App">
                <Navigation/>
                <Container fluid="md">
                    <Row>
                        <Col fluid="md">{
                            list.map((movie, index) => {
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
            </div>
        );
    }
}



export default App;
