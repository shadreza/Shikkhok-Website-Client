import React from 'react';
import ProductsGallery from '../ProductsGallery/ProductsGallery';
import SearchBox from '../SearchBox/SearchBox';
import './Homepage.css'

const Homepage = () => {

    

    return (
        <div className="homePageMainDiv">
            <SearchBox></SearchBox>
            <ProductsGallery></ProductsGallery>
        </div>
    );
};

export default Homepage;