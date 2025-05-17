import React from 'react';
import './Userbanner_slider_3.css';
import { CiSearch, CiLocationOn } from "react-icons/ci";
import backgroundImage from '../../../assets/image/Backgroung_Image_3.png'

const UserBanner_3 = () => {
  return (
    <section className="banner-section3">
      <img
        src={backgroundImage}
        alt=""
        className="img-fluid position-img3"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-md-5"></div>
          <div className="col-xl-6 col-md-7">
            <div className="hero-content text-center ">
              <div className="inner-content">
                <h1 className="hero-heading mb-2" >
                  <span className='H2'>We’re here to</span> <span className='H1ban3'>Support you</span>
                </h1>
                <h2 className="hero-sub-heading">
                  <span className='secondH2'>Get</span><span className='secondH1_ban3'>Noticed</span><span className='secondH2'>. Get</span><span className='secondH1_ban3'>Connected</span><span className='secondH2'>. Get Hired</span>
                </h2>
                <hr className='mb-2' />
                <span className="hero-description">
                  "Exclusive Hiring for Mid & Senior Level Positions"
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBanner_3;