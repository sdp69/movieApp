import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies, setShowFavourites} from "./actions";
//import {connect} from "../index";
import {connect} from "react-redux";


const data_1 = require('./json/top-rated-movies-01.json');

class App extends React.Component{
    componentDidMount() {
        //const {store} = this.props;
       /* store.subscribe(() => {
            console.log(`Updated`);
            console.log(`Store`, this.props);
            this.forceUpdate();
        });*/
        this.props.dispatch(addMovies(data_1));
        console.log(`STATE`, this.props);
    }
    isMovie_inFavourite(movie){
        const {movies} = this.props;
        const {favourites} = movies;
        const index = favourites.indexOf(movie);
        return index !== -1;
    }
    setFavourite(val){
        this.props.dispatch(setShowFavourites(val));
    }
    render() {
        const {movies, search} = this.props;
        const {list, favourites, showFavourites} = movies;
        const display = showFavourites? favourites:list;
        return (<div className="App">
            <Navigation tab={this.setFavourite.bind(this)} store={this.props}/>
            <Container fluid="md">
                <Row>
                    <Col fluid="md">{
                        display.map((movie, index) => {
                            return (
                                <MovieCard movie={movie} key={`movie_${index}`} dispatch={this
                                                .props.dispatch}
                                           isFavourite={this.isMovie_inFavourite(movie)}
                                            />
                                        );
                                    })
                                }</Col>
                            </Row>
                        </Container>
                        {display.length === 0? <div style={{textAlign: `center`}}><b>Nothing to display here!</b></div> : null}
                    </div>);
                }
}

/*class AppWrapper extends React.Component{
    render() {
        return(
            <StoreContext.Consumer>
                {(store) => <App store={store}/>}
            </StoreContext.Consumer>
        )
    }
}*/

function mapStateToProps(state){
    return{
      movies: state.movies,
      search: state.search
    };
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
