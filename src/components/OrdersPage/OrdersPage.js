import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext, UserOrderListContext } from '../../App';
import LoginPage from '../LoginPage/LoginPage';
import SinglePrdInfoInOrdersPage from '../SinglePrdInfoInOrdersPage/SinglePrdInfoInOrdersPage';
import './OrdersPage.css';

const OrdersPage = () => {
    const user = useContext(CurrentUserContext);
    const items = useContext(UserOrderListContext);
    const itemOfTheLoggedInCustomer = items[0].filter(customer => customer.customerEmail === user[0].email);
    let count =0;
    let totalCost=0;
    const [counts,setCounts]=useState(0);
    useEffect(() => {
        setCounts(count);
    }, [count])
    return (
        <div className="ordersPageMainDiv" id="shouldBeHiddenWhenNotLoggedIn">
            <div className="particularUser">
                <h3>{user[0].name} <span className="partInH3">orders</span> </h3>
            </div> 
            {user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
            :
            <div className="orders">
                
                {itemOfTheLoggedInCustomer.length === 0 ? <h1>No Previous Purchase</h1>
                : 
                itemOfTheLoggedInCustomer.map(items => {
                    count = count + 1;
                    console.log(items);
                    return <div className="mainDiv">
                        <SinglePrdInfoInOrdersPage passedInfo={[items,count]}></SinglePrdInfoInOrdersPage>
                    </div>
                })
                }
            </div>         
            }  
        </div>
    );
};

export default OrdersPage;

