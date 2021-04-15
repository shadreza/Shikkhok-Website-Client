import React from 'react';
import './SingleProduct.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const SingleProduct = (passedParams) => {
    const infos = passedParams.defaultProduct;
    const name = infos.name;
    const image = infos.image;
    const price = infos.price;
    const classes = useStyles();
    return (
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
                    <Button className="btnOfPrdBuying" size="small" color="primary">
                        Buy Now
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default SingleProduct;