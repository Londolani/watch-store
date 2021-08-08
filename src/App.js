import logo from './logo.svg';
import classes from './App.module.css';

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
          </div>
          <div className={classes.ProductData}>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
