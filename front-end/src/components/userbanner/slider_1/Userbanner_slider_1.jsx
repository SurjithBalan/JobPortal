import React from 'react';
import './Userbanner_slider_1.css';
import { CiSearch, CiLocationOn } from "react-icons/ci";
import backgroundImage from '../../../assets/image/Backgroung_Image_1.png'

const UserBanner_1 = () => {
  return (
    <section className="banner-section">
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-md-5"></div>
          <div className="col-xl-6 col-md-7">
            <div className="hero-content text-center">
              <div className="inner-content mt-n10 ">
                <h1 className="hero-heading mb-2" >
                  <span className='H2'>Tired of</span> <span className='H1'>No Responses</span> <span className='H2'>from Companies?</span>
                </h1>
                <h2 className="hero-sub-heading">
                  <span className='secondH2'>Connect Directly with</span><span className='secondH1'>Real Recruiters.</span>
                  <br />
                  <span className="secondH2"> Who Can Land You the Job You Deserve</span>
                </h2>
                <hr className='mb-2' />
                <span className="hero-description">
                  "Exclusive Hiring for Mid & Senior Level Positions"
                </span>
              </div>
            </div>
             <img
        src={backgroundImage}
        alt=""
        className="img-fluid position-img"
      />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBanner_1;