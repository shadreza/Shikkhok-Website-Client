import React, { useContext } from 'react';
import { CourseContext , ReviewContext, ServiceContext , ShouldBtnBeThereContext, TeacherContext , UserFeedbackContext } from '../../App';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductsGallery.css';

const defaultProduct = {
    name : "default",
    image : "https://cdn.business2community.com/wp-content/uploads/2014/01/product-coming-soon.jpg",
    price : 100.00,
    isDefaultOrNot : true
}

const ProductsGallery = (passedParams) => {
    const btnMaintainer = useContext(ShouldBtnBeThereContext);
    btnMaintainer[1](true);
    let whichContext ;
    let prdMessage="";
    if(passedParams.type[0] === 1){
        whichContext = CourseContext;       
    }
    else if(passedParams.type[0] === 2){
        whichContext = ServiceContext;       
    }
    else if(passedParams.type[0] === 3){
        whichContext = TeacherContext;       
    }
    else{
        whichContext = UserFeedbackContext;        
    }                      
        const prdItems = useContext(whichContext);

        if(passedParams.type[0] === 1){
            if(prdItems[0].length){
                prdMessage = "Courses For You!"
            }
            else{
                prdMessage = "Courses Are Up-Comming..."
            }
        }
        else if(passedParams.type[0] === 2){
            if(prdItems[0].length){
                prdMessage = "Services We Provide"
            }
            else{
                prdMessage = "Services Are Being Added Soon..."
            }
        }
        else if(passedParams.type[0] === 3){
            if(prdItems[0].length){
                prdMessage = "The Guides!"
            }
            else{
                prdMessage = "Teachers Are Being Hired..."
            }
        }
        else{
            if(prdItems[0].length){
                prdMessage = "Your Responses!"
            }
            else{
                prdMessage = "None Of You Gave Any Feedbacks?"
            }
        }

        let itemArray = [];
        if(passedParams.type[1]===0){
            let howManyItems = prdItems[0].length;
            let startingIndex=0;
            if(howManyItems>3){
                if(passedParams.type[0]>3){
                    startingIndex=howManyItems-3;
                }
                else{
                    howManyItems=3;
                }
            }
            let i=0;
            for(i=startingIndex;i<howManyItems;i++){
                const item = prdItems[0][i];
                itemArray.push(item);
            }
        }
    

    return (
        <div className="prdGallery">
            {
                prdItems[0].length === 0 ?
                    passedParams.type[1]===0 ?
                        <span/>
                        :
                        <h3 className="sectionHeader">{prdMessage}</h3>
            
                :
                <div className="gallery">
                    <h3 className="sectionHeader">{prdMessage}</h3>    
                        <br/> 
                        <div className="productsGalleryMainDiv">
                            
                            {
                                passedParams.type[1]===0 ? 
                                    itemArray.map(item=><SingleProduct prdInfo = {[item,passedParams.type[0]]}></SingleProduct>)
                                    :
                                    prdItems[0].map(items=><SingleProduct prdInfo = {[items,passedParams.type[0]]}></SingleProduct>)

                            }
                            
                        </div>
                        
                </div>
            }
        </div>
    );
};

export default ProductsGallery;