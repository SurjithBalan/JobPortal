import React,{useState} from 'react'
import logo from "../../assets/image/skylarklogo.png";
import "../usernavbar/usernavbar.css";
import { HiUser } from "react-icons/hi2";
import { MdCorporateFare } from "react-icons/md";
import CompanyLogin from "../companylogin/CompanyLogin";
import "../companylogin/companylogin.css";
import UserLogin from "../userlogin/UserLogin";
import Modal from "react-bootstrap/Modal";
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
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#003366" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img src={logo} className="image"></img>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <a href="" className="nav-link text-white ">
                Contact US
              </a>
            </li>
          </ul>
          <div className="btn-login ">
              <a onClick={candidateOpen} className="hover-underline text-white">
                Candidate Login
                <span className="m-1">
                  <HiUser />
                </span>{" "}
              </a>

              <span className="text-light mx-2">/</span>
              <a
                onClick={companyOpen}
                className="hover-underline "
                style={{ color: "#FF7F11" }}
              >
                Company Login
                <span className="m-1">
                  <MdCorporateFare />
                </span>
              </a>
            </div>
        </div>
      </div>
    </nav>

    <Modal  show={show} onHide={handleClose} animation={false} centered>
      <Modal.Header  closeButton>
      </Modal.Header>
      <Modal.Body>
        {candidate && <UserLogin />}
        {company && <CompanyLogin />}
      </Modal.Body>
    </Modal>
  </>
  )
}

export default UserNavbar