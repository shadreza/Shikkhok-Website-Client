import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleAdminInfoDisplay.css';
import axios from 'axios';
const SingleAdminInfoDisplay = (passedParams) => {
    const adminInfos = passedParams.adminInfo;
    const admin = adminInfos[0];
    const count = adminInfos[1];
    const adminId = admin._id;
    const deleteAdminFunction = (id) => {
        if(count===1){
            alert('Atleast One Admin Must Stay So Cannot Be Removed');
            return;
        }
        const url = `https://fierce-cove-21299.herokuapp.com/deleteAdmin/${id}`;
        axios.delete(url , { params: { id }})
        .then(res => {
            alert(`deleted successfully`)
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="mainDiv">
            <p><strong>{admin.email}</strong></p>
            <Button variant="danger" onClick={()=>deleteAdminFunction(adminId)}>Remove</Button>
        </div>
    );
};

export default SingleAdminInfoDisplay;