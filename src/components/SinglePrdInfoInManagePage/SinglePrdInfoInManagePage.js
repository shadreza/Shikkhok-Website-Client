import { Button } from '@material-ui/core';
import React from 'react';
import './SinglePrdInfoInManagePage.css';

const SinglePrdInfoInManagePage = (passedParams) => {

    const deletePrd = id => {
        console.log(id);
    }

    const itemInfo = passedParams.passedInfo[0];
    const itemNo = passedParams.passedInfo[1];
    const name = itemInfo.namePrd;
    const qty = itemInfo.quantityPrd;
    const price = itemInfo.pricePrd;
    const image = itemInfo.imageUrlPrd;
    const id = itemInfo._id;
    return (
        <div className="singlePrdInfoInManagePageMainDiv">
            <p><small>{itemNo}</small></p>
            <p><strong>{name}</strong></p>
            <p>{qty}</p>
            <p>{price}</p>
            <img src={image} alt=""/>
            <Button variant="contained" color="secondary" onClick={(event)=>deletePrd(id)}>
                Delete Product
            </Button>
        </div>
    );
};

export default SinglePrdInfoInManagePage;