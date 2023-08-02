import React from "react";
import AssetTopnav from "../components/AssetTopnav";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsCart2 } from "react-icons/bs";
import { AiFillLike, AiFillEye } from "react-icons/ai";
import Sidebar from "../components/Sidebar";

const Assets = () => {
  return (
    <div>
      <AssetTopnav />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <Sidebar  /> */}

        <div style={{ width: 500, height: "100%" }}>
          <Sidebar />
        </div>

        <div>
          <div style={{ marginTop: 20 }}>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>1000 + Assets</p>
              </Col>
              <Col>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="white"
                    id="dropdown-basic"
                    style={{ alignItems: "end" }}
                  >
                    Recommended
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Recommended</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Most Viewed</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Most Appreciated
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>

          <section>
            <Row>
              <Col
                lg={10}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                {/* 
        <div>
        <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4a478a173864607.Y3JvcCwxNzU2LDEzNzQsMzQ3LDA.png" />
      <Card.Body style={{display:"flex"}}>
        <Card.Title>Student || Free Download <span style={{fontSize:15,color:"grey"}}> Walter White</span> </Card.Title>
        <Card.Text style={{display:"flex",marginRight:80}} >
          <span style={{display:"flex"}}><AiFillLike style={{fontSize:20}}/> <p>2</p></span>
          
          <span style={{display:"flex"}}><AiFillEye style={{fontSize:20}}/> <p>2</p></span>
          
          
        </Card.Text>
        <Button variant="primary" style={{position:"absolute",top:5,display:"flex",height:30}}>
          <BsCart2/> <p> $18</p>
        </Button>
      </Card.Body>
    </Card>

        </div> */}

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4a478a173864607.Y3JvcCwxNzU2LDEzNzQsMzQ3LDA.png"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15 ,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Student || Free Download 
                        </a>
                          

                        <div className="d-flex">
                          < AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            4k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            54k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $18</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8a63c8166599103.Y3JvcCwyOTIwLDIyODQsODAyLDEzMzA.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Fantasy Twings <br/> and Herbs
                        </a>

                        <div className="d-flex">
                          < AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            7k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                           10k {" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $44</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/681826170593705.Y3JvcCwxNzg5LDE0MDAsMTA2LDA.png"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15 ,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Illustrators for advertisement
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            6k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            54k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $62</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </section>

          <section style={{ paddingTop: 20 }}>
            <Row>
              <Col
                lg={10}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/382d97172252213.Y3JvcCwxOTIwLDE1MDEsMCw0OTk.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none", fontWeight:"bold",fontSize:20,color:"black"  }}
                        >
                          {" "}
                          Ai Monkey || AI Art
                        </a>

                        <div className="d-flex">
                          <AiFillLike
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
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $38</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bedc9b165509527.Y3JvcCwxNTUyLDEyMTQsMTM0LDA.png"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black"  }}
                        >
                          {" "}
                          Type Family
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            11k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            32k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $29</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bb3b1c168039351.Y3JvcCw5ODEsNzY4LDM0LDA.jpeg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15 ,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black"}}
                        >
                          {" "}
                          LANDMANNALAUGAR
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            21K{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            40K{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $36</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </section>

          <section style={{ paddingTop: 20 }}>
            <Row>
              <Col
                lg={10}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/00e9ba171804287.Y3JvcCwyNTAwLDE5NTUsMCww.png"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          20 Flowers Bundle
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            15k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            20k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $81</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3da74e173964575.Y3JvcCw4OTYsNzAwLDAsOTA.png"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          FUN-tastic Beast
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            26k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            45k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $45</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/bf223379641845.Y3JvcCwxMDQ0LDgxNywxNzgsNw.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Le Murmure Cyrillic
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            3k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            10k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $16</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </section>

          <section style={{ paddingTop: 20 }}>
            <Row>
              <Col
                lg={10}
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b57a6d142410639.Y3JvcCwxMzI1LDEwMzcsMzIxLDg4.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Brulia Variable Ink 
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            58k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            80k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $28</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/17bb7f165739839.Y3JvcCwxMjE5LDk1Myw5MCwxMDI.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          Fruit Antioxidant 
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            2k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            16k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $32</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <Card style={{ width: "22rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1ac08a168322281.Y3JvcCw4MzcwLDY1NDYsMCwxOTY4.jpg"
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <a
                          href="https://pluralsight.com"
                          className="my-2"
                          style={{ fontSize: 15,textDecoration:"none",fontWeight:"bold",fontSize:20,color:"black" }}
                        >
                          {" "}
                          French BullDog
                        </a>

                        <div className="d-flex">
                          <AiFillLike
                            className="my-2"
                            style={{ width: 16, height: 16 }}
                          />{" "}
                          <p
                            className="ms-1 my-2"
                            style={{ fontSize: 12, marginLeft: 5 }}
                          >
                            {" "}
                            45k{" "}
                          </p>
                          <AiFillEye
                            className="my-2 ms-2"
                            style={{ width: 16, height: 19 }}
                          />{" "}
                          <p className="ms-1 my-2" style={{ fontSize: 12 }}>
                            74k{" "}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="primary"
                        style={{
                          position: "absolute",
                          top: 5,
                          display: "flex",
                          height: 30,
                        }}
                      >
                        <BsCart2 /> <p> $52</p>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Assets;
