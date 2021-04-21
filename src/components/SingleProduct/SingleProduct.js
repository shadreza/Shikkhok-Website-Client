import React, { useContext } from 'react';
import './SingleProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectedItem, ShouldBtnBeThereContext} from '../../App';
import { BsInboxesFill } from "react-icons/bs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

  let prd ={
    Name : "",
    cost : 0,
    image : "",
    isSetOrNot : false,
    email:"",
    phoneNumber:"",
    orderStatus:0,
    buyerName:"",
    message:"",
    class:"",
    instructorName:"",
    category:"",
    type:0
    }

    const useStyles = makeStyles({
        root: {
          maxWidth: 350
        },
      });


const SingleProduct = (passedParams) => {
    let name , restPrd;
    const infos = passedParams.prdInfo;
    ({name , ...restPrd} = infos[0]);
    const selectedPrd = useContext(SelectedItem);
    const classes = useStyles();
    const history = useHistory();
    const setPrdToDefault = () =>{
        selectedPrd[1](prd);
    }
    let picture="";
    const btnMaintainer = useContext(ShouldBtnBeThereContext);
    const goToCheckoutPage = () => {
        
        setPrdToDefault();
        prd ={
            Name : name,
            cost : restPrd.cost,
            image : restPrd.image,
            isSetOrNot : restPrd.isSetOrNot,
            email:restPrd.email,
            phoneNumber:restPrd.phoneNumber,
            orderStatus:restPrd.orderStatus,
            buyerName:restPrd.buyerName,
            message:restPrd.message,
            class:restPrd.class,
            instructorName:restPrd.instructorName,
            category:restPrd.category,
            type:infos[1]
        }
        picture=`"${prd.image}"`
        selectedPrd[1](prd);
        let path = `/checkoutPage`; 
        history.push(path);
    }

    return (
        <Router>
            <div className="singleProductMainDiv">
                <Card className={classes.root}>
                    <CardActionArea className="needsMaxHeight500">
                        {
                            infos[1]===4?
                            <CardContent>
                                <BsInboxesFill></BsInboxesFill>
                            </CardContent>
                            :
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    
                                    height="270"
                                    image={restPrd.image}
                                    title={name}
                                />
                        }
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <strong>{name}</strong>
                        </Typography>
                        </CardContent>
                        {
                            infos[1]===1?
                                <CardContent>
                                    <p><small>{restPrd.message}</small></p>
                                    <p>Catagory : <strong>{restPrd.category}</strong></p>
                                    <p>Class : <small>{restPrd.class}</small></p>
                                    <p>Conducted By : <strong>{restPrd.instructorName}</strong></p>
                                </CardContent>
                                :
                                infos[1]===2?
                                    <CardContent>
                                        <p><small>{restPrd.message}</small></p>
                                        <p>Catagory : <strong>{restPrd.category}</strong></p>
                                    </CardContent>
                                    :
                                    infos[1]===3?
                                        <CardContent>
                                            <p><small>{restPrd.message}</small></p>
                                        </CardContent>
                                        :
                                        <CardContent>
                                            <p><small>{restPrd.message}</small></p>
                                            <p>Conducted By : <strong>{restPrd.instructorName}</strong></p>
                                        </CardContent>
                        }
                    </CardActionArea>
                    <CardActions className="footerOfProduct">
                        <Typography className="priceOfPrd" id="priceOfItem" gutterBottom variant="h5" component="h4">
                            <strong>${restPrd.cost}</strong>    
                        </Typography>
                            {
                                btnMaintainer[0]===false?<span/>:
                                infos[1]===1?
                                    <Button className="btnOfPrdBuying" variant="contained" size="small" color="primary" onClick={()=>goToCheckoutPage()}>
                                        Enroll
                                    </Button>   
                                    :
                                    infos[1]===2?
                                        <Button className="btnOfPrdBuying" variant="contained" size="small" color="primary" onClick={()=>goToCheckoutPage()}>
                                            Get Service
                                        </Button>   
                                        :<span></span>

                            }
                    </CardActions>
                </Card>
            </div>
            
        </Router>
    );
};

export default SingleProduct;