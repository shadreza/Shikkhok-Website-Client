import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AdminPageAdd.css';

const AdminPageAdd = () => {
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        let Prd = {
            namePrd : data.nameOfPrd,
            pricePrd: data.priceOfPrd,
            quantityPrd: data.qytOfPrd,
            imageUrlPrd: data.imgOfPrd
        }
        let image="";
        const img = Prd.imageUrlPrd[0];
        const imgData = new FormData();
        imgData.set('key','45993c2fa3b2590d51cee87d8ff551a6');
        imgData.append('image',img);
        axios.post('https://api.imgbb.com/1/upload',imgData)
        .then(function (response) {
            image = response.data.data.display_url;
            Prd.imageUrlPrd=image;
            console.log(Prd);
            const url = "http://https://fierce-lowlands-85167.herokuapp.com//addProduct";
            axios.post(url,Prd)
            .then(res=>{
                console.log(res);
                console.log("Successful");
                alert("Successfully Added");
            })
            .catch(err=>{
                console.log(err.message);
                alert("Could Not Be Added");
            })                                                                      
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    return (
        <div className="adminPageAddMainDiv">
            <div className="addingProduct"> 
                <form className="addingProduct" onSubmit={handleSubmit(onSubmit)}>
                    <p><strong>Name Of The Product</strong></p>
                    <input id="inputName" placeholder="input name" className="inputBox" {...register("nameOfPrd" , { required: true })} /> 
                    <p><strong>Quantity Of The Product</strong></p>
                    <input id="inputQuantity" className="inputBox" type="number" placeholder="input quantity" {...register("qytOfPrd" , { required: true })} />
                    <p><strong>Price Of The Product</strong></p>
                    <input id="inputPrice" className="inputBox" type="number" placeholder="input price" {...register("priceOfPrd" , { required: true })}/>
                    <br/><br/>
                    <p><strong>Upload Your Product Image</strong></p>
                    <input id="inputImage" className="inputBox" type="file" placeholder="upload image" {...register("imgOfPrd" , { required: true })} />
                    <br/><br/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AdminPageAdd;