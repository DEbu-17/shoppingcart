import ShopApi from "./ShopApi";
import "../style.css"
import { Route,Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Cart from "./Cart";
import Price from "./Price";
import Checkout from "./CheckOut";
import { useState } from "react";

const App = () => {
   
const [clicked,setClicked] = useState(false);

    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ShopApi />} />
          <Route path="/cart" element={<Cart clicked={clicked}>
            <Price setClicked={setClicked}/>

            </Cart>} /> 
        </Routes>
      </div>
    );
      
}

export default App;