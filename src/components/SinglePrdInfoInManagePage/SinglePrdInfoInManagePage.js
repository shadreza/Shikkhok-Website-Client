import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import './SinglePrdInfoInManagePage.css';

const SinglePrdInfoInManagePage = (passedParams) => {

    const itemInfo = passedParams.passedInfo[0];
    const itemNo = passedParams.passedInfo[1];
    const name = itemInfo.namePrd;
    const qty = itemInfo.quantityPrd;
    const price = itemInfo.pricePrd;
    const image = itemInfo.imageUrlPrd;
    const id = itemInfo._id;

    const deletePrd = id => {
        const url = `http://https://fierce-lowlands-85167.herokuapp.com/deletePrd/${id}`;
        axios.delete(url , { params: { id }})
        .then(res => {
            alert(`${name} was deleted successfully`)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return (
        <div className="singlePrdInfoInManagePageMainDiv">
            <p><small>{itemNo}</small></p>
            <p><strong>{name}</strong></p>
            <p>{price}</p>
            <img src={image} alt=""/>
            <p>{qty}</p>
            <Button variant="contained" color="secondary" onClick={(event)=>deletePrd(id)}>
                Delete Product
            </Button>
        </div>
    );
};

export default SinglePrdInfoInManagePage;