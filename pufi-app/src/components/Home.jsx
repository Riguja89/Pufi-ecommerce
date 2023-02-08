import React from 'react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className='homeContainer'>
            <h2>
                ESTÁR CÓMODO, 
                <br /> 
                NUNCA FUE TAN FÁCIL
            </h2>
            <div>
            <Link to="/home">
            <button className='shop'>
                SHOP
            </button>
            </Link>
            </div>
        </div>
    );
};

export default Home;