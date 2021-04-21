import { Button } from '@material-ui/core';
import firebase from 'firebase';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SelectedItem, CurrentUserContext } from '../../App';
import './UserInfo.css';

const defaultUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }

const UserInfo = () => {

    let prd ={
        name : "",
        cost : 0,
        image : "",
        message: "",
        isSetOrNot : false,
        email:"",
        phoneNumber:"",
        orderStatus:0,
        buyerName:"",
        class:"",
        instructorName:"",
        category:"",
        type:0
        }
    const selectedCourse = useContext(SelectedItem);
    
    const history = useHistory();
    const user = useContext(CurrentUserContext);
    const handleSignOututton = () => {
        firebase.auth().signOut()
        .then(() => {
            alert(user[0].name + " Signed Out");
            user[1](defaultUser);
            selectedCourse[1](prd);
            history.replace('/');
        })
        .catch((error) => {
            alert(error.message + '\nUser COuld Not Be Signed Out');
        });
          
    }
    return (
        <div className="userInfoMainDiv">
            <div className="userInfo">
                <h4>Name : {user[0].name}</h4>
                <h4>Email : {user[0].email}</h4>
                {user[0].isLoggedInOrNot === true && 
                    <Button variant="contained" color="secondary" onClick={() => handleSignOututton()}>
                        Sign Out
                    </Button>
                }  
            </div>
        </div>
    );
};

export default UserInfo;