import './styles/App.scss';
import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import ProductCart from './components/ProductCart';

function App() {
  return (
    <React.Fragment>    
      <Routes>   
        <Route exact path="/" element={<><Nav/> <Home/> <ProductCart/></>} /> 
   
   
    
      </Routes>  
    </React.Fragment>
  );
}

export default App;
