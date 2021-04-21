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
import { SelectedItem, CurrentUserContext, ShouldBtnBeThereContext } from '../../App';
import { useHistory } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import axios from 'axios';
import ProductsGallery from '../ProductsGallery/ProductsGallery';
import SingleProduct from '../SingleProduct/SingleProduct';
const Checkout = () => {

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });
    const classes = useStyles();
    const user = useContext(CurrentUserContext);
    const btnMaintainer = useContext(ShouldBtnBeThereContext);
    btnMaintainer[1](false);
    const selectedPrd = useContext(SelectedItem);
    const item = selectedPrd[0];
    let history = useHistory();
    const confirmButtonClickd = ()=>{
        const UserAndData = {
            customerName : user[0].name,
            customerEmail : user[0].email,
            boughtItemName : item.Name,
            boughtItemCost : item.cost,
            boughtItemImage : item.image,
            timeOfBought : Date().toLocaleString(),            
            orderStatus:item.orderStatus,
            message:item.message,
            class:item.class,
            instructorName:item.instructorName,
            category:item.category,
            type:item.type
        };
        const url = "https://fierce-lowlands-85167.herokuapp.com/addOrders-list";
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
                    <SingleProduct prdInfo = {[item,item.type]}></SingleProduct>
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