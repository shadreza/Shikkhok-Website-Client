import React, { useContext } from 'react';
import './Checkout.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectedItem, UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import axios from 'axios';
const Checkout = () => {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });
      const classes = useStyles();
    const user = useContext(UserContext);
    const selectedPrd = useContext(SelectedItem);
    const item = selectedPrd[0];
    const name = item.namePrd;
    const price = item.pricePrd;
    const image = item.imageUrlPrd;
    const userName = user[0].name;
    const userEmail = user[0].email;
    let history = useHistory();
    const confirmButtonClickd = ()=>{
        const UserAndData = {
            customerName : userName,
            customerEmail : userEmail,
            boughtPrdName : name,
            boughtPrdPrice : price,
            boughtPrdImage : image,
            timeOfBought : Date().toLocaleString()
        };
        const url = "http://localhost:5055/addUserPurchase";
            axios.post(url,UserAndData)
            .then(res=>{
                console.log(res);
                console.log("Successful");
                alert("Successfully Bought");
            })
            .catch(err=>{
                console.log(err.message);
                alert("Could Not Be Bought");
            }) 
        let prd ={
            namePrd : "",
            pricePrd : 0,
            quantityPrd : 0,
            imageUrlPrd : "",
            isSetOrNot : false
            }
            selectedPrd[1](prd);
            history.replace('/');
    }
    return (
        <div className="checkoutPageMainDiv">
            {
                user[0].isLoggedInOrNot === false ? <LoginPage></LoginPage>
                :
                selectedPrd[0].isSetOrNot === false ? <h1 className="noItemsSelected">No Items Selected</h1>
                :
                <div className="checkOutPrdDiv">
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image={image}
                            title={name}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <strong>{name}</strong>
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                <small>${price}</small>    
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br/><br/>
                    <Button className="btnOfPrdPurchasing" variant="contained" size="small" color="secondary" onClick={()=>confirmButtonClickd()}>
                        Confirm Purchase
                    </Button>
                </div>
            }
        </div>
    );
};

export default Checkout;