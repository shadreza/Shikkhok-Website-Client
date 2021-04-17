import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './LoadingPage.css';

const LoadingPage = () => {
    
    return (
        <div className="loadingPageMainDiv">
            <CircularProgress disableShrink />
        </div>
    );
};

export default LoadingPage;