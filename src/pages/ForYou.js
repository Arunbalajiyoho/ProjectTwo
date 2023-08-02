import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { IoMdNotifications } from "react-icons/io"
import { Image } from 'react-bootstrap';
import icon from "../images/icon.png"
import { NavDropdown } from 'react-bootstrap';
import { SiAdobe } from "react-icons/si"
import Form from 'react-bootstrap/Form';
import { BsSearch } from "react-icons/bs"
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../images/img.jpg"
import img1 from "../images/img1.png"
import img2 from "../images/img2.jpg"
import Card from 'react-bootstrap/Card';
import new3 from '../images/new3.jpg'
import new1 from '../images/new1.jpg'
import new2 from '../images/new2.jpg'
import ph from '../images/ph.jpg'
import ph1 from '../images/ph1.jpg'
import ph2 from '../images/ph2.jpg'
import ids from '../images/ids.jpg'
import ids1 from '../images/ids1.jpg'
import ids2 from '../images/ids2.jpg'
import ld from '../images/ld.jpg'
import ld1 from '../images/ld1.jpg'
import ld2 from '../images/ld2.png'
import sa from '../images/sa.jpg'
import sa1 from '../images/sa1.jpg'
import sa2 from '../images/sa2.jpg'
import ui from '../images/ui.png'
import ui1 from '../images/ui1.png'
import ui2 from '../images/ui2.png'
import tp from '../images/tp.png'
import tp1 from '../images/tp1.png'
import tp2 from '../images/tp2.png'
import lgo from '../images/lgo.png'
import lgo1 from '../images/lgo1.jpg'
import lgo2 from '../images/lgo2.jpg'
import pj from '../images/pj.jpg'
import pj1 from '../images/pj1.jpg'
import pj2 from '../images/pj2.jpg'
import ida from '../images/ida.jpg'
import ida1 from '../images/ida1.jpg'
import ida2 from '../images/ida2.png'
import ar from '../images/ar.png'
import ar1 from '../images/ar1.jpg'
import ar2 from '../images/ar2.png'
import fh from '../images/fh.jpg'
import fh1 from '../images/fh1.jpg'
import fh2 from '../images/fh2.jpg'
import fm from '../images/fm.jpg'
import fm1 from '../images/fm1.png'
import fm2 from '../images/fm2.png'
import gm from '../images/gm.png'
import gm1 from '../images/gm1.png'
import gm2 from '../images/gm2.png'
import ils from '../images/ils.jpg'
import ils1 from '../images/ils1.jpg'
import ils2 from '../images/ils2.jpg'
import ag from '../images/ag.png'
import ag1 from '../images/ag1.jpg'
import ag2 from '../images/ag2.jpg'
import rt from '../images/rt.jpg'
import rt1 from '../images/rt1.jpg'
import rt2 from '../images/rt2.jpg'



const ForYou = () => {

  const [show, setShow] = useState(false)

  const showHover = () => {
    setShow(true)
  }
  const notShowHover = () => {
    setShow(false)
  }



  const [show1, setShow1] = useState(false)

  const showHover1 = () => {
    setShow1(true)
  }
  const notShowHover1 = () => {
    setShow1(false)
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white shadow">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", fontSize: 30 }}>Behance</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">For You</Nav.Link>
              <Nav.Link href="#link">Discover</Nav.Link>
              <Nav.Link href="#link">Hire</Nav.Link>
              <Nav.Link href="#link">Assets</Nav.Link>
              <Nav.Link href="#link">Jobs</Nav.Link>



              <Form.Control
                type="text"

                placeholder="Search .."
                className=" mr-sm-2 my-auto "
                style={{ width: 650, height: 35, borderRadius: 20, backgroundColor: "lightgrey" }}



              />


              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>

            <Nav className="mt-auto align-items-center">
              <Nav.Link href="#home"><IoMdNotifications style={{ fontSize: 20, color: "black" }} /></Nav.Link>
              <Nav.Link href="#link">  <Button style={{ borderRadius: 20 }} variant="light">Log In</Button>{' '}</Nav.Link>
              <Nav.Link href="#link">  <Button style={{ borderRadius: 20 }} variant="primary">Sign Up</Button>{' '}</Nav.Link>
              <div>
                |
              </div>
              <Nav.Link href="#link"><Button style={{ borderRadius: 20 }} variant="light">   <img src={icon} style={{ width: 20, height: 20 }} /> Free Trial</Button>{' '}</Nav.Link>
              {/* <Nav.Link href="#link"> Adobe</Nav.Link> */}

              <SiAdobe />
              <NavDropdown title="Adobe" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Hire</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
      {/* <hr/> */}
      <br />

      {/* <div className='border rounded d-flex  ' >
    
      <div style={{width:"50%"}}  >
       
      <Form.Control
              type="text"
              
              placeholder="Search the creative world at work"
              className=" mr-sm-2 border-0"
              style={{fontSize:25}} 
              
            
            />
      </div>

      <div className='d-flex my-auto mx-auto gap-3 bl '>
        <div className='bg-dark text-white rounded-pill px-2 py-2  my-auto ms-2'>
        <h6  className='my-auto px-1' >Projects</h6>
        </div>
        <h6 className='my-auto'>Assets</h6>
        <h6 className='my-auto'>Images</h6>
        <h6 className='my-auto'>Prototype</h6>
        <h6 className='my-auto'> Streams</h6>
        <h6 className='my-auto'>People</h6>
        <h6 className='my-auto'>Moodboards</h6>
  
      </div>
    </div> */}

      <div className='text-center'>
        <h1 style={{ fontWeight: "bold", fontSize: 50 }}>Find Creative Work You Leave</h1>
        <h5>Start your feed by selecting a few  categories below</h5>
      </div>
      <br />

      <div>
        <Container>
          <Row lg={3} className='mx-auto  '>

            <Col>
              <Card style={{
                width: 380, padding: 10
              }} onMouseEnter={showHover} onMouseLeave={notShowHover}>
                <div className='d-flex'>
                  <Image src={img} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={img1} style={{ width: 100, height: 105 }} />
                    <Image src={img2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>

                {
                  show && (

                    <div style={{ width: 380, padding: 10, position: "absolute", top: 0, paddingLeft: 0 }}>


                      <div className='d-flex' style={{}}>


                        <div style={{ height: 220, width: 250, background: 'rgba(0,0,0,0.3)' }}>
                        </div>
                        <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                          <div style={{ width: 100, height: 105, background: 'rgba(0,0,0,0.3)' }} />
                          <div style={{ width: 100, height: 105, marginTop: 8, background: 'rgba(0,0,0,0.3)' }} />
                        </div>
                      </div>
                    </div>
                  )
                }
                <h5 className='my-2'>Graphic Design</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }} onMouseEnter={showHover1} onMouseLeave={notShowHover1} >
                <div className='d-flex'>
                  <Image src={new3} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={new1} style={{ width: 100, height: 105 }} />
                    <Image src={new2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>


                {
                  show1 && (

                    <div style={{ width: 380, padding: 10, position: "absolute", top: 0, paddingLeft: 0 }}>


                      <div className='d-flex' style={{}}>


                        <div style={{ height: 220, width: 250, background: 'rgba(0,0,0,0.3)' }}>
                        </div>
                        <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                          <div style={{ width: 100, height: 105, background: 'rgba(0,0,0,0.3)' }} />
                          <div style={{ width: 100, height: 105, marginTop: 8, background: 'rgba(0,0,0,0.3)' }} />
                        </div>
                      </div>
                    </div>
                  )
                }
                <h5 className='my-2'>Fine Arts</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ph} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ph1} style={{ width: 100, height: 105 }} />
                    <Image src={ph2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Photography</h5>

              </Card>
            </Col>



          </Row>
          <Row lg={3} className='mx-auto mt-3 '>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ids} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ids1} style={{ width: 100, height: 105 }} />
                    <Image src={ids2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Interior Design</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ld} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ld1} style={{ width: 100, height: 105 }} />
                    <Image src={ld2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Icon Design</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={sa} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={sa1} style={{ width: 100, height: 105 }} />
                    <Image src={sa2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Street Art</h5>

              </Card>
            </Col>



          </Row>
          <Row lg={3} className='mx-auto mt-4  '>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ui} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ui1} style={{ width: 100, height: 105 }} />
                    <Image src={ui2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>UI/UX</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={tp} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={tp1} style={{ width: 100, height: 105 }} />
                    <Image src={tp2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Typography</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={lgo} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={lgo1} style={{ width: 100, height: 105 }} />
                    <Image src={lgo2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Logo</h5>

              </Card>
            </Col>



          </Row>


          <Row lg={3} className='mx-auto mt-4  '>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={pj} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={pj1} style={{ width: 100, height: 105 }} />
                    <Image src={pj2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Photojournalism</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ida} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ida1} style={{ width: 100, height: 105 }} />
                    <Image src={ida2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Industrial Design</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ar} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ar1} style={{ width: 100, height: 105 }} />
                    <Image src={ar2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>AR/VR</h5>

              </Card>
            </Col>



          </Row>





          <Row lg={3} className='mx-auto mt-4  '>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={fh} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={fh1} style={{ width: 100, height: 105 }} />
                    <Image src={fh2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Fashion</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={fm} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={fm1} style={{ width: 100, height: 105 }} />
                    <Image src={fm2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Film</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={gm} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={gm1} style={{ width: 100, height: 105 }} />
                    <Image src={gm2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Gaming Design</h5>

              </Card>
            </Col>



          </Row>




          <Row lg={3} className='mx-auto mt-4  '>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ils} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ils1} style={{ width: 100, height: 105 }} />
                    <Image src={ils2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Illustration</h5>

              </Card>
            </Col>
            <Col>
              <Card style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={ag} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={ag1} style={{ width: 100, height: 105 }} />
                    <Image src={ag2} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Advertising </h5>

              </Card>
            </Col>
            <Col>
              <Card class style={{
                width: 380, padding: 10
              }}>
                <div className='d-flex'>
                  <Image src={rt2} style={{ width: 250, height: 220 }} />
                  <div className='' style={{ flex: 0, paddingLeft: 8 }}>

                    <Image src={rt} style={{ width: 100, height: 105 }} />
                    <Image src={rt1} style={{ width: 100, height: 105, marginTop: 8 }} />
                  </div>

                </div>
                <h5 className='my-2'>Retouching</h5>

              </Card>
            </Col>



          </Row>
        </Container>
      </div>



    </div>
  )
}

export default ForYou