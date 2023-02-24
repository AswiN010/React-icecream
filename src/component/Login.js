import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Store from "./Store";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './usabout.css'





function Login() {

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [store, setStore] = useState(true);

  function handleLogin(e) {

    e.preventDefault();
    let pass = localStorage
      .getItem("KPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("KEmail").replace(/"/g, "");


    if (!emaillog || !passwordlog) {
      setFlag(true);

      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {


      setStore(!store);
      setFlag(false);
    }
  }

  return (




    <div className="f">
    <img style={{width:"100%"}} src='./don1.jpg'/>
    <img style={{width:"100%"}} src='./nuevas-olas.png'/>

      <div style={{ height: 600, padding: 60,width:"80%",marginLeft:"10%",border:"30px white solid", backgroundColor:"black",borderRadius:"50px" }}>
        {store ? (

          <Form className="lion" style={{borderRadius:"30px", width: "75%", border: '2px solid black ', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;' }} onSubmit={handleLogin}>
            <h1>LOGIN</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={(event) => setPasswordlog(event.target.value)} />
            </Form.Group>



            <button style={{borderRadius:"200px", backgroundColor: "transparent",width:'1px',textDecorationStyle:"none",border:"2px black solid" }} >
                                            <div class="container1 ">
                                                <div class="btn"><a>LOGIN</a></div>
                                            </div>
                                        </button>

            <br></br>
            <br></br>
            <p  > Don't Have An Account? <a style={{width:'140px',backgroundColor:"green",borderRadius:"10px",textDecoration:"none",fontSize:"30px"}} href="/register">&nbsp;&nbsp; Register&nbsp;&nbsp; </a></p>


            {flag && (
              <Alert color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
          </Form>





        ) : (
          
          <Alert color="primary" variant="success" style={{ backgroundColor: "transparent", border: "none",marginBottom:"70px",width:"50%" }}>
            <img className="text-center" style={{width:"290px"}} src='https://i.postimg.cc/SRzS57hr/Dasher-and-Crank-logo-white.png'/>
      

            <p className="p2"> WELCOME TO OUR STORE </p> <br></br>

            <button style={{borderRadius:"200px",width:"1px", backgroundColor: "transparent",marginLeft:"10px",textDecorationStyle:"none" }} >
                                            <div class="container1 ">
                                                <div class="btn"><a href="/store">SHOP</a></div>
                                            </div>
                                        </button>

          </Alert>

        )}
      </div>
      
    </div>
  );
}

export default Login;