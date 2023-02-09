import React from 'react';
import	pufifooter from "../images/pufifooter.svg";
import secure from "../images/segura.jpg"
const Footer=()=>{
    return(
        <div className='footer-container'>
            <div className='pufi'>
                <img src={pufifooter} alt="" />
            </div>
            <div className='products'>
                <p>PUFI RAIN</p>
                <p>PUFI PUFF</p>
                <p>PUFI CART</p>
                <p>PUFI NAP</p>
            </div>
            <div className='info-contacto'>
                <p>CONTACTO</p>
                <p>AYUDAF</p>
                <p>CÓMO PAGAR</p>
                <p>TÉRMINOS & CONDICIONES</p>
            </div>
            <div className='segura'>
                <p>COMPRA 100% SEGURA</p>
                <img src={secure}alt="" />
            </div>
            <div className='redes-sociales'>
                <p>SIGUENOS EN </p>
            </div>
          
        </div>
    );
};

export default Footer;