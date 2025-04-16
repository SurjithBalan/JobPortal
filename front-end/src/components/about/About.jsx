import React from "react";
import "../about/about.css";
import image from "../../assets/image/about.png";
export default function About() {
  return (
    <div className="container about-section w-auto ">
      <div className="row">
        <div className="col w-auto">
          <div className="image-section">
            <div className="card1">
              <div className="card2">
                <div className="card3">
                  <div className="about-img">
                    <img src={image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col  ">
         <div className="choose-section  w-auto">
         <div className="about-head ">
            <h2 className="my-4">Why Choose Us</h2>
            <h1 className="my-4">Why SkylarkJobs is Your Trusted Hiring Partner</h1>
          </div>
          <div className="about-list my-4">
            <ul>
              <li>Verified Mid & Senior-Level Job Opportunities Only</li>
              <li>No Spam, No Fake Job Listings Ever</li>
              <li>AI-Powered Candidate Matching for Faster Hiring </li>
              <li>Affordable Subscription Plans for HR Companies </li>
              <li>Clean, Easy-to-Use Dashboard for All Users </li>
            </ul>
          </div>
          <div className="about-button">
            <button>view All Jobs</button>
          </div>
         </div>
        </div>
      </div>



    </div>
  );
}
