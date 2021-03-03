import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Button, Form, Nav, FormControl} from "react-bootstrap";


class Navigation extends React.Component{
    constructor() {
        super();
        this.setter = undefined;
    }
    render() {
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
                            <FormControl inline type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
     }
}
 export default Navigation;






