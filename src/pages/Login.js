import React from 'react'
import logo from '../images/OIP-removebg-preview (1.png'
import { Container, FormControl, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { GrContact } from "react-icons/gr";



const Login = () => {
  return (
    <div className="login backgroundimage align-items-center mx-auto" >
      <Container style={{ paddingTop: 70, marginBottom: 70 }}>
        <Row lg={2} xs={1} md={1}>

          <Col className='my-auto'>

            <div class="behance align-items-center text-center my-auto  d-flex justify-content-center">
              <img src={logo} width={40} height={35} ></img>
              <h3 className="ms-3">Behance</h3>

            </div>
          </Col>

          <Col className='bg'>


            <form class="main mx-auto p-5 form" style={{ background: "white", height: 600, width: "75%" }}>
              <div className="keep jusfity-content-center align-items-center mx-auto d-flex">

              </div>
              <h2>Sign in</h2>
              <p class="New User">New user? &nbsp;
                <a class="signup" href='#' id="new_user_sign up" style={{ textDecoration: "None" }}>Create an account</a>
              </p>

              <div classname="Text-email card" >
                <label htmlFor="email">Email address</label>
                <input type="email" className='form-control submit' />
              </div>
              <br></br>
              <div className='sub px-8  d-flex justify-content-end m-auto pt-2 '>
                <button data-id="EmailPage-ContinueButton" class="SpinnerButton" style={{ borderRadius: 800, borderColor: "blue", backgroundColor: "blue" }}>
                  <span class="Button-label" style={{ color: "white" }}>Continue</span></button>
              </div>

              <div className='d-flex align-items-center my-3' >
                <div style={{ height: 0.5, background: "black", width: "50%" }}>
                </div>
                <p style={{ textAlign: "center" }} className='mt-2'>Or</p>
                <div style={{ height: 0.5, background: "black", width: "50%" }}>
                </div>
              </div>

              <div className='d-flex my-3' style={{ justifyContent: "center" }}>
                <button className="d-flex" style={{ width: 300, borderRadius: 20, justifyContent: "center", height: 40 }}>
                  <img src="https://granthamcaravans.co.uk/wp-content/uploads/2020/10/google-logo.png" style={{ width: 25, height: 30 }} />
                  <p className='mx-3'>Continue with Google</p>
                </button>
              </div>

              <div className='d-flex my-3' style={{ justifyContent: "center" }}>
                <button className="d-flex" style={{ width: 300, borderRadius: 20, justifyContent: "center", height: 40 }}>
                  <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" style={{ width: 30, height: 30 }} />
                  <p className='mx-3'>Continue with Apple</p>
                </button>
              </div>


              <div className='d-flex my-3' style={{ justifyContent: "center" }}>

                <button className="d-flex" style={{ width: 300, borderRadius: 20, justifyContent: "center", height: 40 }}>
                  <img src="https://technofizi.net/wp-content/uploads/2016/02/apple-logo.png" style={{ width: 25, height: 30 }} />
                  <p className='mx-2'>Continue with Apple</p>
                </button>
              </div>


              <div style={{ marginTop: 30 }}>
                <a className="get" style={{ color: "blue", fontSize: 13, textDecoration: "None" }} href="#">Get help signing in</a>
              </div>


            </form>

              <div class="rounded-circle" style={{marginLeft:580, borderRadius:50}}>
                <button id="Contact us" style={{borderRadius:50 ,width:45,height:45}}>
                 <GrContact style={{fontSize:20}}/>
                 </button>
              </div>
              

          </Col>
        </Row>
      </Container>
    </div>



  )
}

export default Login