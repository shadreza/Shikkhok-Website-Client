import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import './AdminPageAdd.css';

const AdminPageAdd = () => {

    let Prd = {
        namePrd : "",
        pricePrd: 0.0,
        quantityPrd: 0,
        imageUrlPrd: ""
    }

    const [addingPrd , setAddingPrd] = useState (Prd);
    const addingButtonClicked = () => {
        const name = document.getElementById("inputName").value;
        const qty = document.getElementById("inputQuantity").value;
        const price = document.getElementById("inputPrice").value;
        let image="";
        const img = document.getElementById("inputImage").files[0];
        console.log(img);
        const imgData = new FormData();
        imgData.set('key','45993c2fa3b2590d51cee87d8ff551a6');
        imgData.append('image',img);
        axios.post('https://api.imgbb.com/1/upload',imgData)
        .then(function (response) {
            image = response.data.data.display_url;
            Prd.namePrd=name;
            Prd.pricePrd=price;
            Prd.quantityPrd=qty;
            Prd.imageUrlPrd=image;
            setAddingPrd(Prd);
            console.log(Prd);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    return (
        <div className="adminPageAddMainDiv"> 
            <div className="addingProduct">
                <p><strong>Name Of The Product</strong></p>
                <input id="inputName" className="inputBox" type="text" placeholder="input name"/>
                <p><strong>Quantity Of The Product</strong></p>
                <input id="inputQuantity" className="inputBox" type="number" placeholder="input quantity"/>
                <p><strong>Price Of The Product</strong></p>
                <input id="inputPrice" className="inputBox" type="number" placeholder="input price"/>
                <br/><br/>
                <p><strong>Upload Your Product Image</strong></p>
                <input id="inputImage" className="inputBox" type="file" placeholder="upload image"/>
                <br/><br/>
                <Button variant="contained" color="primary" onClick={() =>addingButtonClicked()}>
                    Add Product
                </Button>
            </div>
        </div>
    );
};

export default AdminPageAdd;