import React from 'react';
import './SinglePrdInfoInOrdersPage.css';

const SinglePrdInfoInOrdersPage = (passedParams) => {
    const itemInfo = passedParams.passedInfo[0];
    const itemNo = passedParams.passedInfo[1];
    const name = itemInfo.boughtPrdName;
    const price = itemInfo.boughtPrdPrice;
    const image = itemInfo.boughtPrdImage;
    const id = itemInfo._id;
    const time = itemInfo.timeOfBought;
    const custName = itemInfo.customerName;
    const custEmail = itemInfo.customerEmail;
    return (
        <div className="singlePrdInfoInOrderPageMainDiv">
            <p>product no : <strong>{itemNo}</strong></p>
            <p><strong>{name}</strong></p>
            <p><strong>${price}</strong></p>
            <h3>{time}</h3>
            <img src={image} alt=""/>
        </div>
    );
};

export default SinglePrdInfoInOrdersPage;