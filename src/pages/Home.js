import React, { useState } from "react";
import { Card, FormControl, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoIosNotifications } from "react-icons/io";
import { SiAdobe } from "react-icons/si";
import { LuSearch } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { VscColorMode } from "react-icons/vsc";
import { GrLocation } from "react-icons/gr";
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillPinMapFill } from "react-icons/bs";
import { MdSubscriptions } from "react-icons/md";
import { GiMoebiusTriangle } from "react-icons/gi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { AiFillEye } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import free from "../images/free.png";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white shadow">
        <Container fluid>
          <Navbar.Brand
            style={{ fontSize: 30, fontWeight: "bold" }}
            href="/"
          >
            Behance
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="foryou">For You</Nav.Link>
              <Nav.Link href="discover">Discover </Nav.Link>
              <Nav.Link href="hire">Hire </Nav.Link>
              <Nav.Link href="assets">Assests </Nav.Link>
              <Nav.Link href="jobs">Jobs </Nav.Link>
            </Nav>

            <Nav className="mt-auto align-items-center">
              <Nav.Link href="#home">
                {" "}
                <IoIosNotifications style={{ fontSize: 25 }} />{" "}
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Button style={{ borderRadius: 20 }} variant="light">
                  Log In
                </Button>{" "}
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Button style={{ borderRadius: 20 }} variant="primary">
                  Sign Up
                </Button>{" "}
              </Nav.Link>

              <Nav.Link href="#link">
                {" "}
                <Button style={{ borderRadius: 20 }} variant="light">
                  {" "}
                  <Image style={{ width: 20, height: 20 }} src={free} /> Free
                  Trial
                </Button>{" "}
              </Nav.Link>

              <SiAdobe />
              <NavDropdown title=" Adobe" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />

      <div className=" border rounded d-flex ">
        <LuSearch style={{ fontSize: 25 }} className="my-auto" />
        <div style={{ width: "50%" }}>
          <FormControl
            type="text"
            placeholder="Search the creative world at work"
            style={{ fontSize: 20, fontWeight: "bold" }}
            className="mr-sm-2 border-0"
          />
        </div>

        <div className="d-flex my-auto mx-auto gap-3 butt ">
          <div className="bg-dark text-white rounded-pill px-2 py-2 ms-3">
            <h6 className="my-auto px-2"> Projects</h6>
          </div>
          <h6 className="my-auto"> Assests</h6>
          <h6 className="my-auto"> Images</h6>
          <h6 className="my-auto"> Prototypes</h6>
          <h6 className="my-auto"> Streams</h6>
          <h6 className="my-auto"> People</h6>
          <h6 className="my-auto"> Moodboards</h6>
        </div>
      </div>

      <section>
        <div className="d-flex justify-content-between align-items-center">
          <div className="my-5">
            <Dropdown className="d-inline mx-2 ">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <GiMoebiusTriangle /> Creative Fields
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <BsTools /> Tools
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <VscColorMode /> Color
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <GrLocation /> Location
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <IoSchoolSharp /> Schools
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <BsFillPinMapFill /> Assets
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                <MdSubscriptions /> Subscriptions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <p> Sort </p>
            <Dropdown className="d-inline mx-2 " style={{ border: "0px" }}>
              <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                className="border border-secondary"
              >
                Recomended
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Curated</Dropdown.Item>
                <Dropdown.Item href="#">Most Appreciated</Dropdown.Item>
                <Dropdown.Item href="#">Most Viewed</Dropdown.Item>
                <Dropdown.Item href="#">Most Discussed</Dropdown.Item>
                <Dropdown.Item href="#">Most Recent</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card
                  className="border-0 relative"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d4e2fe175284359.Y3JvcCwyOTQ1LDIzMDQsNTc2LDA.jpg" />
                 {isHovering &&(

                  <div className="absolute   w-100 " style={{ top:0,position:"absolute",background:"rgba(0, 0, 0, 0.3)",height:290 }}>
                   <div className="d-flex justify-content-between">
                   <div className="d-flex bg-dark text-white w-25 rounded-pill align-items-center mt-2 ms-2 "> 
                   <div className="d-flex mx-auto align-items-center text-center gap-2" style={{height:40}}>
                   <AiFillFolderOpen className=" " /> <p style={{marginTop:12}}> Save </p> 
                   </div>

                    </div>
                    <div>
                      <img src="https://a5.behance.net/a5cbc1b200679d2c679721a6f349cd3e70a19961/img/galleries/icons/ribbons/1x/graphic-design.png"/>
                    </div>
                    </div>
                  </div>
                 )}
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>
                      {/* {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
            <h2>bobbyhadz.com</h2>
          </div> 
                       )} */}
                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d44549106242875.Y3JvcCw5MzcsNzMzLDIxNSw1Mw.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5e04c7171881597.Y3JvcCwxMzgwLDEwODAsMjU2LDA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d42737172884709.648b7338bb468.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="my-5">
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a7407c175225457.Y3JvcCwxNTY3LDEyMjUsMzA2LDM2NA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e57d60176007989.Y3JvcCwxNTUyLDEyMTQsMTM0LDA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cfd573110021307.Y3JvcCw4MzQsNjUyLDE2NywyMA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5edde6136712141.Y3JvcCwxMDIyLDc5OSwxNTksMzky.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="my-5">
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/dc7951176086461.Y3JvcCw0MzUzLDM0MDQsMCwyODY2.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fe10ae135204311.Y3JvcCwzMzAwLDI1ODEsMCwxMDIx.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d345e5157261203.Y3JvcCwzODM1LDMwMDAsMjEwNyww.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a5cde2174348143.Y3JvcCwxNDg0LDExNjAsMTYxLDU1MQ.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="my-5">
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ed4db3151406119.Y3JvcCwxNDAwLDEwOTUsMCw1NzE.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8f686e153252451.Y3JvcCwyODQyLDIyMjMsMTAxMyww.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c5ec95158732303.Y3JvcCw2MjUwLDQ4ODgsMCw2ODA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2c1244175241963.Y3JvcCwxMjczLDk5NiwzOTAsMA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="my-5">
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/80fb18101751979.Y3JvcCw4MDgsNjMyLDAsMA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ccbd31140252105.Y3JvcCwxNjE3LDEyNjQsMCww.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/34a628137996957.Y3JvcCwxMjg3LDEwMDYsMTAxLDczNg.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/22b1ce162801447.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="my-5">
        <div>
          <Container fluid>
            <Row>
              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3a41a2165204125.Y3JvcCwxMTM5LDg5MSwxMjksMA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/666d09168930753.Y3JvcCwxMTE0LDg3MiwzODAsMA.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/48e33e175297997.Y3JvcCw1MDAwLDM5MTAsMCw1NDQ.png" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={3}>
                <Card className="border-0">
                  <Image src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d8fee7137080127.Y3JvcCw3MzYsNTc2LDEyNyw3OA.jpg" />
                  <div>
                    <div className="d-flex justify-content-between">
                      <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                        HANSKER
                      </a>

                      <div className="d-flex">
                        <HiOutlineHandThumbUp
                          className="my-2"
                          style={{ width: 16, height: 16 }}
                        />{" "}
                        <p
                          className="ms-1 my-2"
                          style={{ fontSize: 12, marginLeft: 5 }}
                        >
                          {" "}
                          57{" "}
                        </p>
                        <AiFillEye
                          className="my-2 ms-2"
                          style={{ width: 16, height: 19 }}
                        />{" "}
                        <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                          540{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

        
        <div>
                       <a
                        href="https://pluralsight.com"
                        className="my-2"
                        style={{ fontSize: 15 }}
                      >
                        {" "}
                         
                      </a>
        </div>












    </div>
  );
};

export default Home;
