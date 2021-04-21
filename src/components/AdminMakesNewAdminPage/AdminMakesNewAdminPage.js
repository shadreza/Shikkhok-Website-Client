import React, { useContext } from 'react';
import { AdminContext } from '../../App';
import SingleAdminInfoDisplay from '../SingleAdminInfoDisplay/SingleAdminInfoDisplay';
import './AdminMakesNewAdminPage.css';
import axios from 'axios';

const AdminMakesNewAdminPage = () => {
    const admin = useContext(AdminContext);
    const noOfAdmins = admin[0].length;
    const idOfAdmin = admin[0]._id;
    let mailLabel=0;
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        if(!re.test(email)){
            mailLabel=0;
            return false;
        }
        mailLabel=1;
        admin[0].map(currentMail => currentMail.email===email ? mailLabel=2 : mailLabel=1)
        if(mailLabel!==1){
            return false;
        }
        return true;
    }
    const addAdmin = ()=>{
        const mail = document.getElementById('emailInput').value;
        if(validateEmail(mail)===true){
            const url = `https://fierce-cove-21299.herokuapp.com/addAdmins`;
        const defaultReview = {
            email:mail,
          }
        axios.post(url,defaultReview)
            .then(res=>{
                console.log(res);
                console.log("Successful");
                alert("Successfully Added");
            })
            .catch(err=>{
                console.log(err.message);
                alert("Could Not Be Added");
            })
        }
        else{
            if(mailLabel===0){
                alert('Invalid Mail');
            }
            else{
                alert('Mail Already Exists');
            }
        }
        document.getElementById('emailInput').value = "";
    }
    return (
        <div className="newAdminPage">
            <h2>Current Admins</h2>
            <div className="adminsShow">
                {
                admin[0].map(currentAdmin=><SingleAdminInfoDisplay adminInfo={[currentAdmin , noOfAdmins , idOfAdmin]}></SingleAdminInfoDisplay>)
                }
            </div>
            <br/><br/>
            <h2>Add Admin</h2>
            <div className="inputForm">
                <input type="email" name="email" id="emailInput" placeholder="input email address" required/>
                <input type="button" onClick={()=>addAdmin()} value="Add"/>                
            </div>
        </div>
    );
};

export default AdminMakesNewAdminPage;