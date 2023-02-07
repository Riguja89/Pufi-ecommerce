import React from 'react';
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <div className='Home'>
            <h1>
                {/* ¡HELLO! */}
                <br />
                {/* GET READY? */}
            </h1>
            <Link to="/home">
            <button className='start'>
                Get Started
            </button>
            </Link>
        </div>
    );
};

export default Home;