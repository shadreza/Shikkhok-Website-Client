import { Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { SelectedItem, UserContext } from '../../App';
import AdminPageAdd from '../AdminPage-Add/AdminPageAdd';
import AdminPageManage from '../AdminPage-Manage/AdminPageManage';
import LoginPage from '../LoginPage/LoginPage';
import './AdminPage.css';

const AdminPage = () => {

    const user = useContext(UserContext);
    
    return (
        <Router>
            <div className="adminPageMainDiv">
                {
                    user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
                    :
                    <div className="adminDiv">
                        <div className="topPart">
                            <Link to='/adminManagePage'>
                                <Button variant="contained" color="primary">
                                    Manage Product
                                </Button>
                            </Link>
                            <Link to='/adminAddPage'>
                                <Button variant="contained" color="primary">
                                    Add Product
                                </Button>
                            </Link>                       
                        </div>       
                    </div>
                }
            </div>
            <Switch>
                <Route path="/adminManagePage">
                    <AdminPageManage></AdminPageManage>
                </Route>
                <Route path="/adminAddPage">
                    <AdminPageAdd></AdminPageAdd>
                </Route>
            </Switch>
        </Router>
    );
};

export default AdminPage;