import React from "react";
import {
  input,
  form,
  button,
  wordSpacing,
  fontSize,
  Image,
} from "react-bootstrap";

import crump from "../images/bade.png";

import { MdOutlineLocationOn } from "react-icons/md";

import { BiPlusCircle } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Fulltime from "./Fulltime";
import Creative from "./Creative";

const Freelance = () => {
  return (
    <section>
      <div>
        <div>
          
          <Image src="https://a5.behance.net/a5cbc1b200679d2c679721a6f349cd3e70a19961/img/joblist/job-header.jpg"
          style={{width:"100%",height:350}}/>
          <div style={{backgroundColor:"rgba(0,0,0,0.4)",width:"100%",height:350,position:"absolute",top:0,display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}>
        <div>
          <h1 style={{fontWeight:"bold",fontSize:50}}>Creative Jobs</h1>
          <p style={{fontSize:20}}>Discover your next career move, freelance gig, or internship</p>
        </div>
          </div>
        </div>
      </div>

   <div>
    <Tabs
      defaultActiveKey="Freelance"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Freelance" title="Freelance (290)">
      
       <div>
        <container className="ps-5 ">
          <span>
            <input
              type="text"
              placeholder="search jobs by keyboard ..."
              label="Search"
              className=""
              style={{ width: 800, height: 40 }}
            />
          </span>
          <span className="px-4 mb-4">
            <Dropdown as={ButtonGroup}>
              <Button variant="secondary">
                <MdOutlineLocationOn /> IN
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <p>LOCATION</p>
                </Dropdown.Item>
                <DropdownItem>
                  <b>
                    
                  <div style={{width:50}}>Country/Region</div>
                   <input type="text" placeholder="india" />
                  </b>
                </DropdownItem>
                <DropdownItem>
                  <div style={{width:50}}>Cities</div>
                  <b>
                    <input type="text"  placeholder="" />
                  </b>
                </DropdownItem>
                <DropdownItem>
                  <button
                    type="button"
                    className="bg-primary rounded-pill px-3"
                  >
                    Apply
                  </button>
                  <b className="ps-3">Clear</b>
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          </span>

          <span className="px-4 mb-4">
            <Dropdown as={ButtonGroup}>
              <Button variant="secondary">All Creative Fields</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </container>
      </div>

      <div>
        <div className="row py-4 ms-5">
          <div className="col">
            <h5>290 Freelance Jobs</h5>
          </div>
          <div className="col text-end me-5">
            <button type="button" className="rounded-pill bg-primary text-white">
              <BiPlusCircle /> Post a Job
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className=" container py-3">
          <div className="row">
            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkgaFPfSHhq8judDstErAAtSCsD3BiwCHB5idnooP4Gq2XuVgk"
                      style={{ widows: 40, height: 40 }}
                    />

                    <b className="fs-6"> Vis-oN</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Middle/ Senior 3D Artist в студию визуализации </b>
                    <p> ищем визуализаторов опытом работы на больших</p>
                  </Card.Text>
                  <Card.Footer>16 hours ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/8b3efcd1e7622a25c364c31b183c320b/405f63ca-4df7-45e8-990e-dcf5ff5fab06_acc_180x180.jpg?h=6151b8027b0944a00d6649a6e60f6f14"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> HEUGAH</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>
                      {" "}
                      Industrial Designer for Innovative packaging. Looking for
                    </b>
                    <p> Industrial Designers to create Innovative Packaging.</p>
                  </Card.Text>
                  <Card.Footer>5 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/dbf2922452f3c53290947b6ecbd36e01/44e60f06-626c-4ceb-a25d-345a55fb5fc4_acc_180x180.jpg?h=7d658f912da40f81f066028fb6001cf0"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> Skyhaus Media</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>
                      Storytelling Video Editors &Creater Needed ! Job
                      Opportunity For:
                    </b>
                    <p> Video Editor& video Creater (Remote, Non-USA)</p>
                  </Card.Text>
                  <Card.Footer>6 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" container py-3">
          <div className="row">
            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38WDzD5s-e2Cwow9rh_X3XLx-4INODciwc4B95IluCRijekqJ"
                      style={{ widows: 40, height: 40 }}
                    />

                    <b className="fs-6"> Marex</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Visual Designer</b>
                    <p>
                      We're looking for a quality visual designer to help build
                      out a corporate brand
                    </p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/0ac8e3289a298ff75664cadd46d137e2/5eaf52ea-3448-4f43-87e8-87629823c817_acc_180x180.jpeg?h=e6b01c073001bd5cfb33ada291bc5306"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> Courtreezy</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Editor for 3 Million sub Youtube Channel</b>
                    <p>
                      $700 per video (negotiable) - Commentary/Reactions Editor
                    </p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38WDzD5s-e2Cwow9rh_X3XLx-4INODciwc4B95IluCRijekqJ"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> mothmerat group</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Senior graphic designer</b>
                    <p>
                      We are looking for a Brand Designer for a completed brand
                      identity and logo design.
                    </p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" container py-3">
          <div className="row">
            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/6c83d12fa49240455b4d72e53d396417/10c2d3de-8c8d-4c85-8f73-9e1a99745fcf_acc_180x180.jpeg?h=97b4c64cf8350adc08a1bcb75055d661"
                      style={{ widows: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> Greg Renko</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Editor for 10 million subscriber YouTube Channel</b>
                    <p>Earn $3,000+ Monthly editing Gaming & Comedy videos</p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/63a03852cc5914b66a27303cc2209f3a/28be80bf-b3c5-44f8-a97b-cae02dfa5f7f_acc_180x180.jpeg?h=c6f19de132f2fd762bfdb1f18af95c54"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> DC Heat</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Editor for 1 Million subscriber YouTube Channel</b>
                    <p>Pays up to $6k monthly with $2k signing bonus</p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/8d39e146a93c68f68c92c469975e4063/487d29fe-08a3-4f80-8315-794186eed673_acc_180x180.jpg?h=da92469ec7ddb188f750c59ad5957e06"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> PMC</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Graphic Designer UI/UX</b>
                    <p>
                      We are looking for a graphic designer to create compelling
                      visuals. Primarily to create online marketing.
                    </p>
                  </Card.Text>
                  <Card.Footer>7 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" container py-3">
          <div className="row">
            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://t3.gstatic.com/images?q=tbn:ANd9GcTExg7_9Bh-XEtwISrQjqH03U-QgIK6VqjxN1G_xeYZM2_hC1-j"
                      style={{ widows: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> UV LLC</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Web/App Developer</b>
                    <p>WEB DEVELOPER & DISIGNER & APP NEEDED</p>
                  </Card.Text>
                  <Card.Footer>9 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/72217e0fbfbba634a428e3bcc51640d5/4b1ed070-ba83-423e-bf43-855825779c93_acc_180x180.jpg?h=a210a3e98135618fa1a528e536b0ab72"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> HEUGAH</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Innovative packaging design</b>
                    <p>
                      We are looking for creative industrial packaging designer{" "}
                    </p>
                  </Card.Text>
                  <Card.Footer>10 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ6V4RUYjjjht1zXF_2slzj20mcaFI1iOVi_-uOEE3vtr9hKy0w"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> Alan Chikin Chow LLC</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b> Web Designer </b>
                    <p>
                      AlanChikinChow is seeking a skilled Website Designer to
                      their website!
                    </p>
                  </Card.Text>
                  <Card.Footer>11 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" container py-3">
          <div className="row">
            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38WDzD5s-e2Cwow9rh_X3XLx-4INODciwc4B95IluCRijekqJ"
                      style={{ widows: 40, height: 40, borderRadius: 40 }}
                    />

                    <b className="fs-6"> Mothmerat Group</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Creative brand designer</b>
                    <p className="fs-6">
                      We are looking for an creative designer
                    </p>
                  </Card.Text>
                  <Card.Footer>12 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <img
                      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDVymR9tktDC-KpQgBiBUWZKSLSv2tClwXK_od4AT6VF76zNdQ"
                      style={{ width: 40, height: 40, borderRadius: 40 }}
                    />
                    <b className="fs-6"> Mulberry creative</b>
                    <p className="fs-6">
                      <MdOutlineLocationOn />
                      Anywhere
                    </p>
                  </Card.Title>
                  <Card.Text>
                    <b>Animator 2/3D</b>
                    <p>Animator 2/3d for Mötley Crüe music </p>
                  </Card.Text>
                  <Card.Footer>12 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>

            <div className="col">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>
                    <span>
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDVymR9tktDC-KpQgBiBUWZKSLSv2tClwXK_od4AT6VF76zNdQ"
                        style={{ width: 40, height: 40, borderRadius: 40 }}
                      />
                    </span>

                    <span>
                      <b className="fs-6"> Mulberry creative</b>
                      <p className="fs-6">
                        <MdOutlineLocationOn />
                        Anywhere
                      </p>
                    </span>
                  </Card.Title>
                  <Card.Text>
                    <b>2/3d illustrator</b>
                    <p>2/3D illustrator for Mötley Crüe music </p>
                  </Card.Text>
                  <Card.Footer>12 days ago</Card.Footer>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </Tab>
      <Tab eventKey="Fulltime" title="FullTime (302)">
        <Fulltime/>
      </Tab>
      <Tab eventKey=" Creatives for Hire" title="Creatives for Hire" >
      <Creative/>
      </Tab>
    </Tabs>
   </div>

     
    </section>
  );
};
export default Freelance;
