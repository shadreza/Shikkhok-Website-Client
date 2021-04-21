import React, { useContext } from 'react';
import './LoginPage.css';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {  CurrentUserContext } from '../../App';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const LoginPage = () => {

    let userData = {
        name: "" ,
        image: "" ,
        email: "" ,
        isLoggedInOrNot : false
    }

    const user = useContext(CurrentUserContext);
    let history = useHistory();

    if(user[0].isLoggedInOrNot === true) {
        history.replace('/');
    }

    const handleContinueWithGoogleButton = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            const {displayName , email , photoURL} = response.user;
            console.log(response.user);
            userData = {
                name: displayName ,
                image: photoURL ,
                email: email ,
                isLoggedInOrNot : true
            }
            user[1](userData);
            // selectedPrd[1](prd);
        })
        .catch(err => {
            alert(err.message);
            console.log(err.code);
        })
    }

    return (
        <div className="loginPageMainDiv">
            <div className="loginPart">
                <p><strong>Lets Sign In First!</strong></p>
                <br/>
                <Button variant="contained" color="secondary" onClick={() => handleContinueWithGoogleButton()}>
                    Sign In To Google
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;