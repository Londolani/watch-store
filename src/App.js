import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="https://careers.jobvacancies4u.com/wp-content/uploads/sites/2/2021/01/Amazon-Jobs-Kansas-City.jpg" alt="amazon logo" />
        </nav>
        
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
            <div className={classes.FeatureData}>
              <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
            </div>
          </div>
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
        </div>
      </header>
    </div>
  );
}

export default App;
