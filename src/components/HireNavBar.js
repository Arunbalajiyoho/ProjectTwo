import React from 'react'
import hireimage from "../images/hire-header.jpg"
import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoMdNotifications} from "react-icons/io";
import hirefree from "../images/hire-free.png";



const HireNavBar = () => {
  return (
    <div>

      <Image src={hireimage} style={{width:"100%",height:330}} /> 
     
      <div style={{backgroundColor:"rgba(0, 0, 0, 0.4)",width:"100%",height:330,position:"absolute",top:0,alignItems:"center",display:"flex",justifyContent:"center"}}>
     <div>
      <h1 style={{fontSize:80,color:"white",marginLeft:28}}>Hire Creatives</h1>
      <p style={{fontSize:25,color:"white",fontWeight:"bold"}} >Find the perfect freelancer for your next project</p>
      </div>
      
    </div>


    <Navbar expand="lg" className=" bg-transparent border border-dark "style={{position:'absolute',top:0,width:"100%"}}>
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bold fs-4    text-white'>Behance</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-bold  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>ForYou</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Discover</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Hire</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Assets</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Job</Nav.Link>
            
          </Nav>
            <Form>
            <Form.Control  type="search" placeholder="Search" className="me-2 border border-dark "  aria-label="Search" style={{width:480,borderRadius:20}} />
          </Form>


          <Nav className="mt-auto align-items-center">
            <Nav.Link href="#home"> <IoMdNotifications style={{fontSize:25,color:"white"}}/> </Nav.Link>
            <Nav.Link href="#link">  <Button style={{borderRadius:20}} variant="light">Log In</Button></Nav.Link>
            <Nav.Link href="#link"> <Button  style={{borderRadius:20}} variant="primary">Sign Up</Button> </Nav.Link>

            <Nav.Link href="#link"> <Button  style={{borderRadius:20}} variant="light"> <Image style={{width:20, height:20}} src={hirefree}  />  Free Trial</Button>{' '} </Nav.Link>
          
            <Nav.Link href="#link" className='text-white'> Adobe </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default HireNavBar
