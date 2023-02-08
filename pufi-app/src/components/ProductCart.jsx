import React from 'react';

const ProductCart=()=>{
    return(
        <div className='productcart-container'>
           <div className='image-container'>
            <button className='shop'>SHOP</button>
           </div>
           <div className='info-container'>
            <img className='imagen-info' src="https://st.depositphotos.com/1005549/2927/v/450/depositphotos_29277447-stock-illustration-red-umbrella-on-white-background.jpg" alt="" />
            <h2>Pufi RAIN</h2>
            <hr />
            <p>Descripcion del producto. este es un texto simulado</p>
            <button className='ver-mas'> {'>'} VER MAS </button>
           </div>
        </div>
    );
};

export default ProductCart;