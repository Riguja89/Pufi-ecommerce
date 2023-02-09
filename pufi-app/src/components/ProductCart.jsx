import React from 'react';

const ProductCart=({id, name, description, image, imagefondo})=>{
    return(
        <div className='productcart-container'>
            {id%2===0?<>
            <div className='info-container'>
            <img className='imagen-info' height="150px" src={image} alt="" />
            <h2>{name}</h2>
            <hr />
            <p>{description}</p>
            <button className='ver-mas'> {'>'} VER MAS </button>
           </div>
           <div className='image-container'
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+`${imagefondo}`+")"}}
            >
            <button className='shop'>SHOP</button>
            </div>
            </>:
            <>  
            <div className='image-container'
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+`${imagefondo}`+")"}}
            >
            <button className='shop'>SHOP</button>
            </div>
            <div className='info-container'>
            <img className='imagen-info' height="150px" src={image} alt="" />
            <h2>{name}</h2>
            <hr />
            <p>{description}</p>
            <button className='ver-mas'> {'>'} VER MAS </button>
           </div>
           </>}
         
        </div>
    );
};

export default ProductCart;