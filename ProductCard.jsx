import React, { useEffect, useRef, useState } from "react";

import { useDispatchCart, useCart } from "./ContextReducers";



import  { Modal }  from 'react-bootstrap';
export default function ProductCard(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const priceRef = useRef();

  let dispatch = useDispatchCart();
  let data = useCart();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  const handleAddToCart = async () => {

    let food = [];
    for(const item of data) {
      if(item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food);
    if(food !== []) {

      if(food.size === size) {

        await dispatch({type: "UPDATE", id: props.foodItem._id, price: finalPrice, quantity: quantity});
        return;

      }
      else if(food.size !== size) {

        await dispatch({type: "ADD", id:props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size});
        console.log(data);
        console.log("Size different so simply ADD one more to the list");
        return;

      }
      return;
    }

    await dispatch({type: "ADD", id:props.foodItem._id, name: props.foodItem.name, price: finalPrice, quantity: quantity, size: size, img: props.imgSrc});
    
  }
    let finalPrice = quantity * parseInt(options[size]);

    useEffect(() => {

      setSize(priceRef.current.value);

    },[])

  return (

    <div>

    

      <div className="container w-100">
       

        <div className="card mt-3 shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem", maxHeight: "360px"}}  >
          <img src={props.foodItem.img} className="card-img-top" style={{height: "120px", objectFit: "fill", cursor: "pointer"}} onClick={handleShow} alt="" />
          <div className="card-body">
            <h5 className="card-title" onClick={handleShow} style={{cursor: "pointer"}}>{props.foodItem.name}</h5>

       
            
              <select className="m-2  bg-success rounded" style={{cursor: "pointer"}} onChange={(e) => 

setQuantity(e.target.value)


}>

                {Array.from(Array(6), (e,i) => {

                  return (

                    <option key={i+1} value={i+1} >
                      {i+1}
                    </option>

                  )

                })}

              </select>

              <select className="m-2 h-100 bg-success rounded" ref={priceRef} style={{cursor: "pointer"}} onChange={(e) => 

                setSize(e.target.value)

              }>

                {priceOptions.map((data) => {

                  return (

                    <option key={data} value={data} >
                      {data}
                      </option>

                  )


                })}
                
              </select>

              <div className="flex-container">

        

              <div className="d-inline h-100 fs-5">
                TotalPrice : <b>₹{finalPrice}/-</b>
              </div>

            </div>

            <hr>
            </hr>

            <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>


          </div>
        </div>

        {/* pagination */}

       

           

    {/* modal */}

    <div >
         <div
       className="modal show" style={{ display: 'block', position: 'initial' }}>
       <Modal show = {show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title style={{color: "black"}}>{props.foodItem.name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <img src={props.foodItem.img} alt="error" style={{height:"400px", width: "600px" }} />
           <p style={{color: "black"}}>{props.des}</p>
         </Modal.Body>
         <Modal.Footer>
         <button type="button" className="btn btn-outline-danger" onClick={handleClose}>Close</button>
         </Modal.Footer>
       </Modal>
     </div>
       </div>

      
  </div>

  </div>

    );
  }
