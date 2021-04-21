import React from 'react';
import './SinglePrdInfoInOrdersPage.css';

const SinglePrdInfoInOrdersPage = (passedParams) => {
    const itemInfo = passedParams.passedInfo[0];
    const itemNo = passedParams.passedInfo[1];
    const name = itemInfo.boughtItemName;
    const price = itemInfo.boughtItemCost;
    const image = itemInfo.boughtItemImage;
    const id = itemInfo._id;
    const time = itemInfo.timeOfBought;
    const catagory = itemInfo.category;
    return (
        <div className="singlePrdInfoInOrderPageMainDiv">
            <p>product no : <strong>{itemNo}</strong></p>
            <p><strong>{name}</strong></p>
            <p><strong>${price}</strong></p>
            <p><strong>{catagory}</strong></p>
            <h6>{time}</h6>
            <img src={image} alt=""/>
        </div>
    );
};

export default SinglePrdInfoInOrdersPage;