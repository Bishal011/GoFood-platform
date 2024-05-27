import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyOrder() {

  const [orderData,setOrderData] = useState([]);



const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/myorderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      if (response.ok) {
        console.log("Order data fetched successfully.");
            const data = await response.json();
            console.log("Data received from server:", data);
            setOrderData(data.orderData);
      } else {
        console.error("Error fetching order data");
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

useEffect(() => {
    fetchMyOrder()
}, [])
console.log("Order data in state:", orderData);
  return (

    <>

      <div>
      
         <Navbar />
      
      </div>

      <div className='container'>
     
                <div className='row'>

                {orderData.length > 0 ? (
            orderData.map((order, orderIndex) => (
              <div key={orderIndex}>
                {order ? (
                  order.map((item, itemIndex) => {
                    // let data = null;

                    return (
                      <div key={itemIndex}>
                        {item.order_date ? (
                          <div className='m-auto mt-5'>
                            {/* if order date exists then display date */}
                            { item.order_date}
                            <hr />
                          </div>
                        ) : (
                          <div className='col-12 col-md-6 col-lg-3'>
                            <div className='card mt-3' style={{ width: '16rem', maxHeight: '360px' }}>
                              <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <div className='container w-100 p-0' style={{ height: '38px' }}>
                                  <span className='m-1'>{item.quantity}</span>
                                  <span className='m-1'>{item.size}</span>
                                  <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                    {item.price !== undefined ? `Rs ${item.price}/-` : ''}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  ''
                )}
              </div>
            ))
          ) : (
            <p>No order data available</p>
          )}

                  
                </div>

              </div>
      
      
      <div>
      
        <Footer />
      
      </div>

    </>

    
  )
}
