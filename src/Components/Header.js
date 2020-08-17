import React, {Component} from 'react';
import logo from './logo192.png'
import Home from '../Pages/Home';
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button
} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand={'md'} bg={'dark'} variant={'dark'}>
                    <Container>
                        <Navbar.Brand href={'/'}>
                            <img
                                src={logo}
                                height={'30'}
                                width={'30'}
                                className={'d-line-block align-top'}
                                alt={'Logo'}
                            /> React App
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
                        <Navbar.Collapse id={'responsive-navbar-nav'}>
                            <Nav className={'mr-auto'}>
                                <Nav.Link href={'/'}>Home</Nav.Link>
                                <Nav.Link href={'/About'}>About us</Nav.Link>
                                <Nav.Link href={'/Contacts'}>Contacts</Nav.Link>
                                <Nav.Link href={'/Blog'}>Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type={'text'}
                                    placeholder={'text'}
                                    className={'mr-sm-2'}
                                />
                                <Button variant={'outline-info'}>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path={'/'}> <Home /> </Route>
                        <Route path={'/about'}> <About /> </Route>
                        <Route path={'/contacts'}> <Contacts /> </Route>
                        <Route path={'/blog'}> <Blog /> </Route>
                    </Switch>
                </Router>
            </>

        );
    }
}

export default Header;