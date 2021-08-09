import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from './ProductData';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item, pos) =>{
        const classArr = [classes.ProductImage]
        if(pos == 0){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} /> 
    );
    })
    return(
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle} >{props.data.title} </h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div >
              {colorOptions}
              
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