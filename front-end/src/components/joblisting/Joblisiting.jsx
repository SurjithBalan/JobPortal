import React, { useState, useEffect } from "react";
import "../joblisting/joblisting.css";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaRupeeSign, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";

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
import FilterDropdown from "./filtersidebar/FilterDropdown.jsx";
import LocationFilter from "./filtersidebar/LocationFilter.jsx";
import JobAlertForm from "./filtersidebar/JobAlertForm.jsx";
import FilterBar from "./filtersidebar/FilterBar.jsx";
import Education from "../data/education.js";
import Filters from "./filtersidebar/Filters.jsx";

export default function Joblisiting() {
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
    searchLocation,
  ]);

  // pagination
  const jobsPerPage = 5;
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
                <li>Job listing Page</li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="feature-search-input mt-4">
              <div className="text-white fw-bold my-2 d-flex justify-content-center">
                <h2>SEARCH ONCE, EXPLORE ENDLESS JOB OPPORTUNITIES...</h2>
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
        </Row>

        <Row>
          <Col md={3} className="my-4">
            <Filters />
          </Col>
          <Col md={9}>
            <div>
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <Col xs={12} key={job.id}>
                    <div
                      className={`joblisting_card mb-4 my-4 p-4 position-relative border  ${
                        job.featured ? "border-primary" : ""
                      }`}
                    >
                      {/* Heart Icon */}
                      <div className="position-absolute top-0 end-0 p-3">
                        <div
                          className="bg-danger rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}
                        >
                          <FiHeart color="white" />
                        </div>
                      </div>

                      <Row>
                        {/* Left: Logo */}
                        <Col
                          md={2}
                          className="d-flex align-items-start justify-content-center "
                        >
                          <div className="ribbon-container">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="img-fluid border border-secondary-subtle"
                              style={{
                                width: "90px",
                                height: "90px",
                                padding:"15px",
                                objectFit: "contain",
                              }}
                            />
                            {job.featured && <div className="ribbon">Featured</div>}
                          </div>
                        </Col>

                        {/* Right: Info */}
                        <Col md={10}>
                          {/* Badges */}
                          <div className="d-flex flex-wrap mb-2 gap-2">
                            {job.badges.map((badge, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 border border-primary rounded-pill text-secondary"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <h5 className="fw-bold">{job.functionality}</h5>
                          <p className="text-primary mb-1">@ {job.company}</p>

                          {/* Salary, Experience, Location */}
                          <div className="d-flex flex-wrap gap-4 text-muted mb-3">
                            <span>
                              <FaRupeeSign className="me-1" color="#10A441" />
                              {job.salary}
                            </span>
                            <span>
                              <FaSuitcase className="me-1" color="#6C47FE" />
                              {job.experience}
                            </span>
                            <span>
                              <FaMapMarkerAlt className="me-1 text-danger" />
                              {job.location}
                            </span>
                          </div>

                          {/* Tags */}
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {job.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-success bg-opacity-10 rounded-pill border border-success-subtle text-dark"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Meta Info */}
                          <div className="d-flex flex-wrap gap-3 mb-4">
                            <span className="bg-light px-1 py-1 rounded text-muted d-flex align-items-center">
                              <SlCalender className="me-2" />
                              {job.datePosted}
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              {job.positions}
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              Male / Female
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              IT Graduates
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              Day Shift
                            </span>
                          </div>
                        </Col>
                        <Col>
                          {/* Button */}
                          <div className="d-flex justify-content-center">
                            <Button
                              variant="primary"
                              className="rounded-pill px-4"
                            >
                              View Job
                            </Button>
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
