import React from 'react';

const Newsletter=()=>{
    return(
        <div className='newsletter-container'>
        <h3>NEWSLETTER</h3>
        <h1>SUSCRIBITE</h1>
        <p>y enterate de todas las novedades</p>
        <div className='form-container'>
            <form action="" className='formulario'>
                <input type="text" placeholder='Ingresa tu email'/>
                <label htmlFor="">→</label>
            </form>
        </div>
    </div>
    );
};

export default Newsletter;