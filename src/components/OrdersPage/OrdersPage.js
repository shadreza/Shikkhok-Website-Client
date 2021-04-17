import React, { useContext } from 'react';
import { CustomerContext, UserContext } from '../../App';
import LoginPage from '../LoginPage/LoginPage';
import SinglePrdInfoInManagePage from '../SinglePrdInfoInManagePage/SinglePrdInfoInManagePage';
import SinglePrdInfoInOrdersPage from '../SinglePrdInfoInOrdersPage/SinglePrdInfoInOrdersPage';
import './OrdersPage.css';

const OrdersPage = () => {
    const user = useContext(UserContext);
    const customers = useContext(CustomerContext);
    const specificCustomer = customers[0].filter(customer => customer.customerEmail === user[0].email);
    let count =0;
    return (
        <div className="ordersPageMainDiv">
            {user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
            :
            <div className="orders">
                <div className="particularUser">
                    <h3>{user[0].name} <span className="partInH3">orders</span> </h3>
                </div> 
                {specificCustomer.length === 0 ? <h1>No Previous Purchase</h1>
                : 
                specificCustomer.map(items => {
                    count = count + 1;
                    return <SinglePrdInfoInOrdersPage passedInfo={[items,count]}></SinglePrdInfoInOrdersPage>
                })
                }
            </div>         
            }  
        </div>
    );
};

export default OrdersPage;

