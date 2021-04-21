import React, { useContext } from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { CurrentUserContext } from '../../App';
import Homepage from '../homepage/Homepage';
import OrdersPage from '../OrdersPage/OrdersPage';
import AdminPage from '../AdminPage/AdminPage';
import LoginPage from '../LoginPage/LoginPage';
import Checkout from '../Checkout/Checkout';
import UserInfoPage from '../UserInfoPage/UserInfoPage';

const Header = () => {
    
    const currentUser = useContext(CurrentUserContext);
    console.log(currentUser[0].name);
    
    return (
        <Router>
            <div className="headerMainDiv">
                <div className="headerLeftSide">
                    <Link className="links" to='/'>
                        <h2 id="name">hay-store</h2>
                    </Link>
                </div>
                <div className="headerRightPart">
                    <div className="navlinks">
                        <Link className="links" to='/'>
                            <Button color="primary">Home</Button>
                        </Link>
                        <Link className="links" to='/orderPage'>
                            <Button color="primary">Orders</Button>
                        </Link>
                        <Link className="links" to='/adminPage'>
                            <Button color="primary">Admin</Button>
                        </Link>
                        <Link className="links" to='/checkoutPage'>
                            <Button color="primary">Checkout</Button>
                        </Link>
                        {
                            currentUser[0].image !== "" ?  
                                <Link className="links" to='/userInfo'>
                                    <img className="userImage" src={currentUser[0].image} alt=""/>
                                </Link>
                            :
                            currentUser[0].name !== "" ? 
                                <Link className="links" to='/userInfo'>
                                    <p className="userName">{currentUser[0].name}</p>
                                </Link>
                            :
                            currentUser[0].email !== "" ?
                                <Link className="links" to='/userInfo'>
                                    <p className="userEmail">{currentUser[0].email}</p>
                                </Link>
                            :
                            <Link className="links" to='/loginPage'>
                                <Button color="primary">Login</Button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            
            <Switch>
                <Route path="/orderPage">
                    <OrdersPage></OrdersPage>
                </Route>
                <Route path="/adminPage">
                    <AdminPage></AdminPage>
                </Route>
                <Route path="/checkoutPage">
                    <Checkout></Checkout>
                </Route>
                <Route path="/loginPage">
                    <LoginPage></LoginPage>
                </Route>
                <Route path="/userInfoPage">
                    <UserInfoPage></UserInfoPage>
                </Route>
                <Route path="/checkout">
                    <Checkout></Checkout>
                </Route>
                <Route path="/">
                    <Homepage></Homepage>
                </Route>
            </Switch>
            

        </Router>        
    );
};

export default Header;