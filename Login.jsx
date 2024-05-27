import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function Login() {

  let navigate = useNavigate()
  // inside useState parameters are default
  const [credentials, setcredentials] = useState({
  
    email : "",
    password : ""
  });

    const handleSubmit = async(e) => {

      // preventDefault()=>synthetic event===e is a parameter
        e.preventDefault();

        // url is https rqst first parameter and 2nd parameter is the body that is data
        // the response should wait while processing
        const response = await fetch("http://localhost:8000/api/loginuser", {
            // now send the below data when user hits the above link
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },

            // send the json object data to Ui as a string
            body:JSON.stringify({
             
              email : credentials.email,
              password: credentials.password
            })

        });

        const json = await response.json();
        console.log(json);

        // if the success value is false in backend
       
        if(!json.success){
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter valid credentials!',
            footer: '<a href="/Login">Go to Login Page</a>'
          })
        }
        if(json.success) {
          localStorage.setItem("userEmail", credentials.email);
          localStorage.setItem("authToken", json.authToken);
          console.log(localStorage.getItem("authToken"));
          Swal.fire(
              'Good job!',
              'You are Correct',
              'success'
          )
          navigate("/");
        }
    }

const onChange = (event) =>{
  // using setcredentials i can chage the value of a state 
  // event.target.value wii chage the value of a default event.target.name
  setcredentials({...credentials,[event.target.name]: event.target.value})
}

  return (
    <>

<div className="container" style={{ backgroundColor: "deeppink",
  height: "500px",
  width: "600px",
  color: "white",
  border: "3px solid red",
  marginTop: "5%",
  padding: "2%"}}>
    
    <form onSubmit={handleSubmit}>

      {/* while I am going to write anything in the field without onChange event I can't able to write as the values as the values are static*/}

  <div className=" mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} placeholder='Enter email' id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} placeholder='Enter Password'  id="exampleInputPassword1" />
  </div>



  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to = "/SignUp" className="m-3 btn btn-danger">I am a new User</Link>
 
</form>

</div>



    </>
  )
}
