import React, { useState, useEffect } from "react";
import "../featurefilter/featurefilter.css";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { CiFilter } from "react-icons/ci";
import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import UserNavbar from "../usernavbar/UserNavbar";
import Pagination from "../herofilter/Pagination.jsx";
import herojobs from "../data/herojobs";
import dateOptions from "../data/dateoptions.js";
import qualification from "../data/qualification.js";
import industry from "../data/industry.js";
import language from "../data/language.js";
import functionality from "../data/functionality.js";
import Filters from "../joblisting/filtersidebar/Filters.jsx";

export default function Featurefilter() {
  const [jobs, setJobs] = useState(herojobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Default");
  const [sort, setSort] = useState("Default");
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [functionalityFilter, setFunctionalityFilter] = useState("");
  const [education, setEducation] = useState("");
  const [specificQualification, setSpecificQualification] = useState("");
  const [gender, setGender] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [datePosted, setDatePosted] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [careerLevel, setCareerLevel] = useState("");
  // Sidebar States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  //Salary Range fliter
  const [range, setRange] = useState([10000, 50000]);

  const handleSliderChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setRange([min, max]);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), range[1] - 1000);
    setRange([value, range[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), range[0] + 1000);
    setRange([range[0], value]);
  };
  // Experience Range filter

  const minExpLimit = 0;
  const maxExpLimit = 20;

  const [minExperience, setMinExperience] = useState(1);
  const [maxExperience, setMaxExperience] = useState(10);

  const handleminimumChange = (e) => {
    const value = Math.min(Number(e.target.value), maxExperience - 1);
    setMinExperience(value);
  };

  const handleMaximumChange = (e) => {
    const value = Math.max(Number(e.target.value), minExperience + 1);
    setMaxExperience(value);
  };

  const handleSlidChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setMinExperience(min);
    setMaxExperience(max);
  };

  // handle search input
  const handleFindClick = () => {
    let updatedJobs = [...herojobs];

    // Search by Job Title
    if (search) {
      updatedJobs = updatedJobs.filter((job) =>
        job.functionality.toLowerCase().includes(search.toLowerCase())
      );
    }
    //  search by Location
    if (searchLocation) {
      updatedJobs = updatedJobs.filter((job) =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    setJobs(updatedJobs);
    setCurrentPage(1);
  };

  // handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  // handle sort change
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  // Filter and Sort Jobs
  useEffect(() => {
    let updatedJobs = [...herojobs];

    if (search) {
      updatedJobs = updatedJobs.filter((job) =>
        job.functionality.toLowerCase().includes(search.toLowerCase())
      );
    }

    //  search by Location
    if (searchLocation) {
      updatedJobs = updatedJobs.filter((job) =>
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (filter !== "Default") {
      updatedJobs = updatedJobs.filter((job) => job.jobType === filter);
    }

    if (jobType) {
      updatedJobs = updatedJobs.filter((job) => job.jobType === jobType);
    }

    if (careerLevel) {
      updatedJobs = updatedJobs.filter(
        (job) => job.careerLevel === careerLevel
      );
    }

    if (workMode) {
      updatedJobs = updatedJobs.filter((job) => job.workMode === workMode);
    }

    if (industryFilter) {
      updatedJobs = updatedJobs.filter(
        (job) => job.industry === industryFilter
      );
    }

    if (companyType) {
      updatedJobs = updatedJobs.filter(
        (job) => job.companyType === companyType
      );
    }

    if (functionalityFilter) {
      updatedJobs = updatedJobs.filter(
        (job) => job.functionality === functionalityFilter
      );
    }

    if (education) {
      updatedJobs = updatedJobs.filter((job) => job.education === education);
    }

    if (specificQualification) {
      updatedJobs = updatedJobs.filter(
        (job) => job.qualification === specificQualification
      );
    }

    if (gender) {
      updatedJobs = updatedJobs.filter((job) => job.gender === gender);
    }

    if (noticePeriod) {
      updatedJobs = updatedJobs.filter(
        (job) => job.noticePeriod === noticePeriod
      );
    }

    if (datePosted) {
      updatedJobs = updatedJobs.filter((job) => job.postedOn === datePosted);
    }

    if (languageFilter) {
      updatedJobs = updatedJobs.filter(
        (job) => job.language === languageFilter
      );
    }

    // Experience Range
    updatedJobs = updatedJobs.filter(
      (job) =>
        job.experienceMin >= minExperience && job.experienceMax <= maxExperience
    );

    // Salary Range
    updatedJobs = updatedJobs.filter(
      (job) => job.salary >= range[0] && job.salary <= range[1]
    );

    // Sorting
    if (sort === "A-Z") {
      updatedJobs.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "Z-A") {
      updatedJobs.sort((a, b) => b.title.localeCompare(a.title));
    }

    setJobs(updatedJobs);
    setCurrentPage(1);
  }, [
    search,
    filter,
    sort,
    jobType,
    workMode,
    industryFilter,
    companyType,
    functionalityFilter,
    education,
    specificQualification,
    gender,
    noticePeriod,
    datePosted,
    languageFilter,
    minExperience,
    maxExperience,
    range,
    searchLocation,
    careerLevel,
  ]);

  // pagination
  const jobsPerPage = 14;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <UserNavbar />
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className=" home-search-filter my-5">
              <p className="my-3">Home</p>
              <ul className="my-3">
                <li>Search Filter</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="feature-search-input mt-4">
              <div className="text-white fw-bold my-2 d-flex justify-content-center">
                <h2>Featured Jobs</h2>
              </div>
              <div className="container my-2 p-0 rounded-2">
                <div className="bg-white p-3 rounded-2">
                  <Row className="g-2">
                    {/* Job title input */}
                    <Col xs={12} md={4}>
                      <div className="input-group">
                        <span className="input-group-text bg-transparent">
                          <MdOutlineWorkOutline />
                        </span>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Job title, Keywords, or Skills"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                    </Col>

                    {/* Location input */}
                    <Col xs={12} md={4}>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control shadow-none"
                          placeholder="Location"
                          value={searchLocation}
                          onChange={(e) => setSearchLocation(e.target.value)}
                        />
                        <span className="input-group-text bg-transparent">
                          <TbCurrentLocation />
                        </span>
                      </div>
                    </Col>

                    {/* Find Jobs button */}
                    <Col xs={12} md={4}>
                      <button
                        onClick={handleFindClick}
                        className=" btn-purple border-0 rounded-2 btn-shadow w-100 py-2"
                      >
                        Find Jobs
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className="search-button my-2">
              <div>
                <button className="search-gp-btn rounded-pill  mx-3">
                  All
                </button>
                <button className="search-gp-btn rounded-pill  mx-3">
                  Remote
                </button>
                <button className="search-gp-btn rounded-pill mx-3">
                  Full - time
                </button>
                <button className="search-gp-btn rounded-pill mx-3">
                  Hybrid
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3} className="my-4">
            <Filters/>
          </Col>
          <Col md={9}>
            <div>
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <Col xs={12} key={job.id}>
                    <div className="shadow rounded-4 px-2 py-3 border-0 my-4">
                      <Row className="align-items-center gx-3 gy-3">
                        {/* Logo */}
                        <Col xs={12} md={1} className="text-center ">
                          <img
                            src={job.logo}
                            alt={job.company}
                            className="hero-logo"
                          />
                        </Col>

                        {/* Info */}
                        <Col xs={12} md={2}>
                          <div className="hero-company">
                            <p className="mb-1 fw-medium ">{job.company}</p>
                            <h6 className="text-muted  ">
                              {job.functionality}
                            </h6>
                          </div>
                        </Col>

                        {/* Tags */}
                        <Col
                          xs={12}
                          md={7}
                          className="align-items-md-center align-items-center justify-content-center align-items-start"
                        >
                          <div className="d-flex flex-wrap gap-2">
                            <div>
                              <div className="d-flex gap-2 flex-wrap">
                                <span className="hero-badge1">Featured</span>
                                <span className="hero-badge2">Full Time</span>
                                <span className="hero-badge3">
                                  {job.applicants} Applicants
                                </span>
                                <span className="hero-badge4">
                                  {job.Open_Positions} Open Positions
                                </span>
                              </div>
                            </div>
                            <div className="d-flex gap-2 flex-wrap">
                              <span className="hero-sub-datas">
                                <IoLocationOutline size={16} className="me-1" />
                                {job.location}
                              </span>
                              <span className="hero-sub-datas">
                                <HiDocumentText size={16} className="me-1" />
                                {job.experience}
                              </span>
                              <span className="hero-sub-datas">
                                <PiCurrencyInrDuotone
                                  size={16}
                                  className="me-1"
                                />
                                {job.salary}
                              </span>
                              <span className="hero-sub-datas">
                                <FaNewspaper size={16} className="me-1" />
                                NP 30 days
                              </span>
                            </div>
                          </div>
                        </Col>

                        {/* CTA */}
                        <Col
                          xs={12}
                          md={1}
                          className="d-flex flex-column  align-items-md-center align-items-center justify-content-center text-md-end text-center"
                        >
                          <Button
                            className="px-2 py-1 rounded-5  hero-apply-btn "
                            style={{
                              background: "#7b1fa2",
                              border: "none",
                              color: "white",
                            }}
                          >
                            Apply Now
                          </Button>
                          <div className=" hero-posted-date  mt-2">
                            Posted on {job.postedOn}
                          </div>
                        </Col>
                        <Col
                          xs={12}
                          md={1}
                          className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center"
                        >
                          <div></div>
                          <div className="d-flex flex-wrap gap-2">
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
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))
              ) : (
                <p>No job Found </p>
              )}
            </div>
          </Col>
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobs.length}
            paginate={paginate}
            activePage={currentPage}
          />
        </Row>
      </Container>
    </>
  );
}
