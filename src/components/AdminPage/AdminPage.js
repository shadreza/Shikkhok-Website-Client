import { Button } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { HeaderStayingContext, UserContext } from '../../App';
import AdminPageAdd from '../AdminPage-Add/AdminPageAdd';
import AdminPageManage from '../AdminPage-Manage/AdminPageManage';
import LoginPage from '../LoginPage/LoginPage';
import './AdminPage.css';
const AdminPage = () => {

    const user = useContext(UserContext);
    let managePartSelected = true;

    const handleManageButton = () => {
        console.log('true');
        managePartSelected = true;
    }

    const handleAddButton = () => {
        console.log('false');
        managePartSelected = false;
    }
    

    return (
        <div className="adminPageMainDiv">
            {
                 user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
                 :
                <div className="adminDiv">
                    <div className="topPart">
                        <Button variant="contained" color="primary" onClick={() => handleManageButton()}>
                            Manage Product
                        </Button>
                            
                        <Button variant="contained" color="primary" onClick={() => handleAddButton()}>
                            Add Product
                        </Button>                        
                    </div>       
                
                    <div className="bottomPart" id="bottom">
                        
                    </div>
                </div>
            }
        </div>
    );
};

export default AdminPage;