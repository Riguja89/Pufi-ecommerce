import React from "react";
import puff from "../images/puff.svg"
import nap from "../images/nap.svg"
import cart from "../images/cart.svg"
import rain from "../images/rain.svg"
import pufi from "../images/pufi.svg"
const Nav=()=>{

    return(
        <div className="navContainer">
            <div className="titleContainer">
            <img src={pufi} className="logo" alt="" />
            </div>
            <nav className="menu">
            <ul>
                <li>
                <img src={puff} className="icono" alt="" />
                <a href="#">PUFI PUFF</a>
                </li>
                
                <li>
                <img src={rain} className="icono" alt="" />
                <a href="#">PUFI RAIN</a>
                
                </li>
                
                <li>
                <img src={cart} className="icono" alt="" />
                <a href="#">PUFI CART</a>
                
                </li>
                <li className="final">
                <img src={nap} className="icono" alt="" />
                <a href="#">PUFI NAP </a></li>
            </ul>
            </nav>
            <div className="submenu">
                <nav>
                <ul className="sublist">
                <li><a href="#">MI CUENTA ˅ </a></li>
                <li className="final"><a href="#">MI COMPRA</a></li>
            </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav