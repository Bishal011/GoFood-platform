import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import SignUp from "./pages/SignUp";
import { CartProvider } from "./components/ContextReducers";
import MyOrder from "./pages/MyOrder";
// import Cart from "./pages/Cart";
// import Modal from "./Modal";

// import items from "../foodData";
export default function AllRoutes() {



  return (
       
    // now when we call the dispatch it is univarsal
      <CartProvider>



            <Router>
                 <div>
                     <Routes>
                         <Route path="/" element={<Home/>}/>
                         <Route path="/Login" element={<Login/>}/>
                        
                         <Route path="/SignUp" element={<SignUp/>}/>
                         <Route path="/MyOrder" element={<MyOrder/>}/>
                         {/* <Route path="/Modal" element={<Modal/>}/> */}
                         {/* <Route path="/Cart" element={<Cart/>}/> */}
                         {/* <Route path="/foodData" element={<items/>}/> */}
                     </Routes>
                 </div>
            </Router>

      </CartProvider>
        
            
    
     
   
  )
}
