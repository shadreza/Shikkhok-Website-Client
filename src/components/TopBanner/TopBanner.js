import React from 'react';
import './TopBanner.css';
import {useHistory} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
const TopBanner = () => {
    const history = useHistory();
    const goToCoursesCollectionPage = () =>{
        history.push("/courses");
    }
    return (
        
            <div className="topBannerMainDiv">
                <div className="upperPortion">
                    <div className="topBannerLeftSide">
                        <h1 className="mainHeader"><span className="blueSpan">GUIDING YOU TO</span> <span className="greenSpan">SUCCESS</span></h1>
                        <h5 className="leftAlignment">A <strong className="relyingColorForTrust">right mentorship</strong> can be life changer for your <strong className="strongColorForFocus">educative growth</strong>.</h5>
                    </div>
                    <div className="topBannerRightSide">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                alt="First slide"
                                />
                                {/* <Carousel.Caption className="needsOpacity">
                                <h3>Why Learn?</h3>
                                <p>To Enrich Your InnerOne!</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
                                alt="Second slide"
                                />

                                <Carousel.Caption className="blackCaptions">
                                <h3>Stumbled Upon?</h3>
                                <p>Contact Us. We Love To Solve</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=841&q=80"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Where To Learn?</h3>
                                <p>Go Through Books & Join Us</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <br/>
                <Button className="impactLine" variant="outline-danger" onClick={()=>goToCoursesCollectionPage()}> <strong>Join Now To Grow!</strong> </Button>
            </div>
            
        
        
    );
};

export default TopBanner;