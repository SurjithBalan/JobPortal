import React from "react";
import "../companylogin/companylogin.css";

export default function CompanyLogin() {

  return (
    <>
      <div className=" d-flex items-start bg-white rounded-3   ">
        <div className="container ">
          <form className="from">
            {/* <!-- Email input --> */}
            <div className="form-outline  mx-5 ">
              <label
                className="form-label text-dark m-2 d-flex justify-content-start"
                placeholder="Email "
              >
                Username
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control  text-dark bg-light "

              />
            </div>

            {/*  Password input / */}
            <div className="form-outline mb-4 mx-5">
              <label
                className="form-label d-flex justify-content-star"
              >
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control bg-light  "
              />
            </div>

            {/*  Submit button  */}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-block m-1 "
                style={{ backgroundColor: "#FF7F11", color: "white" }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}
