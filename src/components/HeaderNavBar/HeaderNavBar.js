import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import './HeaderNavBar.css';
import { CurrentUserContext } from '../../App';
import LoginPage from '../LoginPage/LoginPage';
import AllCourses from '../AllCourses/AllCourses';
import Checkout from '../Checkout/Checkout';
import AdminPage from '../AdminPage/AdminPage';
import Homepage from '../homepage/Homepage';
import AllServices from '../AllServices/AllServices';
import OrdersPage from '../OrdersPage/OrdersPage';
import UserInfoPage from '../UserInfoPage/UserInfoPage';

const HeaderNavBar = () => {
    const currentUser = useContext(CurrentUserContext);
    return (
        <Router>
            <div className="headerMainDiv">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
                    <LinkContainer to="/">
                        <Navbar.Brand className="titleClass"><strong>Shikkhok</strong></Navbar.Brand>
                    </LinkContainer>        
                        <div className="logInBtn">
                        {
                            currentUser[0].image !== "" ?  
                                <Link className="links" to='/userInfoPage'>
                                    <img className="userImage" src={currentUser[0].image} alt=""/>
                                </Link>
                            :
                            currentUser[0].name !== "" ? 
                                <Link className="links" to='/userInfoPage'>
                                    <p className="userName">{currentUser[0].name}</p>
                                </Link>
                            :
                            currentUser[0].email !== "" ?
                                <Link className="links" to='/userInfoPage'>
                                    <p className="userEmail">{currentUser[0].email}</p>
                                </Link>
                            :
                            <Link className="links" to='/login'>
                                <Button className='logInButton' variant="outline-success">Login</Button>
                            </Link>
                        }
                        </div>
                                                      

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto " activeKey="/">
                            <LinkContainer to="/">
                                <Nav.Link className="navLinks"><strong>Home</strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/courses">
                                <Nav.Link className="navLinks"><strong>Courses</strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/services">
                                <Nav.Link className="navLinks"><strong>Services</strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/orderPage">
                                <Nav.Link className="navLinks"><strong>Orders</strong></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/admin">
                                <Nav.Link className="navLinks"><strong>Admin</strong></Nav.Link>
                            </LinkContainer>
                            
                            
                            </Nav>
                            <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>    
            </div>

            <Switch>

                <Route path="/login">
                    <LoginPage></LoginPage>
                </Route>

                <Route path="/courses">
                    <AllCourses></AllCourses>
                </Route>

                <Route path="/services">
                    <AllServices></AllServices>
                </Route>

                <Route path="/userInfoPage">
                    <UserInfoPage></UserInfoPage>
                </Route>

                <Route path="/checkoutPage">
                    <Checkout></Checkout>
                </Route>

                <Route path="/orderPage">
                    <OrdersPage></OrdersPage>
                </Route>

                <Route path="/admin">
                    <AdminPage></AdminPage>
                </Route>

                <Route path="/">
                    <Homepage></Homepage>
                </Route>
                
            </Switch>

        </Router>
    );
};

export default HeaderNavBar;