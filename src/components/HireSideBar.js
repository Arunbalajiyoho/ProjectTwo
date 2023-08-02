import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { FormControl } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import { BsSearchHeart, BsCreditCard2Back } from "react-icons/bs";
import { Form } from "react-bootstrap";
import { CiGrid42 } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import {BsTools} from "react-icons/bs"

const HireSideBar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="" backgroundColor="">
        <CDBSidebarHeader>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <div className=" border rounded d-flex ">
              <LuSearch
                style={{ fontSize: 25, color: "black" }}
                className="my-auto"
              />
              <div>
                <FormControl type="text" placeholder="Search Captives" />
              </div>
            </div>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Accordion>
              <Accordion.Header>
                {" "}
                <BsSearchHeart style={{ marginRight: 8, color: "grey" }} />
                Availability
              </Accordion.Header>
              <Accordion.Body>
                <Button className="w-100 border rounded-pill bg-white text-dark border-primary">
                  All
                </Button>
                <br />
                <Button className="w-100 border rounded-pill bg-white text-dark border-primary mt-2">
                  .Freelance
                </Button>
                <br />
                <Button className="w-100 border rounded-pill bg-white text-dark border-primary mt-2">
                  .Full-Time
                </Button>
              </Accordion.Body>
            </Accordion>

            <hr></hr>

            <Accordion>
              <Accordion.Header>
                <BsCreditCard2Back style={{ marginRight: 8 }} />
                Payments
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>All</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>Accepting payments on Gpay</p>
                </div>
              </Accordion.Body>
            </Accordion>

            <hr></hr>

            <Accordion>
              <Accordion.Header>
                <CiGrid42 style={{ marginRight: 8 }} />
                Creative Fields
              </Accordion.Header>
              <Accordion.Body>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>All</p>
                </div>
                <p>Popular</p>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  
                  <a href="#" >
                  <p style={{ marginLeft: 4 }}>Architecture</p>
                  </a>
                
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>Art Design</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>Branding</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>Fashion</p>
                </div>
                <p>All Fields</p>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>3D Design</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>3D Art</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>Advertising</p>
                </div>
                <div className="d-flex">
                  <Form.Check type="radio" aria-label="radio 1" />
                  <p style={{ marginLeft: 4 }}>3D Motion</p>
                </div>
              </Accordion.Body>
            </Accordion>

            <hr></hr>

            <Accordion>
              <Accordion.Header>
                <ImLocation2 style={{ marginRight: 8 }} />
                Locations
              </Accordion.Header>
              <Accordion.Body>
                <Form.Select aria-label="Default select example">
                  <option>Select a state/Region</option>
                  <option value="1">TamilNadu</option>
                  <option value="2">Kerala</option>
                  <option value="3">Mumbai</option>
                  <option value="4">Patna</option>
                  <option value="5">Delhi</option>
                </Form.Select>
                <Form.Control type="text" placeholder="City" className="mt-2" />
                <div className="d-flex mt-3">
                  <Form.Check type="check" aria-label="check 1" />
                  <p style={{ marginLeft: 7 }}>Available Remotely</p>
                </div>
              </Accordion.Body>
            </Accordion>

            <hr></hr>

            <Accordion>
              <Accordion.Header>
                <BsTools style={{ marginRight: 8 }} />
                Tools
              </Accordion.Header>
              <Accordion.Body>
              <Form.Control size="" type="text" placeholder="Start typing to see list" />
              <p className="mt-2">Popular Tools</p>
              <p className="mt-2">Adobe Photoshop</p>
              <p className="mt-2">Adobe Illustor</p>
              <p className="mt-2">Adobe Design</p>
              <p className="mt-2">Adobe After Photoshop</p>
             
              

              </Accordion.Body>
            </Accordion>
            <hr></hr>

            <Accordion>
              <Accordion.Header>
                <BsTools style={{ marginRight: 8 }} />
                Schools
              </Accordion.Header>
              <Accordion.Body>
            
              <Form.Control size="" type="text" placeholder="Start typing to see list" />
            
             <p className="mt-2">Pratt Institute</p> 
              <p className="mt-2">Savannah College of Art and Design (SCAD)</p>
              <p className="mt-2">Rhode Island School Of Design (RISD)</p>
              <p className="mt-2">Maryland Institute College of Art (MICA)</p>
              <p className="mt-2">School Of Visual Arts (SVA)</p>
             
             
            

              </Accordion.Body>
            </Accordion>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
        
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default HireSideBar;
