import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from './ProductData';

const ProductDetails = (props) =>{
    const currentHour = new Date().getHours()> 9 ? new Date().getHours() : '0'+ new Date().getHours();
    const currentMinutes = new Date().getMinutes()> 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes();
    return(
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle} >{ProductData.title} </h1>
            <p className={classes.ProductDescription}>{ProductData.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div >
              <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black colored Watch" />
              <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red colored Watch" />
              <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue colored Watch" />  
              <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple colored Watch" /> 
              <h3 className={classes.SectionHeading}>Features</h3>
              <div>
                <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>Time</button>
                <button className={classes.FeatureItem}>Heart Rate</button>
                <br />
                <button className={classes.PrimaryButton}>Buy Now</button>
              </div>
            </div>
        </div>

    );
}

export default ProductDetails;