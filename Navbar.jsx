import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Badge} from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../pages/Cart';
import { useCart } from './ContextReducers';
export default function Navbar() {
  
  const [cartView, setCartView] = useState(false);

  let data = useCart();
  
  let navigate = useNavigate();

 


  const handleLogOut = () => {

    // logic for logout
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    // when removed we will navigate to login page
    navigate("/Login")

  }

  return (
    <div>
     

        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-lg p-2 mb-3 bg-promart rounded fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ cursor: "auto", fontWeight: "bold", fontSize: "24px", color: "#333" }}> Fooder</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 d-flex">
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                </li>
        
                {/* which is generated at the time of login */}
                {(localStorage.getItem("authToken")) ?
                          //  if condition is true then show me myorders
                         <li className="nav-item">
                         <Link className="nav-link active fs-5" aria-current="page" to="MyOrder">My Orders</Link>
                       </li>
                : "" 
                } 
        
                </ul>

                {/* Show appropriate buttons based on login status */}
                 {/* when authToken does'nt exist signup and login should show */}
        
                 {(!localStorage.getItem("authToken")) ?
        
                  <div className='d-flex'>
        
                       
                     <Link className="btn bg-white text-success mx-1" to="/SignUp" style={{fontWeight: "bold"}}>Sign Up</Link>
                        
                     <Link className="btn bg-white text-success mx-1" to="/Login"style={{fontWeight: "bold"}}>Sign In</Link>
                        
        
                  </div> : 
        
                <div>
        
                      {/* cart page */}
          
                    <div className='btn bg-white text-success mx-2'style={{fontWeight: "bold"}} onClick={() => {

                      setCartView(true);

                    }}> 
                    My Cart {" "}

                    {/* Badge  */}

                    <Badge pill bg="danger">

                      {/* show how many items stored in cart */}
                      {data.length}


                    </Badge>


                    </div>  

                    {   
                      cartView ? <Modal onClose ={()=> setCartView(false)} > 
                     <Cart ></Cart>
                      </Modal>
                      : ""
                    }
          
                    {/* when we are in home page we can go to logout  */}
                    <div className='btn bg-danger text-white mx-2' onClick={handleLogOut} style={{fontWeight: "bold"}}>  Logout </div>        
                
                </div>
        
              } 
        
             
            </div>
          </div>
        </nav>

    </div>
  )
}
