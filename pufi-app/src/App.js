import './styles/App.scss';
import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import ProductsContainer from './components/ProductsContainer';
import Instagram from './components/Instagram';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Compras from './components/Compras';

function App() {
  return (
    <React.Fragment>    
      <Routes>   
        <Route exact path="/" element={<><Nav/> <Home/> 
        <ProductsContainer/> <Instagram/> <Newsletter/>
        <Footer/>
        </>} /> 

        <Route exact path="/productos/:productId" element={<ProductDetail/>} />
        <Route exact path="/miscompras" element={<Compras/>} />
   
      </Routes>  
    </React.Fragment>
  );
}

export default App;
