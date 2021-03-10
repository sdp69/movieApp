import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, Form, Nav, FormControl} from "react-bootstrap";
import {searchtheMovie, addMovies} from "./actions";
//import {connect} from "../index";
import {connect} from "react-redux";



class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.setter = undefined;
        this.state  = {
            searchText: ``
        };
        this.style={
            width: 289,
            height: `auto`,
            position: `absolute`,
            background: `#fff`,
            top: 50,
            opacity: 1,
            padding: 10,
            display: `inline-flex`,
            flexBasis: `row`,
            zIndex: 1,
            cursor: `pointer`,
            border: `1px solid #eee`,
            borderRadius: 2
        };

    }
    handlerChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };
    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(searchtheMovie(searchText))
    };
    handleAddToMovies = (movie) => {
        const {list} = this.props.movies;
        list.unshift(movie);
        this.props.dispatch(addMovies(list));
    };
    render() {
        const {search} = this.props;
        const {showSearchResults} = search;
        console.log(showSearchResults);
        return(
            <div>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Navbar.Brand href="#home"><span><img src="https://cdn4.iconfinder.com/data/icons/essential-app-1/16/video-record-film-movie-512.png" alt="" height="25" width="25" style={{
                        margin: 5
                    }}/></span>MovieLook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><span><img src="https://cdn4.iconfinder.com/data/icons/feather/24/trending-up-512.png" alt="" height="25" width="25" style={{
                                margin: 5
                            }}/></span>Trending</Nav.Link>
                            <Nav.Link href="#link"><span><img src="https://cdn3.iconfinder.com/data/icons/glypho-free/64/star-circle-512.png" alt="" height="25" width="25" style={{
                                margin: 5
                            }}/></span><span onClick={() => {
                                this.setter = true;
                                this.props.tab(true)}} className={this
                                .setter?"bold1":""}>Favourites</span></Nav.Link>
                            <Nav.Link href="#link"><span><img src="https://img.icons8.com/carbon-copy/100/000000/starred-ticket.png" alt="movie_icon"
                            height="25" width="25" style={{
                                margin: 5
                            }}/></span><span onClick={() => {
                                this.setter = false;
                                this.props.tab(false);
                            }} className={this
                                .setter?"":"bold2"}>Movies</span></Nav.Link>
                            <Nav.Link href="#link"><span tyle={{
                                margin: 5
                            }}></span>About</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl inline type="text" placeholder="Search" className="mr-sm-2" onChange={this.handlerChange} />
                            <Button variant="outline-light" onClick={this.handleSearch}>Search</Button>
                            {showSearchResults&&<div style={this.style}><div>
                                <img src={search
                                    .result.Poster } alt="" className="search_img"/>
                            </div>
                            <div>
                                <div className="search_box_extension_movieName">
                                    {search.result.Title+`(${search.result.Released})` }
                                </div>
                                <div className="genre">{search.result.Genre}</div>
                                <div className="genre">{search.result.Runtime}</div>
                                <div style={{marginLeft: 10, marginTop: 5 }}>
                                    <Button variant="outline-primary" className="w-75"
                                    onClick={() => {this.handleAddToMovies(search.result)}}>Favourite</Button>
                                </div>
                            </div></div>}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
     }
}

/*class NavigationWrapper extends React.Component{
    render() {
        return (
            <StoreContext.Consumer>
                {(store) => <Navigation tab={this.props.tab} store={store}/>}
            </StoreContext.Consumer>
        )
    }
}*/
    function mapStateToprops(state){
        return{
            search: state.search
        }
    }
    const NavigationWrapper = connect(mapStateToprops)(Navigation);

 export default NavigationWrapper;






