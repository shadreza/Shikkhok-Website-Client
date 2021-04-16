import React, { useContext } from 'react';
import { UserContext } from '../../App';
import LoginPage from '../LoginPage/LoginPage';
import './OrdersPage.css';

const OrdersPage = () => {
    const user = useContext(UserContext);
    return (
        <div className="ordersPageMainDiv">
            {user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
            :
            <div className="particularUser">
                <h3>{user[0].name} <span className="partInH3">orders</span> </h3>
            </div>            
        }  
        </div>
    );
};

export default OrdersPage;

