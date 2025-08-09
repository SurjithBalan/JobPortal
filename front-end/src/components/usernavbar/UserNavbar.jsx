import { useState } from "react";
import logo from "../../assets/image/skylarklogo.png";
import "../usernavbar/usernavbar.css";
import { FaStar } from "react-icons/fa";
import { PiUserCircleThin } from "react-icons/pi";
import { MdCorporateFare } from "react-icons/md";
import "../companylogin/companylogin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import UserPopover from "../user-popover/UserPopover";


function UserNavbar() {
  const navigate = useNavigate();
  const isAuthenticated = Cookies.get("XSRF-TOKEN") !== undefined;
  const user = useSelector((state) => state.user.user);
  const [showPopover, setShowPopover] = useState(false);

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
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarTogglerDemo03"
          >
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
                <Link className="nav-link text-white" to={"/Job_listing_page"}>
                  Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/HrCompanyDashboard"}>
                  Featured{" "}
                  <span>
                    <FaStar color="#FFA900" />
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link text-white ">
                  Contact US
                </a>
              </li>

              {/* Hr Dashboard is temprorary routing */}
              <li className="nav-item">
                <Link to="/hr" className="nav-link text-white">
                  HR Dashboard
                </Link>
              </li>
            </ul>
           {isAuthenticated === false && <div className="btn-login d-flex justify-content-center flex-md-row align-items-center flex-column ">
              <Link to={"/companylogin"}>
                <button
                  // onClick={companyOpen}
                  className=" mx-2  "
                  style={{ color: "#424242" }}
                >
                  <span className="m-2">
                    <MdCorporateFare fontSize="1.5em" />
                  </span>
                  Company Login
                </button>
              </Link>
              <Link to={"/login"}>
                <button
                  className="hover-underline  mx-1"
                  onClick={() => navigate("/login")}
                >
                  <span className="m-1">
                    <PiUserCircleThin color="black" fontSize="1.5em" />
                  </span>{" "}
                  CandidateLogin
                </button>
              </Link>
            </div>}
            <div>
              {isAuthenticated && (
                <div className=" d-flex justify-content-center flex-md-row align-items-center flex-column ">
                      <span className="m-2" onClick={() => setShowPopover(!showPopover)}>
                        <img
                          src={user && user.imageUrl ? user.imageUrl : "default-avatar.png"}
                          alt="User Avatar"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            cursor: "pointer",
                          }}
                        />
                      </span>
                      <span className="ms-2 text-light">
                         {user && user.name ? user.name : "User"}
                      </span>
                </div>
              )}
               {showPopover && <UserPopover/>}
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center  "
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
    </>
  );
}
export default UserNavbar;
