import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
// import Carousel from "../components/Carousel";
// import foodItems from "../foodItems";
// import { Card } from "react-bootstrap";
// import { SelectItems } from '@mantine/core/lib/Select/SelectItems/SelectItems'
// import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
// import { IconSun, IconMoonStars } from '@tabler/icons-react';
export default function Home() {


  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:8000/api/foodData", {

        method: "POST",
        headers: {
          'content-type': 'application/json'
        }
        });

        response = await response.json();

        setFoodItem(response[0]);
        setFoodCat(response[1]);
        // console.log(response[0], response[1]);
  }
// when called for first time load we will give empty arr
  useEffect(() => {
    loadData()
  },[])

  //pagination functionality 
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2; // Number of items per page
  const totalPages = Math.ceil(foodItem.length / recordsPerPage);

  //  calculate items to display for current page

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const itemsToDisplay = foodItem.slice(firstIndex, lastIndex);
   
  // create pagination controls
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {

      setCurrentPage(page);

    }
   
  };
  
  const paginationControls = (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

  
  



  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>


      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        // override prev css pty !imp
        // style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          {/* put search bar inside carousel use z-index pty to display the search bar*/}
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search} onChange={(e) => {
                  setSearch(e.target.value)
                }}
               
              />
              <button
                className="btn btn-outline-success  text-white bg-danger"
                
                onClick={() => {
                  setSearch('')
                }}
              >
                x
              </button>



            </div>
          </div>

          <div className="carousel-item active">
            <img
              // src="https://source.unsplash.com/random/900*700/?burger"
               src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80"
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
            
          </div>
          <div className="carousel-item">
            <img
              // src="https://source.unsplash.com/random/900*700/?pizza"
              src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=2000"
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              // src="https://source.unsplash.com/random/900*700/?pastry"
              src="https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek="
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              // src="https://source.unsplash.com/random/900*700/?barbeque"
              src="https://img.freepik.com/premium-photo/meat-skewers-being-grilled-fire_81048-13451.jpg"
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              // src="https://source.unsplash.com/random/900*700/?momos"
               src="https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg" 
              className="d-block w-100"
              style={{ filter: "brightness(50%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

        {/* <Carousel /> */}
      </div>

      <div className="container">
         
         {

                // if category is not null
                foodCat !== []
                ? foodCat.map((data) => {

                     return (

                      <div className="row mb-3">

                          {/* i can't display obj directly */}
                         <div className="fs-3 m-3" key={data._id} style={{color: "black" }}>
                             { data.CategoryName }
                         </div>
  
                         <hr />

                         {/* show the data of all food items */}
                         { foodItem !== []
                         ? 
                          foodItem.filter((item) => (item.CategoryName  === data.CategoryName)  && (item.name.toLowerCase().includes(search.toLowerCase())))
                          .slice(firstIndex, lastIndex) // Apply pagination to the filtered items
                          .map(filterItems => {
                            
                            return (

                              <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">

                                 <ProductCard 

                                   foodItem = {filterItems}
                                 
                                //  foodName = {filterItems.name} 
                                 
                                  options = {filterItems.options[0]}
                                  
                                  // imgSrc = {filterItems.img}

                                  des = {filterItems. description}

                                  >

                                </ProductCard>
                              

                              </div>

                            )
                            

                          }

                         ) : <div>"No such data found"</div> 
                         }

                          

                         

                      </div>
   
                     )

                })

                //if category is null 
                : ""

         }

          {/* Render pagination controls only when there are more items */}
        {itemsToDisplay.length > 0 && (
          <div className="pagination-container">
            {paginationControls}
          </div>
        )}

         
           
      </div>

     
         
      

      <div>
        <Footer />
      </div>

    </div>
  );
}
