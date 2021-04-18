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
import { SelectedItem} from '../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

    let prd ={
    namePrd : "",
    pricePrd : 0,
    quantityPrd : 0,
    imageUrlPrd : "",
    isSetOrNot : false
    }

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });

const SingleProduct = (passedParams) => {

    const selectedPrd = useContext(SelectedItem);
    const infos = passedParams.defaultProduct;
    const name = infos.namePrd;
    const image = infos.imageUrlPrd;
    const price = infos.pricePrd;
    const classes = useStyles();
    const history = useHistory();

    const setPrdToDefault = () =>{
        selectedPrd[1](prd);
    }
    
    const goToCheckoutPage = () => {
        setPrdToDefault();
        prd ={
            namePrd : name,
            pricePrd : price,
            quantityPrd : infos.quantityPrd,
            imageUrlPrd : image,
            isSetOrNot : true
        }
        selectedPrd[1](prd);
        let path = `/checkoutPage`; 
        history.push(path);
    }
    return (
        <Router>
            <div className="singleProductMainDiv">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={image}
                        title={name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="footerOfProduct">
                        <Typography className="priceOfPrd" gutterBottom variant="h5" component="h4">
                            ${price}    
                        </Typography>
                            <Button className="btnOfPrdBuying" variant="contained" size="small" color="primary" onClick={()=>goToCheckoutPage()}>
                                Buy
                            </Button>
                    </CardActions>
                </Card>
            </div>
            
        </Router>
    );
};

export default SingleProduct;