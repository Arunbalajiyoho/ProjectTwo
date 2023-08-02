import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import {IoIosNotifications} from "react-icons/io"

function NavScrollExample() {
  return (
    <section>
    <Navbar expand="lg" className=" shadow fixed-top bg-light">
      <Container fluid>
      <Nav.Link href="#action2" className='mb-2' style={{fontSize:17,fontWeight:"800",opacity:0.8}}>Behance</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2" className='my-2 mx-2'  style={{fontSize:15,fontWeight:"700",opacity:0.6}}>For You</Nav.Link>
            <Nav.Link href="#action2" className='my-2 mx-2' style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Discover</Nav.Link>
            <Nav.Link href="#action2" className='my-2 mx-2' style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Hire</Nav.Link>
            <Nav.Link href="#action2" className='my-2 mx-2' style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Assets</Nav.Link>
            <Nav.Link href="#action2" className='my-2 mx-2' style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Jobs</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
                className='my-2'
              style={{width:350,
            borderRadius:20,
            height:40,
            fontSize:15,
            fontWeight:"700"
            }}
            />
             <Nav.Link href="#action2" style={{fontSize:20}}><IoIosNotifications/></Nav.Link>
             <Nav.Link>  <Button variant="outline-primary" style={{borderRadius:16,width:90,display:"flex",justifyContent:'center',height:35,alignItems:'center',fontSize:14,fontWeight:'700'}}>Log in</Button></Nav.Link>
             <Nav.Link> <Button  variant="primary"  style={{borderRadius:16,width:90,display:"flex",justifyContent:'center',height:35,alignItems:'center' ,fontSize:14 ,fontWeight:'700'}}>Sign Up</Button></Nav.Link>
            
            
          </Form>
          <Dropdown>
      <Dropdown.Toggle className=' mt-1' style={{backgroundColor:"white",borderColor:"white",color:"black" }}>
      <span style={{paddingRight:4}}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/1200px-Adobe_Creative_Cloud_rainbow_icon.svg.png'  style={{height:20,fontWeight:"700"}}/></span><span style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Free Trail</span>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:400}}>
        <Dropdown.Item>Created For Creative</Dropdown.Item>
        <Dropdown.Item>Apps, fonts, tutorials, stock images, and more for your creative journey.</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className=' mt-1 ' style={{backgroundColor:"white",borderColor:"white",color:"black"}}>
     <span style={{paddingRight:4}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgW0OImjC85kqcX8qRzys75k6loI-lpDLxdmie7ic6A&s' style={{height:20}}/></span> <span style={{fontSize:15,fontWeight:"700",opacity:0.6}}>Adobe</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default NavScrollExample;