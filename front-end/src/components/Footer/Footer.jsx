import React from "react";
import "../Footer/footer.css";
import logo from "../../assets/image/skylarklogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-brand-section">
            <div className="brand-image-wrapper mb-4">
              <img src={logo} alt="logo" />
            </div>
            <span>
              Empowering professionals and advancing careers Your portal to
              senior-level opportunities.
            </span>
          </div>
          <div className="footer-quicklinks">
            <h5>Quicklinks</h5>
            <ul className="footer-quicklinks-list">
              <li> Jobs</li>
              <li>Home</li>
              <li>Cantact Us</li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <button class="btn neon-pulse ">
              <span className="text-white ">
                Register Now <GoChevronRight />
                <GoChevronRight />
              </span>
            </button>
          </div>
        </div>
        <hr />
        <div className="footer-socials">
          <p>Copyright @ {year} Skylark | all right reserved</p>
          <div className="social-icons">
            <div className="social-icon-container">
              <a href="www.skylarkjobs.com">
                <i className="m-2">
                <FaLinkedin color="white" fontSize="1.6em"/>
                </i>
              </a>
              <a href="www.skylarkjobs.com">
                <i className="m-2">
                <FaSquareWhatsapp color="green" fontSize="1.5em" />
                 
                </i>
              </a>
              <a href="www.skylarkjobs.com">
                <i className=" m-2">
                <FaSquareInstagram color="pink" fontSize="1.5em" />
                </i>
              </a>
              <a href="www.skylarkjobs.com">
                <i className="m-2">
                <FaFacebook fontSize="1.5em" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
