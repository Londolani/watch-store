import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () =>{
    return(
        <header>    
            <nav className={classes.Topbar}>
                <img src="https://careers.jobvacancies4u.com/wp-content/uploads/sites/2/2021/01/Amazon-Jobs-Kansas-City.jpg" alt="amazon logo" />
            </nav>
        </header>      
    );
}

export default Topbar;