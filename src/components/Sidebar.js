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
import { Button, Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import {CiPalette} from "react-icons/ci"
import {BsBoxes} from "react-icons/bs"
import {IoPricetagsOutline} from "react-icons/io5"



const Sidebar = () => {
  return (
    <div
      style={{ display: "flex" ,height: "100vh",overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarHeader >
        <Form>
          <Form.Control  type="search" placeholder="Search Assets..." className="me-2 border border-dark "  aria-label="Search" style={{width:230,borderRadius:20,backgroundColor:"white"}} />
        </Form>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><BsBoxes/>Categories</Accordion.Header>
        <Accordion.Body>
            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>All Categories</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>Fonts</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>Illustrations</p>
            </div>

            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>Photos</p>
            </div>


            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>Templates</p>
            </div>

            <div style={{display:"flex"}}>
            <Form.Check type="radio" aria-label="radio 1" />
            <p>Vectors</p>
            </div>


        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><CiPalette/>File Extension </Accordion.Header>
        <Accordion.Body>
        <Form>
          <Form.Control  type="search" placeholder="Search" className="me-2 border border-dark "  aria-label="Search" style={{width:230,backgroundColor:"white"}} />
        </Form>

          <div style={{display:"flex"}}>
          <Form.Check aria-label="option 1" 
           />
          <p>PDF</p>
          </div>


          <div style={{display:"flex"}}>
          <Form.Check aria-label="option 1" />
          <p>JPG</p>
          </div>



          <div style={{display:"flex"}}>
          <Form.Check aria-label="option 1" />
          <p>PNG</p>
          </div>



          <div style={{display:"flex"}}>
          <Form.Check aria-label="option 1" />
          <p>PSD</p>
          </div>


          <div style={{display:"flex"}}>
          <Form.Check aria-label="option 1" />
          <p>GIF</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><IoPricetagsOutline/>Price</Accordion.Header>
        <Accordion.Body>

            <div>
            <Button  style={{color:"black",backgroundColor:"white" ,width:"100%"}} >All</Button>
            </div>
          
          <div style={{paddingTop:10}}>
          <Button style={{color:"black",backgroundColor:"white",width:"100%"}} >Free</Button>
          </div>

          <div style={{paddingTop:10}}>
          <Button style={{color:"black",backgroundColor:"white",width:"100%"}} >Premium</Button>
          </div>
          
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </NavLink>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
