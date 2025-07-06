import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { CiMail } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaSquareCheck } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import profile from "../../assets/image/candidateImage.jpg";
import "./recruiterprofile.css";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import { BsStars } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CheckCircle, Circle } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import Slider from "react-slick";
import herojobs from "../data/herojobs";
import {
  BsBookmark,
  BsGeoAlt,
  BsCurrencyRupee,
  BsCalendar,
} from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
const tasks = [
  { label: "Setup Account", completed: true },
  { label: "Upload your Photo", completed: true },
  { label: "Enable Desktop Notification", completed: true },
  { label: "Invite Team Members (0/1)", completed: false },
  { label: "Complete Profile", completed: true },
  { label: "Install Our Mobile App", completed: false },
];
const settings = {
  width: 100,
  height: 100,
  value: 60,
};

export default function RecruiterProfile() {
  const percentage = 80;
  // Custom Arrow Buttons
  const CustomArrow = ({ onClick, direction }) => (
    <button className={`custom-arrow ${direction}`} onClick={onClick}>
      {direction === "next" ? "›" : "‹"}
    </button>
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={5}>
            {/* Profile Sidebar */}
            <div className="lg:col-span-1 bg-white shadow-sm rounded-xl my-4">
              <div className="d-flex align-items-center  justify-content-center">
                <div className="mx-3 d-flex  position-relative me-3">
                  {" "}
                  <Avatar sx={{ width: 100, height: 130 }} src={profile} />
                </div>

                <div className=" text-start pt-3 position-relative ">
                  <MdOutlineEdit
                    size={25}
                    className="position-absolute  top-0  end-0 p-1 rounded-circle border"
                    style={{
                      transform: "translate(50%, -50%)",
                      color: "#1e88e5",
                      backgroundColor: "#e9f3fc",
                    }}
                  />
                  <h5 className="mt-3 font-semibold">Amanda Collins</h5>
                  <div className="flex items-center justify-center gap-1 text-yellow-500">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} fill="#FFA900" size={16} />
                    ))}
                    <FaStar size={16} />
                  </div>
                  <p className=" mb-0 text-gray-600 ">Web Developer</p>
                  <p className=" mb-0 small text-gray-500">Skylark</p>
                  <p className="mb-0 small text-gray-400">
                    April 2025 - Present • 0 Yrs 1 Mts
                  </p>
                  <p className="mb-0 small text-gray-500">Chennai</p>
                </div>
              </div>
               <div className="mt-3 space-y-2 w-full">
                <Divider sx={{ width: "90%" }} className="mb-3 mx-3" />
                <div className="flex items-center justify-center gap-2 small">
                  <BsStars
                    size={20}
                    className="me-1"
                    style={{ color: "#ffa900" }}
                  />
                  <span className="colortone">Joined on : </span>
                  <span className="colortone">20 November 2024 </span>
                </div>
              </div>
              <Row className="mb-2 text-start d-flex align-items-center mt-3 p-1">
                <Divider sx={{ width: "90%" }} className="mb-3 mx-3" />
                <Col xs={12} md={6} className="mb-2 mb-md-0">
                  <HiOutlinePhone
                    size={20}
                    className="me-1"
                    style={{ color: "#43a047" }}
                  />
                  <span className="colortone small">+91 8734272845</span>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className="mb-2 mb-md-0 text-end text-nowrap"
                >
                  <CiMail
                    size={20}
                    className="me-1"
                    style={{ color: "#494fff" }}
                  />
                  <span className="colortone small">zacknike@gmail.com</span>
                </Col>
              </Row>
              <Divider sx={{ width: "90%" }} className="mb-3 mx-3" />
              <Row className="small mb-2">
                <Col xs={12}>
                  <IoIosPeople size={16} fill="#FF5B5B" /> 200-500 employees
                </Col>
              </Row>
              <div className="mt-4 space-y-2 w-full">
                <Divider sx={{ width: "90%" }} className="mb-3 mx-3" />
                <div className="flex items-center justify-center gap-2 small">
                  <BsStars
                    size={20}
                    className="me-1"
                    style={{ color: "#ffa900" }}
                  />
                  <span className="colortone">Profile last updated on : </span>
                  <span className="colortone">25 April 2025</span>
                </div>
              </div>

              {/* Profile Score */}
              <div className="bg-light border-0 mt-3">
                <div className="p-3">
                  <Row className="align-items-center">
                    <Col xs={2} className="">
                      <div
                        style={{ position: "relative", width: 60, height: 60 }}
                      >
                        <CircularProgressbar
                          value={percentage}
                          styles={buildStyles({
                            pathColor: "#28a745",
                            textColor: "#28a745",
                            trailColor: "#d6d6d6",
                            textSize: "24px", // Adjust text size
                          })}
                        />
                        {/* Manually center the text */}
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "20px",
                            color: "#28a745",
                          }}
                        >
                          {percentage}%
                        </div>
                      </div>
                    </Col>
                    <Col xs={1}></Col> {/* Spacer column */}
                    <Col xs={9}>
                      <div className="fw-bold text-start colortone ">
                        Profile Score
                      </div>
                      <div className="text-start">
                        <small className="text-muted colortone">
                          Complete recruiter profiles attract more qualified
                          candidates!!
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <h6 className="mt-4 text-start bold">
                        Complete Your Profile
                      </h6>
                      <div className="  w-full ">
                        <ul className="p-0">
                          {tasks.map((task, index) => (
                            <li
                              key={index}
                              className="d-flex align-items-center justify-content-between py-1"
                            >
                              <div className="flex items-center">
                                {task.completed ? (
                                  <CheckCircle
                                    fill=" #5CC781"
                                    style={{ color: "white" }}
                                    className=" "
                                  />
                                ) : (
                                  <Circle
                                    style={{ color: "#5CC781" }}
                                    className=" w-5 h-5"
                                  />
                                )}
                                <span
                                  className={`mx-2 ${
                                    task.completed
                                      ? "text-success"
                                      : "text-black"
                                  }`}
                                >
                                  {task.label}
                                </span>
                              </div>
                              <FaChevronRight className="text-muted" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            {/* Profile Details */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  title: "About",
                  content: (
                    <p className="text-start">
                      Amanda Collins is a dedicated recruiter at VertaTech
                      Solutions, a mid-sized IT services company focused on
                      delivering enterprise software and cloud-based solutions.
                    </p>
                  ),
                },
                {
                  title: "Specific Hiring Details",
                  description:
                    " I am currently hiring for a wide range of technical and non-technical roles within the software and digital transformation space.",
                  content: (
                    <ul className="list-disc list-inside text-start">
                      <li>📌 Roles / Departments Hiring For:</li>
                      <span>
                        UI/UX Design, Frontend & Backend Development, Project
                        Management, HR, QA Testing
                      </span>
                      <li>⚙️ Tech / Non-Tech Focus:</li>
                      <span>
                        Primarily Tech roles with occasional non-tech positions
                        in operations and marketing
                      </span>
                      <li>📋 Job Types:</li>
                      <span>Full-time, Internship, Contract-based</span>
                      <li>🌍 Work Modes:</li>
                      <span>
                        Work Modes: Hybrid (SF Office), Remote, Onsite
                        (Bangalore & Austin)
                      </span>
                      <li>🌐 Hiring Regions:</li>
                      <span>
                        Hiring Regions: USA, India, and Southeast Asia
                      </span>
                    </ul>
                  ),
                },
                {
                  title: "Industry Focus",
                  description:
                    "I am hiring expertise covers a broad set of industries. She is particularly active in the following:",
                  content: (
                    <ul className="list-disc list-inside text-start">
                      <li className="text-green-600">
                        <FaSquareCheck fill="#05ef6e" /> IT / Tech
                      </li>
                      <li className="text-green-600">
                        <FaSquareCheck fill="#05ef6e" /> Healthcare Tech
                      </li>
                      <li className="text-green-600">
                        <FaSquareCheck fill="#05ef6e" /> EdTech
                      </li>
                      <li className="text-green-600">
                        <FaSquareCheck fill="#05ef6e" /> Logistics & Supply
                        Chain
                      </li>
                      <li className="text-green-600">
                        <FaSquareCheck fill="#05ef6e" /> Real Estate SaaS
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Functionality",
                  description:
                    "I hire across a wide range of functional areas, with a strong focus on the following roles:",
                  content: (
                    <ul className="list-disc list-inside text-start">
                      <li className="text-green-600">
                        {" "}
                        <FaSquareCheck fill="#05ef6e" /> UI/UX Design
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <FaSquareCheck fill="#05ef6e" /> Backend Development
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <FaSquareCheck fill="#05ef6e" /> Product Management
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <FaSquareCheck fill="#05ef6e" /> Digital Marketing
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <FaSquareCheck fill="#05ef6e" /> Human Resources
                      </li>
                    </ul>
                  ),
                },
                {
                  title: "Hiring Levels",
                  content: (
                    <>
                      <div>
                        <p className="text-start mx-2">
                          I am actively recruiting across multiple career
                          stages, with a special focus on scaling mid-size
                          teams:
                        </p>
                        <ul className="text-start">
                          <li><FaSquareCheck fill="#05ef6e" /> Mid-level (3–6 years)</li>
                        </ul>
                      </div>
                    </>
                  ),
                },
              ].map(({ title, content, description }, idx) => (
                <div
                  key={idx}
                  className="Recruiter_about bg-white  rounded p-6 my-3"
                >
                  <div className="d-flex justify-content-between mb-2 mx-2">
                    <h5
                      className="text-lg font-semibold"
                      style={{ color: "#424242" }}
                    >
                      {title}
                    </h5>
                    <GoPencil
                      fill="#1E88E5"
                      size={16}
                      className="text-gray-500 cursor-pointer rounded-circle bg-light "
                    />
                  </div>
                  <p className="text-start mx-2 small">{description}</p>
                  <div className="small d-flex justify-content-start">
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row className="" style={{ margin: '0 -10px' }}>
          <h6 className="text-start">Recently Posted Jobs</h6>
          <Slider {...settings}>
            {herojobs.map((job) => (
              <div key={job.id} style={{ padding: "0 10px" }}>
                <div className="recent-job rounded-4 border shadowsm p-1">
                  <Row className="align-items-center gx-3 gy-3 ">
                    {/* Logo */}
                    <Col xs={12} md={1} className="text-center ">
                   <div  className="border border-light  ">
                       <img
                        src={job.logo}
                        alt={job.company}
                        className="w-100"
                      />
                   </div>
                    </Col>

                    {/* Info */}
                    <Col xs={12} md={3}>
                      <div className="hero-company p-3 text-start">
                        <p className="mb-1  text-muted small">{job.company}</p>
                        <h6 className="  fw-small">{job.functionality}</h6>
                      </div>
                    </Col>

                    {/* Tags */}
                    <Col
                      xs={12}
                      md={3}
                      className="align-items-md-center align-items-center justify-content-center align-items-start"
                    >
                      <div className="d-flex flex-wrap gap-2">
                        <div>
                          <div className="d-flex gap-2 flex-wrap justify-content-center">
                            <span className="hero-sub-datas small">
                              <IoLocationOutline color="#E53935" size={16} className="me-1" />
                              {job.location}
                            </span>
                          
                             <span className="hero-sub-datas small">
                          <HiDocumentText color="#1E88E5" size={16} className="me-1" />
                          {job.experience}
                        </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={3}>
                      <div className="d-flex gap-2 flex-wrap justify-content-center ">
                         <span className="hero-sub-datas small">
                              <PiCurrencyInrDuotone color="#10A441"
                                size={16}
                                className="me-1"
                              />
                              {job.salary}
                            </span>

                        <span className="hero-sub-datas small">
                          <FaNewspaper color="#3A0CA3" size={16} className="me-1" />
                          {job.postedOn}
                        </span>
                      </div>
                    </Col>

                    {/* CTA */}
                    <Col
                      xs={12}
                      md={1}
                      className="d-flex flex-column  align-items-md-center align-items-center justify-content-center text-md-end text-center"
                    >
                      <div className="d-flex flex-wrap mb-3 ">
                        <div className="d-flex gap-2 flex-wrap bookmark_icon">
                          <div className="icon_posistion">
                            <span className="hero-sub-datas">
                              <MdBookmarkBorder
                                size={20}
                                className="icon_color"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="px-1 py-1 rounded-5  hero-apply-btn small"
                        style={{
                          background: "#7b1fa2",
                          border: "none",
                          color: "white",
                        }}
                      >
                        View Job
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
}
