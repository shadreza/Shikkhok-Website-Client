import React, { useContext } from 'react';
import { CurrentUserContext } from '../../App';
import LoginPage from '../LoginPage/LoginPage';
import ProductsGallery from '../ProductsGallery/ProductsGallery';
import './AllServices.css';
const AllServices = () => {
    const user = useContext(CurrentUserContext);
    return (
        <div className="divOuter">    
            
            {
                user[0].isLoggedInOrNot === false ?
                    <LoginPage></LoginPage> 
                    :

                <div className="allCourses">
                    <ProductsGallery type={[2,1]}></ProductsGallery>
                </div>
            }
            
        </div>
    );
};

export default AllServices;