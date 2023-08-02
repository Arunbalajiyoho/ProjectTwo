import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";
import { Card } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import HireSideBar from "./HireSideBar";


const HireRecommend = () => {
  return (
    <div >
      

      <div className="d-flex">
        <div className="" style={{ width: 300, height: "100%" }}>
          <HireSideBar/>
        </div>
        <div style={{ width: "100%",height:500, marginTop:10}} className="">
          <div
            className="d-flex justify-content-between "
            style={{ width: "100%" }}
          >
            <h5 style={{marginLeft:10}}>10,000+ Results</h5>
            <div className="d-flex" style={{marginRight:10}}>
              <div
                className="border border-dark rounded rounded-pill"
                style={{
                  width: 80,
                  padding: 5,
                  display: "flex",

                  backgroundColor: "",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: 20,
                  marginRight: 10,
                }}
              >
                <BsGrid className="" style={{ fontSize: 18 }} />
                <AiOutlineUnorderedList style={{ fontSize: 20 }} />
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  id="dropdown-basic"
                  className="border border-dark rounded rounded-pill"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <Container fluid  className="">
            <Row>
              <Col >
                <Card
                  style={{ display: "flex", justifyContent: "space-between",marginTop:20}}
                >
                  <div style={{ borderColor: "red" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bf37a2175523241.Y3JvcCwxMzI0LDEwMzUsMjQ1LDg4.png"
                        style={{
                          width: "auto",
                          height: 100,
                        
                          
                        
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/272709174401105.Y3JvcCwxMTMzLDg4NiwzNDUsMTYy.png"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/2c08bc125566219.Y3JvcCwxMTU2LDkwNCwzMzIsMTUx.jpeg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bfb6dc140943443.Y3JvcCwxMzQ1LDEwNTIsMjI2LDcz.jpg"
                        style={{  width: "auto", height: 100, }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/69b51228213405.5f1f1fe6752b8.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Pixel Surplus</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> Ambal Nagar,Keelkatalai
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                            fontWeight:"bold"
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>1.3m</p>
                      <p style={{ marginLeft: 10 }}>8.36 k</p>
                      <p>17.7 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ display: "flex",marginTop:20}}
                >
                  <div style={{ borderColor: "red", width: "auto" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/021d34162344707.Y3JvcCw1MzQ0LDQxNzksMCwxMw.jpg"
                        style={{
                          width: "auto",
                          height: 100,
                          
                          
                          borderColor: "blue",
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/ad76ae175514467.Y3JvcCw1MzQ0LDQxNzksMCwxMw.png"
                        style={{  width: "auto", height: 100}}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/18ad21175324957.Y3JvcCw1Mzg4LDQyMTQsMCww.jpg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/e7e3e6172406375.Y3JvcCwxMjIwLDk1NSw5MCww.jpg"
                        style={{ width: "auto", height: 100,}}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/5e698e164817.642591922c564.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">RondeSignLab</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> 1OO Ft Road,Palikaranai
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                            fontWeight:"bold"
                          }}
                        >
                          Freelance
                        </p>
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "#9dFFFF",
                            borderRadius: 10,
                            fontWeight:"bold",
                            marginLeft:6
                          }}
                        >
                          FullTime
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>2m</p>
                      <p style={{ marginLeft: 10 }}>10.8 k</p>
                      <p>18.8 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col >
                <Card
                  style={{ display: "flex", justifyContent: "space-between",marginTop:20}}
                >
                  <div style={{ borderColor: "red" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/ae5367174906139.Y3JvcCwxOTk5LDE1NjQsMCww.jpg"
                        style={{
                          width: "auto",
                          height: 100,
                        
                          
                        
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/d77191174434789.Y3JvcCwxOTk5LDE1NjQsMCww.jpg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/5a4ebf170651289.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/ed4465174440959.Y3JvcCwxOTk5LDE1NjQsMCww.jpg"
                        style={{  width: "auto", height: 100, }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/cb883b10314151.621506e65060e.jpg"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Brand</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> SanthiStreet,Chrompet
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "#9dFFFF",
                            borderRadius: 10,
                            fontWeight:"bold",
                            marginLeft:6
                          }}
                        >
                          FullTime
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>2.3m</p>
                      <p style={{ marginLeft: 10 }}>6.5 k</p>
                      <p>17 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ display: "flex",marginTop:20}}
                >
                  <div style={{ borderColor: "red", width: "auto" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/4b4cc9176146853.Y3JvcCwxOTk5LDE1NjQsMCwxOQ.png"
                        style={{
                          width: "auto",
                          height: 100,
                          
                          
                          borderColor: "blue",
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/c5bac7175968325.Y3JvcCwyMzQzLDE4MzMsNzUsMA.jpg"
                        style={{  width: "auto", height: 100}}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/b487af175399631.Y3JvcCwyMTMxLDE2NjcsMTg0LDA.jpg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/020073161018807.Y3JvcCwxOTk5LDE1NjQsMCwxOQ.jpg"
                        style={{ width: "auto", height: 100,}}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/ab166e1301330727.64b94f59c34bc.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Suresh Studio</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> SubaStreet,Tirupur
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>1m</p>
                      <p style={{ marginLeft: 10 }}>8 k</p>
                      <p>17 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col >
                <Card
                  style={{ display: "flex", justifyContent: "space-between",marginTop:20}}
                >
                  <div style={{ borderColor: "red" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/3b59bc174354759.Y3JvcCwyOTk2LDIzNDQsMTAzLDA.png"
                        style={{
                          width: "auto",
                          height: 100,
                        
                          
                        
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/7dbe82165604487.Y3JvcCwxNDk5LDExNzMsMCww.png"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/a44f28165025139.Y3JvcCwyMTU4LDE2ODgsNDIyLDA.png"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/0ffe44158446779.Y3JvcCw4MDgsNjMyLDAsMA.png"
                        style={{  width: "auto", height: 100, }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/86dc3411459165.5ab5ab43a86f5.jpg"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Pixel Surplus</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> Sundal Street,Sukum
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>3m</p>
                      <p style={{ marginLeft: 10 }}>36 k</p>
                      <p>7 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ display: "flex",marginTop:20}}
                >
                  <div style={{ borderColor: "red", width: "auto" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bf37a2175523241.Y3JvcCwxMzI0LDEwMzUsMjQ1LDg4.png"
                        style={{
                          width: "auto",
                          height: 100,
                          
                          
                          borderColor: "blue",
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/272709174401105.Y3JvcCwxMTMzLDg4NiwzNDUsMTYy.png"
                        style={{  width: "auto", height: 100}}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/2c08bc125566219.Y3JvcCwxMTU2LDkwNCwzMzIsMTUx.jpeg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bfb6dc140943443.Y3JvcCwxMzQ1LDEwNTIsMjI2LDcz.jpg"
                        style={{ width: "auto", height: 100,}}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/69b51228213405.5f1f1fe6752b8.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Pixel Surplus</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> Ambal Nagar,Keelkatalai
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>1.3m</p>
                      <p style={{ marginLeft: 10 }}>8.36 k</p>
                      <p>17.7 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col >
                <Card
                  style={{ display: "flex", justifyContent: "space-between",marginTop:20}}
                >
                  <div style={{ borderColor: "red" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bf37a2175523241.Y3JvcCwxMzI0LDEwMzUsMjQ1LDg4.png"
                        style={{
                          width: "auto",
                          height: 100,
                        
                          
                        
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/272709174401105.Y3JvcCwxMTMzLDg4NiwzNDUsMTYy.png"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/2c08bc125566219.Y3JvcCwxMTU2LDkwNCwzMzIsMTUx.jpeg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bfb6dc140943443.Y3JvcCwxMzQ1LDEwNTIsMjI2LDcz.jpg"
                        style={{  width: "auto", height: 100, }}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/69b51228213405.5f1f1fe6752b8.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Pixel Surplus</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> Ambal Nagar,Keelkatalai
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>1.3m</p>
                      <p style={{ marginLeft: 10 }}>8.36 k</p>
                      <p>17.7 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card
                  style={{ display: "flex",marginTop:20}}
                >
                  <div style={{ borderColor: "red", width: "auto" }}>
                    <div className="d-flex justify-content-around">
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bf37a2175523241.Y3JvcCwxMzI0LDEwMzUsMjQ1LDg4.png"
                        style={{
                          width: "auto",
                          height: 100,
                          
                          
                          borderColor: "blue",
                        }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/272709174401105.Y3JvcCwxMTMzLDg4NiwzNDUsMTYy.png"
                        style={{  width: "auto", height: 100}}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/2c08bc125566219.Y3JvcCwxMTU2LDkwNCwzMzIsMTUx.jpeg"
                        style={{  width: "auto", height: 100,  }}
                      />
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/projects/404_webp/bfb6dc140943443.Y3JvcCwxMzQ1LDEwNTIsMjI2LDcz.jpg"
                        style={{ width: "auto", height: 100,}}
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginTop: -30 }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/user/100/69b51228213405.5f1f1fe6752b8.png"
                        style={{ width: 65, height: 65 }}
                        className="border rounded-pill"
                      />
                    </div>
                    <div>
                      <p className="fw-bold fs-5 text-center">Pixel Surplus</p>
                      <p className="text-center" style={{ marginTop: -15 }}>
                        <CiLocationOn /> Ambal Nagar,Keelkatalai
                      </p>
                      <div className="d-flex justify-content-center text-center">
                        <p
                          style={{
                            width: 100,
                            backgroundColor: "grey",
                            borderRadius: 10,
                          }}
                        >
                          Freelance
                        </p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-around fw-bold">
                      <p>1.3m</p>
                      <p style={{ marginLeft: 10 }}>8.36 k</p>
                      <p>17.7 m</p>
                    </div>
                    <div
                      className="d-flex justify-content-around"
                      style={{ marginTop: -18, color: "grey" }}
                    >
                      <p>Appreciation</p>
                      <p>Followers</p>
                      <p>Project Views</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HireRecommend;
