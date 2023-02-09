import './styles/App.scss';
import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import ProductsContainer from './components/ProductsContainer';
import Instagram from './components/Instagram';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>    
      <Routes>   
        <Route exact path="/" element={<><Nav/> <Home/> 
        <ProductsContainer/> <Instagram/> <Newsletter/>
        <Footer/>
        </>} /> 
   
      </Routes>  
    </React.Fragment>
  );
}

export default App;
