import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductsGallery.css';

const defaultProduct = {
    name : "default",
    image : "https://cdn.business2community.com/wp-content/uploads/2014/01/product-coming-soon.jpg",
    price : 100.00,
    isDefaultOrNot : true
}

const ProductsGallery = () => {

    const prdItems = useContext(ProductContext);

    return (
        <div className="productsGalleryMainDiv">
            {
                prdItems[0].map(items=>
                    <SingleProduct defaultProduct = {items}></SingleProduct>
                )
            }
        </div>
    );
};

export default ProductsGallery;