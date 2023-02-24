import React from 'react'
function Footer() {
  return (
    <div>
        <>
        <footer style={{backgroundColor:"#FF5183",height:"400px"}}>
    <div class="container py-4">
      <div class="row">
        <div   class="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center ">
        <img style={{width:"200px"}} src='https://i.postimg.cc/SRzS57hr/Dasher-and-Crank-logo-white.png'/>

          <p style={{fontFamily:"-moz-initial",fontSize:"30px"}} >
          Best Ice Cream in Florida <br></br>
        <span style={{fontFamily:"cursive",fontSize:"20px"}}>Follow Us!</span>
          </p>
         
           <a style={{fontSize:"30px",marginRight:'30px'}} href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a>
           <a style={{fontSize:"30px"}}href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a>
       
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4 style={{fontFamily:"cursive"}} class="text-uppercase font-weight-bold mb-4">Work Time</h4>
         <p style={{fontFamily:"intial",marginTop:"-20px"}}>-- 12PM TO 11PM // MONDAY--THURSDAY
<br></br>
-- 12PM TO 12PM // FRIDAY--SUNDAY
         </p>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h4 style={{fontFamily:"cursive"}} >Company</h4>
          <ul class="list-unstyled mb-3">
            <li class="mb-2"><a href="/" style={{textDecoration:"none"}}  class="text-muted">HOME</a></li>
            <li class="mb-2"><a href="/story" style={{textDecoration:"none"}}  class="text-muted">ABOUT</a></li>
            <li class="mb-2"><a href="#" style={{textDecoration:"none"}}  class="text-muted">STORE</a></li>
            <li class="mb-2"><a href="/exclusive" style={{textDecoration:"none"}}  class="text-muted">Our Blog</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h2 style={{fontFamily:"cursive"}}>Newsletter</h2>
          <h6 style={{fontFamily:"cursive"}} >Stay up to date with our latest news, receive exclusive deals, and more.</h6>
          <div>
            <div class="input-group">
                <input style={{width:"460px",borderRadius:"7px",height:'50px',backgroundColor:"#FF5183",color:"white",border:"2px white solid"}} placeholder="Enter your Feedback"></input>
              <div class="input-group-append">
                <button  type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark py-2">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2019 DasherCrank All rights reserved.</p>
      </div>
    </div>
  </footer>
        </>
    </div>
  )
}

export default Footer