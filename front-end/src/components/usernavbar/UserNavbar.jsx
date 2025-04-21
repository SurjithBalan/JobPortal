import React, { useState } from "react";
import logo from "../../assets/image/skylarklogo.png";
import "../usernavbar/usernavbar.css";
import { FaStar } from "react-icons/fa";
import { PiUserCircleThin } from "react-icons/pi";
import { MdCorporateFare } from "react-icons/md";
import CompanyLogin from "../companylogin/CompanyLogin";
import "../companylogin/companylogin.css";
import UserLogin from "../userlogin/UserLogin";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
function UserNavbar() {
  const [show, setShow] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [company, setCompany] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function candidateOpen() {
    setCompany(false);
    setShow(true);
    setCandidate(true);
  }
  function companyOpen() {
    setCandidate(false);
    setShow(true);
    setCompany(true);
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top "
        style={{ backgroundColor: "#1E88E5" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03 , #navbarNavDropdown"
            aria-controls="navbarTogglerDemo03,navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src={logo} className="image"></img>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  id="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Job
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Featured{" "}
                  <span>
                    <FaStar color="#FFA900" />
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white ">
                  Contact US
                </a>
              </li>
            </ul>
            <div className="btn-login ">
              <Link to={"/companylogin"}>
                <button
                  // onClick={companyOpen}
                  className="hover-underline mx-3  "
                  style={{ color: "#424242" }}
                >
                  <span className="m-2">
                    <MdCorporateFare fontSize="1.5em" />
                  </span>
                  Company Login
                </button>
              </Link>
              <button onClick={candidateOpen} className="hover-underline  mx-3">
                <span className="m-1">
                  <PiUserCircleThin color="black" fontSize="1.5em" />
                </span>{" "}
                Candidate Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-items">
                <a className="nav-link  " aria-current="page" href="#">
                  Featured Hiring
                </a>
              </li>
              <li className="nav-items">
                <a className="nav-link" href="#">
                  Resume AI
                </a>
              </li>
              <li className="nav-items">
                <a className="nav-link" href="#">
                  Interview Tips
                </a>
              </li>
              <li className="nav-items">
                <a className="nav-link" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {candidate && <UserLogin />}
          {company && <CompanyLogin />}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserNavbar;
