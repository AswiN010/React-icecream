import React from 'react'
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Home from "./Home"
import './usabout.css'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("uname", name);

      localStorage.setItem("KEmail", JSON.stringify(email));
      localStorage.setItem(
        "KPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }


  return (
    <div>

      <div className='f' >
        <img style={{ width: "100%" }} src='./don1.jpg' />
        <img style={{ width: "100%" }} src='./nuevas-olas.png' />

        <div className='Container' style={{ height: 600, padding: 60,width:"80%",marginLeft:"10%",border:"30px white solid", backgroundColor:"black",borderRadius:"50px" }}>
          {" "}
          {login ? (
            <form className='lion' onSubmit={handleFormSubmit} style={{ border: '1px  black solid', padding: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', borderRadius: "20px" }}  >
              <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Registeration Form</h1>
              <br></br>
              <div className="form-group">
                <input
                  style={{ background: "transparent",marginBottom:"10px" }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  style={{ background: "transparent",marginBottom:"10px" }}
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  style={{ background: "transparent",marginBottom:"10px" }}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  style={{ background: "transparent"}}
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>


              <br></br>
              <button style={{ borderRadius: "200px", width: "1px", backgroundColor: "transparent", marginLeft: "10px", textDecorationStyle: "none" ,border:'2px black solid'}} >
                <div class="container1 ">
                  <div class="btn"><a>REGISTER</a></div>
                </div>
              </button>
              <p onClick={handleClick} className="forgot-password text-right">


              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Alert color="primary" variant="success" style={{ backgroundColor: "transparent", border: "none",marginBottom:"70px",width:"50%",backgroundColor:"black" }}>
         <div>  <img className="text-center" style={{width:"50%"}} src='https://i.postimg.cc/SRzS57hr/Dasher-and-Crank-logo-white.png'/>
      

            <p > The world of Ice CreaM</p> <br></br>
            </div>

            <button style={{borderRadius:"200px",width:"1px", backgroundColor: "transparent",marginLeft:"10px",textDecorationStyle:"none" }} >
                                            <div class="container1 ">
                                                <div class="btn"><a href="/">HOME</a></div>
                                            </div>
                                        </button>

          </Alert>
          )}
        </div>

      </div>

    </div>
  )
}

export default Register