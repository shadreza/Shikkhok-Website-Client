import React from 'react';
import ProductsGallery from '../ProductsGallery/ProductsGallery';
import TopBanner from '../TopBanner/TopBanner';
import './Homepage.css'

const Homepage = () => {
    return (
        <div className="homePageMainDiv">
            <TopBanner></TopBanner>
            <ProductsGallery type={[1,0]}></ProductsGallery>
            <ProductsGallery type={[2,0]}></ProductsGallery>
            <ProductsGallery type={[3,0]}></ProductsGallery>
            <ProductsGallery type={[4,0]}></ProductsGallery>
        </div>
    );
};

export default Homepage;