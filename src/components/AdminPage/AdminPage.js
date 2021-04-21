import { Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";
import { CurrentUserContext , AdminContext } from '../../App';
import AdminMakesNewAdminPage from '../AdminMakesNewAdminPage/AdminMakesNewAdminPage';
import AdminManagesCourse from '../AdminManagesCourse/AdminManagesCourse';
import AdminPageAdd from '../AdminPage-Add/AdminPageAdd';
import AdminPageManage from '../AdminPage-Manage/AdminPageManage';
import LoginPage from '../LoginPage/LoginPage';
import './AdminPage.css';

const AdminPage = () => {

    let history = useHistory();

    const currentUser = useContext(CurrentUserContext);
    const admins = useContext(AdminContext);
    let isAdminOrNot = false;
    const isValidAdminOrNot =()=>{
        let i=0;
        for(i=0;i<admins[0].length;i++){
            const admin = admins[0][i];
            console.log(admin.email,currentUser[0].email)
            if(admin.email === currentUser[0].email){
                isAdminOrNot=true;
                return;
            }
            else{
                isAdminOrNot = false;
            }
        }
        if(isAdminOrNot===true){
            return true;
        }
        return false;
    }
    
    return (
        <Router>
            <div className="adminPageMainDiv">
                { 
                     currentUser[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
                        :
                         isValidAdminOrNot()===false ? <h1 className="mustBeBig">Unauthorized Access!!!</h1>
                             : 
                            
                            
                            <div className="adminDiv">
                                <div className="topPart">
                                    <Link to='/adminManageCourse'>
                                        <Button variant="contained" color="secondary">
                                            Manage Course
                                        </Button>
                                    </Link>
                                    <Link to='/adminManageOrders'>
                                        <Button variant="contained" color="primary">
                                            Manage Orders
                                        </Button>
                                    </Link> 
                                    <Link to='/adminManageAdmins'>
                                        <Button variant="contained" color="secondary">
                                            Manage Admins
                                        </Button>
                                    </Link>                     
                                </div>      
                            </div>
                }
                
            </div>
            <Switch>
                <Route path="/adminManageCourse">
                    <AdminManagesCourse></AdminManagesCourse>
                </Route>
                <Route path="/adminManageOrders">
                    <AdminPageManage></AdminPageManage>
                </Route>
                <Route path="/adminManageAdmins">
                    <AdminMakesNewAdminPage></AdminMakesNewAdminPage>
                </Route>
            </Switch>
        </Router>
    );
};

export default AdminPage;