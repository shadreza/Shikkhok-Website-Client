import { Button } from '@material-ui/core';
import firebase from 'firebase';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './UserInfo.css';

const defaultUser = {
    name:"",
    image:"",
    email:"",
    isLoggedInOrNot:false
  }

const UserInfo = () => {
    const history = useHistory();
    const user = useContext(UserContext);
    const handleSignOututton = () => {
        firebase.auth().signOut()
        .then(() => {
            alert(user[0].name + " Signed Out");
            user[1](defaultUser);
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