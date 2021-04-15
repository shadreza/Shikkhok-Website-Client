import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductsGallery.css';

const defaultProduct = {
    name : "default",
    image : "https://cdn.business2community.com/wp-content/uploads/2014/01/product-coming-soon.jpg",
    price : 100.00,
    isDefaultOrNot : true
}

const ProductsGallery = () => {
    return (
        <div className="productsGalleryMainDiv">
            <SingleProduct defaultProduct={defaultProduct}></SingleProduct>
        </div>
    );
};

export default ProductsGallery;