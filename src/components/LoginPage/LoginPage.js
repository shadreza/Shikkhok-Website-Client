import React, { useContext } from 'react';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { HeaderStayingContext, UserContext } from '../../App';
import Button from '@material-ui/core/Button';

const googleProvider = new firebase.auth.GoogleAuthProvider();


const LoginPage = () => {

    const headerVariable = useContext(HeaderStayingContext);

    const user = useContext(UserContext);
    let history = useHistory();
    const handleContinueWithGoogleButton = () => {
        alert('clicked')
        firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            const {displayName , email , photoURL} = response.user;
            console.log(response.user);
            const userData = {
                name: displayName ,
                email: email ,
                image: photoURL ,
                isLoggedInOrNot : true
            }
            UserContext[1](userData);
            history.replace('/');
        })
        .catch(err => {
            alert(err.message);
            console.log(err.code);
        })
    }

    return (
        <div className="loginPageMainDiv">
            <div className="loginPart">
                <strong>Lets Sign In First!</strong>
                <Button variant="contained" color="secondary" onClick={() => handleContinueWithGoogleButton()}>
                    Sign In To Google
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;