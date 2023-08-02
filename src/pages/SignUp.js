import React from 'react'
import { Container, FormControl, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import logo from '../images/OIP-removebg-preview (1.png'

const SignUp = () => {
  return (
    <div className="Signup back" >
      
      <Container style={{ paddingTop: 70, marginBottom: 70 }}>
        <Row>

          <Col className='my-8'>
            <div class="behance  d-flex justify-content-center" style={{marginTop:300}}>
              <img src={logo} width={40} height={35} ></img>
              <h3 className="ms-3">Behance</h3>
            </div>
          </Col>

          <Col >
            <form class="main mx-auto p-5 form" style={{ background: "white", height: 600, width: "75%" }}>
              <div className="keep jusfity-content-center align-items-center mx-auto d-flex">

              </div>
              <p className="co" style={{color:"gray",fontSize:"3",fontFamily:"sans-serif"}}>Step 1 to 2</p>
              <h2 classname='create' style={{fontFamily:"inherit",fontSize:"5"}}>Create an account </h2>

                <div className="d-flex gap-3">
              <div className='d-flex my-3'>
                <button className="d-flex rounded-pill" style={{ borderRadius: 30, backgroundColor:'white',borderColor:"gray"}}>
                  <img src="https://granthamcaravans.co.uk/wp-content/uploads/2020/10/google-logo.png" style={{width: 37, height:45}} />
                </button>
              </div>

              <div className='d-flex my-3'>
                <button className="d-flex rounded-pill" style={{ borderRadius: 30, backgroundColor:'white',borderColor:"gray"}}>
                  <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" style={{width: 37, height:45 }} />
                </button>
              </div>

              <div className='d-flex my-3'>
                <button className="d-flex rounded-pill" style={{ borderRadius: 40, backgroundColor:'white',borderColor:"gray"}}>
                  <img src="https://technofizi.net/wp-content/uploads/2016/02/apple-logo.png" style={{width: 32, height:40 }} />
                </button>
              </div>
              </div>

              <div className='d-flex align-items-center my-3' >
                <div style={{ height: 0.5, background: "lightgray", width: "50%" }}>
                </div>
                <p style={{ textAlign: "center" }} className='mt-2'>Or</p>
                <div style={{ height: 0.5, background: "lightgray", width: "50%" }}>
                </div>
              </div>
              
              <div classname="Text-email card ">
                <h6 htmlFor="email">Sign up with email</h6>
                <p className='sigin'>Already have an account?
                <a href='#' style={{ textDecoration: "None"}}>Sign in</a> </p>            
                </div>

               <div classname="Text-email"  >
                <label htmlFor="email">Email address</label>
                <input type="email" className='form-control submit' />
              </div>
              
              <div classname="Text-email card" >
                <label htmlFor="email">Password</label>
                <input type="email" className='form-control submit' />
              </div>

              <div className='sub px-8  d-flex justify-content-end m-auto pt-2 '>
                <button data-id="EmailPage-ContinueButton" class="SpinnerButton" style={{borderRadius: 800, borderColor: "blue", backgroundColor: "blue" }}>
                  <span class="Button-label" style={{color: "white"}}>Continue</span></button>
              </div>

              
              

            </form>
            
          </Col>



          
          </Row>
          </Container>
          </div>
  )
}

export default SignUp