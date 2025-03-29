import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "../userlogin/userlogin.css";

export default function UserLogin(props) {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(true);
  const [isOtpPopupOpen, setOtpPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginPopupOpen(false);
    setOtpPopupOpen(true);
  };

  const closeOtpPopup = () => {
    setOtpPopupOpen(false);
  };
  return (
    <>
      <div>
        {isLoginPopupOpen && (
          <div className=" d-flex items-start bg-white rounded-3 ">
            <div className="container  ">
              <form className="from">
                <div className="form-outline mx-5  ">
                  <label
                    className="form-label text-dark m-1 d-flex justify-content-start"
                    placeholder="Email "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control  text-dark bg-whitet "
                  />
                </div>

                <div className="text-center my-2">
                  <button
                    onClick={handleLoginClick}
                    type="button"
                    className="btn "
                    style={{ backgroundColor: "#FF7F11", color: "white" }}
                  >
                    Login
                  </button>
                </div>

                <div className="btn-gmail text-center my-2">
                  <div className="divider">
                    <div className="line"></div>
                    <span className="text">OR</span>
                    <div className="line"></div>
                  </div>
                  <button
                    type="button"
                    className="btn  justify-content-center "
                  >
                    <span className="m-1">
                      <FcGoogle size={30} />
                    </span>
                    <span className="p-1 text-white">Signed in via Gmail</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isOtpPopupOpen && (
          <div className="container height-100 d-flex justify-content-center align-items-center ">
            <div className="position-relative ">
              <div className="cursor-box zoom-in p-2 text-center">
                <h6>
                  Please enter the one time password
                  <br /> to verify your account
                </h6>
                <div>
                  {" "}
                  <span>A code has been sent to</span>
                </div>
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2"
                >
                  <input
                    className="m-2  text-center form-control rounded"
                    type="text"
                    id="first"
                    maxLength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxLength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxLength="1"
                  />
                  <input
                    className="m-2 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxLength="1"
                  />
                </div>{" "}
                <div className="mt-4 ">
                  {" "}
                  <button className="btn btn-danger px-4 validate">
                    Verify OTP
                  </button>
                </div>{" "}
              </div>{" "}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
