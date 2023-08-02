import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Navimage from "../images/assets-header.jpg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoMdNotificationsOutline} from "react-icons/io"
import {GrMail} from "react-icons/gr"
import {BiUser} from "react-icons/bi"

 

const assetTopnav = () => {
  return (
    <div>

    <Image src={Navimage} className='img-fluid' style={{width:"100%",height:350}} /> 
    <div style={{backgroundColor:"rgba(0, 0, 0, 0.4)",width:"100%",height:350,position:"absolute",top:0,display:'flex',justifyContent:"center",alignItems:"center" ,color:"white"}}>
        <div>
            <h1  style={{fontWeight:"bold",fontSize:50}}>Browse Assets</h1>
            <p style={{fontSize:20}} >find the perfect asset for your next project</p>
        </div>
  </div>



  <Navbar expand="lg" className=" bg-transparent "style={{position:'absolute',top:0,width:"100%"}}>
    <Container fluid>
      <Navbar.Brand href="#" className='fw-bold fs-5 text-white'>Behance</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 fw-bold  "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" className='text-white'>For You</Nav.Link>
          <Nav.Link href="#action2" className='text-white'>Discover</Nav.Link>
          <Nav.Link href="#action2" className='text-white'>Hire</Nav.Link>
          <Nav.Link href="#action2" className='text-white'>Assets</Nav.Link>
          <Nav.Link href="#action2" className='text-white'>Job</Nav.Link>

          <Form>
          <Form.Control  type="search" placeholder="Search" className="me-2 border border-dark "  aria-label="Search" style={{width:600,borderRadius:20,backgroundColor:"#838383"}} />
        </Form>
          
        </Nav>
          

        <Form>
          <Form.Control  type="search" placeholder="Share Your Work" className="me-2 border border-dark "  aria-label="Share Your Work" style={{width:170,borderRadius:20 ,textAlign:"center"}} />
        </Form>


        <Nav className="mt-auto align-items-center">
         
          <Nav.Link href="#link"> <GrMail style={{fontSize:25 ,color:"white"}}/>  </Nav.Link>
          
           <Nav.Link href="#home"> <IoMdNotificationsOutline style={{fontSize:25 ,color:"white"}}/> </Nav.Link>
          
          <Nav.Link href="#link"> <BiUser style={{fontSize:25 ,color:"white"}}/>{' '} </Nav.Link>

          
        
          <Nav.Link href="#link" className='text-white'> Adobe </Nav.Link>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  </div>
  )
}

export default assetTopnav