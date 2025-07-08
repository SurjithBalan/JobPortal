import React from "react";
import skylarklogo from "../../assets/logo/Skylark3.jpeg";
import profile from "../../assets/image/candidateImage.jpg";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import './dashboardnavbar.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function Dashboardnavbar({ setShowComponent }) {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1e88e5", }} className="sticky-top">
      {/* Full width container */}
      <Container
        fluid
        className="px-3 py-0 d-flex justify-content-between align-items-center flex-wrap"
      >
        {/* Left: Logo */}
        <Navbar.Brand href="#">
          <img
            src={skylarklogo} // Replace with actual logo
            alt="Skylark HR"
            className="rounded"
            height="50"
          />
        </Navbar.Brand>
        {/* Menu Items */}
        <Navbar.Collapse id="navbar-content" className="justify-content-center">
          <Nav className="d-flex align-items-center gap-4">
            <Nav.Link href="/" className="nav-items  text-white ">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav-items text-white">
              Jobs
            </Nav.Link>
            <Nav.Link href="#" className="nav-items text-white ">
              Featured <FaStar className=" text-warning" />
            </Nav.Link>
            <Nav.Link href="#" className="nav-items text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle
          aria-controls="navbar-content"
          className="border-0 text-white"
        />

        <Navbar.Collapse id="navbar-content" className="justify-content-end">
          <Nav className="d-flex align-items-center   gap-3">

            {/* Notification Bell - Hidden on small screens */}
            <div className="d-none d-md-flex">
              <FiBell size={25} color="#fff" style={{ cursor: "pointer" }} />
            </div>
            <Stack spacing={1}>
              <Avatar alt="profile" src={profile} sx={{width:50,height:50}}/>
            </Stack>
            <div>
              <h6 className="ms-2 d-none d-lg-inline fs-5 text-white">
             Amanda Collins
            </h6>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
