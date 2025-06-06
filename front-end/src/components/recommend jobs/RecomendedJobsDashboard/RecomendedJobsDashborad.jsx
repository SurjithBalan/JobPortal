import { React, useState } from 'react'
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { PiStudentDuotone } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { PiBuildingOffice } from "react-icons/pi";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LuArrowDownLeft, LuArrowUpRight } from 'react-icons/lu';
import { TiDocumentText } from "react-icons/ti";
import { PiCalendar } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";
import CompanysList from './CompanysList'
import BreadcrumbNav_recc_List from './BreadcrumbNav_recc_List'
function RecomendedJobsDashborad() {
    const JobSearchBar = () => {
        return (
            <>
                <Container className=" px-3 overflow-hidden mb-4">
                    {/* Search Box */}
                    <div className="search-box bg-primary rounded-4 p-4 shadow-sm w-100">
                        <div className='d-flex align-item-center justify-content-center py-2 pb-3'> <h2 className="text-white fs-3 fw-bold"> Recommend Jobs</h2></div>
                        <Row className="align-items-center p-2 g-0 bg-white rounded-3" >

                            <Col xs={12} md={5} className="rounded-0">
                                <Form.Control
                                    type="text"
                                    placeholder="Job title, Keywords, or Skills"
                                    className="py-3 rounded-0"
                                    style={{
                                        border: "none",                // Removes all borders
                                        borderRight: "1px solid #424242" // Adds only right border
                                    }}
                                />
                            </Col>

                            <Col xs={12} md={5} className="rounded-0">
                                <div className="position-relative">
                                    <Form.Control
                                        type="text"
                                        placeholder="Location"
                                        className="pr-5 py-3 rounded-0"
                                        style={{
                                            border: "none",                // Removes all borders
                                            borderRight: "1px solid #424242" // Adds only right border
                                        }}
                                    />
                                    <span className="input-icon-end">
                                        <MdOutlineLocationSearching />
                                    </span>
                                </div>
                            </Col>

                            <Col xs={12} md={2} className="rounded-0 ">
                                <Button
                                    variant="light"
                                    className="w-100 fw-bold text-white  py-3 rounded-2"
                                    style={{ backgroundColor: "#1e88e5", margin: "2px", minWidth: '0', }}
                                >
                                    Find Jobs
                                </Button>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </>
        );
    };

    const [minExperience, setMinExperience] = useState(0);
    const [experience, setExperience] = useState(10);

    const [minsalary, setMinsalary] = useState(0)
    const [salary, setSalary] = useState(900);


    const options = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "DevOps / Site Reliability Engineering",
        "Database Administration",
        "Cloud Computing",
        "Cybersecurity / Information Security",
        "Data Science & Analytics",
        "AI / Machine Learning",
        "IT Support / Helpdesk",
        "Product Management",
        "QA / Testing (Manual & Automation)",
        "Network Engineering",
        "Embedded Systems / IoT",
        "System Administration",
        "AR/VR Development",
        "Game Development",
        "Business Intelligence (BI)",
        "Project Management",
        "Business Analysis",
        "Operations Management",
        "Customer Success / Support",
        "Sales & Business Development",
        "Digital Marketing / SEO / SEM",
        "Technical Writing / Documentation",
        "Human Resources (HR)",
        "Finance & Accounting",
        "Legal & Compliance",
        "Content Creation / Social Media",
        "Research & Development (R&D)"
    ];

    const qualificationOptions = [
        'B.E. / B.Tech (Engineering)',
        'M.E. / M.Tech (Postgraduate Engineering)',
        'B.Com / M.Com (Commerce)',
        'CA (Chartered Accountant)',
        'MBA / PGDM (Management) ',
        'B.Pharm / M.Pharm (Pharmacy)',
        'MBBS / BDS / BPT / Nursing',
        'B.Des / BFA / BSc VisCom',
        'B.Sc / M.Sc (Science)'
    ];
    const indianLanguages = [
        "Hindi",
        "English",
        "Tamil",
        "Telugu",
        "Kannada",
        "Malayalam",
        "Gujarati",
        "Punjabi",
        "Bengali",
        "Marathi",
        "Urdu",
        "Assamese",
        "German",
        "Odia (Oriya)",
        "Konkani",
        "Spanish",
        "Sindhi",
        "Japanese",
        "Sanskrit",
        "Manipuri (Meitei)", 
        "Kashmiri",
        "Bodo", 
        "Santhali", 
        "Dogri"
    ];
    //languages dropdown and filter
    const SelectLanguage = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [selected, setSelected] = useState('');
        const [open, setOpen] = useState(false);
        const filteredOptions = indianLanguages.filter((opt) =>
            opt.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const handleSelect = (value) => {
            setSelected(value);
            setOpen(false);
            setSearchTerm('');
        };

        return (
            <div className="dropdown w-100" style={{ maxWidth: 500, margin: "auto" }}>
                <button
                    className=" d-flex btn justify-content-between align-items-center bg-white  w-100 fs-6 fw-normal"
                    type="button"
                    onClick={() => setOpen(!open)}
                    style={{ color: "#424242" }}
                >
                    <span className="d-flex align-items-center gap-2">
                        <IoLanguageOutline className="text-secondary" />
                        {selected || "Language"}
                    </span>
                    {/* Icon for dropdown */}
                    {open ? <FaChevronUp /> : <FaChevronDown />}

                </button>

                {open && (
                    <div className="dropdown-menu show w-100 p-2" style={{ maxHeight: 300, overflowY: 'auto' }}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Search..."
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt, index) => (
                                <button
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() => handleSelect(opt)}
                                >
                                    {opt}
                                </button>
                            ))
                        ) : (
                            <div className="dropdown-item disabled text-muted">No results</div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    //specific qualification dropdown and filter
    const SpecificQualificationDropdown = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [selected, setSelected] = useState('');
        const [open, setOpen] = useState(false);

        const filteredOptions = qualificationOptions.filter((opt) =>
            opt.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const handleSelect = (value) => {
            setSelected(value);
            setOpen(false);
            setSearchTerm('');
        };

        return (
            <div className="dropdown w-100" style={{ maxWidth: 500, margin: "auto" }}>
                <button
                    className=" d-flex btn justify-content-between align-items-center bg-white  w-100 fs-6 fw-normal"
                    type="button"
                    onClick={() => setOpen(!open)}
                    style={{ color: "#424242" }}
                >
                    {selected || "qualification"}
                    {/* Icon for dropdown */}
                    {open ? <FaChevronUp /> : <FaChevronDown />}

                </button>

                {open && (
                    <div className="dropdown-menu show w-100 p-2" style={{ maxHeight: 300, overflowY: 'auto' }}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Search..."
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt, index) => (
                                <button
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() => handleSelect(opt)}
                                >
                                    {opt}
                                </button>
                            ))
                        ) : (
                            <div className="dropdown-item disabled text-muted">No results</div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    //searchable dropdown for functionality
    function SearchableFunctionalityDropdown() {
        const [searchTerm, setSearchTerm] = useState('');
        const [selected, setSelected] = useState('');
        const [open, setOpen] = useState(false);

        const filteredOptions = options.filter((opt) =>
            opt.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const handleSelect = (value) => {
            setSelected(value);
            setOpen(false);
            setSearchTerm('');
        };

        return (
            <div className="dropdown w-100" style={{ maxWidth: 500, margin: "auto" }}>
                <button
                    className=" d-flex btn justify-content-between align-items-center bg-white  w-100 fs-6 fw-normal"
                    type="button"
                    onClick={() => setOpen(!open)}
                    style={{ color: "#424242" }}
                >
                    {selected || "Functionality"}
                    {/* Icon for dropdown */}
                    {open ? <FaChevronUp /> : <FaChevronDown />}

                </button>

                {open && (
                    <div className="dropdown-menu show w-100 p-2" style={{ maxHeight: 300, overflowY: 'auto' }}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Search..."
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt, index) => (
                                <button
                                    key={index}
                                    className="dropdown-item"
                                    onClick={() => handleSelect(opt)}
                                >
                                    {opt}
                                </button>
                            ))
                        ) : (
                            <div className="dropdown-item disabled text-muted">No results</div>
                        )}
                    </div>
                )}
            </div>
        );
    }








    return (
        <Container fluid className="py-4 px-3 m-3" style={{ overflowX: 'hidden' }}>
            <BreadcrumbNav_recc_List />
            <JobSearchBar />
            <Row>
                {/* Left Sidebar - Filters */}
                <Col
                    xs={12}
                    md={3}
                    lg={3}
                    className="rounded p-3 mb-3 mb-md-0 shadow-sm HRcompany-area"
                    style={{ overflowY: 'auto' }}
                >
                    <h5 className="fw-bold mb-3 fs-6">Work Mode</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5 position-relative">
                        <PiBuildingOffice className="custom-icon" />
                        <Form.Select className='custom-select'>
                            <option>On-site</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Experience Level</h5>
                    <div className="d-flex align-items-center justify-content-start mb-2 gap-5">
                        <div className="experience-box d-flex align-items-center">
                            <LuArrowDownLeft className="me-2" />
                            <span>0</span>
                        </div>
                        <div className="experience-box d-flex align-items-center">
                            <LuArrowUpRight className="me-2" />
                            <span>{experience}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-2 gap-2 mb-5">
                        <div className="custom-range-container mb-4">
                            <Form.Range
                                min={0}
                                max={20}
                                value={experience}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    setExperience(val);
                                    if (val < minExperience) setMinExperience(val); // optional logic
                                }}
                                className="custom-range"
                            />
                        </div>
                    </div>
                    <h5 className="fw-bold mt-4 mb-3 fs-6">Company Type</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <PiBuildingOffice className="custom-icon" />
                        <Form.Select className='custom-select'
                        >
                            <option>Corporate</option>
                            <option>Foreign MNC</option>
                            <option>Indian MNC</option>
                            <option>Startup</option>
                            <option>Govt/PSU</option>
                            <option>Others</option>

                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Functionality</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <SearchableFunctionalityDropdown />
                    </div>

                    <h5 className="fw-bold mb-3 fs-6">Salary Range</h5>
                    <div className="d-flex align-items-center justify-content-start mb-2 gap-5 mb-2">
                        <div className="experience-box d-flex align-items-center">
                            <PiCurrencyInrDuotone className="me-2" />
                            <span>0</span>
                        </div>
                        <div className="experience-box d-flex align-items-center">
                            <PiCurrencyInrDuotone className="me-2" />
                            <span>{salary}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-2 gap-2 mb-5">
                        <div className="custom-range-container mb-4">
                            <Form.Range
                                min={0}
                                max={900}
                                value={salary}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    setSalary(val);
                                    if (val < minsalary) setMinsalary(val); // optional logic
                                }}
                                className="custom-range"
                            />
                        </div>
                    </div>


                    <h5 className="fw-bold mb-3 fs-6">Education</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <PiStudentDuotone className="custom-icon" />
                        <Form.Select className='custom-select'>
                            <option>Diploma</option>
                            <option>Graduate</option>
                            <option>Post Graduate</option>
                            <option>PHD</option>
                            <option>Others</option>
                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Specific Qualification</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <SpecificQualificationDropdown />
                    </div>

                    <h5 className="fw-bold mb-3 fs-6">Gender</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <BsGenderAmbiguous className="custom-icon" />
                        <Form.Select className='custom-select' >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Both</option>
                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Notice Period</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <Form.Select>
                            <option>Immediately</option>
                            <option>15 Days</option>
                            <option>30 Days</option>
                        </Form.Select>
                    </div>

                    <h5 className="fw-bold mb-3 fs-6"> Job Type</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <Form.Select>
                            <option>Job Type</option>
                            <option>Full-Time </option>
                            <option>Contract</option>

                        </Form.Select>
                    </div>

                    <h5 className="fw-bold mb-3 fs-6">Career Level</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <TiDocumentText className="custom-icon" />
                        <Form.Select className='custom-select'>
                            <option>Entry Level</option>
                            <option>Junior Level</option>
                            <option>Mid Level</option>
                            <option>Senior Level</option>
                            <option>C-Suite</option>
                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Date Posted</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <PiCalendar className="custom-icon" />
                        <Form.Select className='custom-select'>
                            <option>Recent</option>
                            <option>1 Week Ago</option>
                            <option>2 Weeks Ago</option>
                            <option>3 Weeks Ago</option>
                            <option>4 Weeks Ago</option>
                        </Form.Select>
                    </div>
                    <h5 className="fw-bold mb-3 fs-6">Language</h5>
                    <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
                        <SelectLanguage />
                    </div>

                </Col>
                {/* Right Column - Job Component */}
                <Col xs={12} md={9} lg={9} className="d-flex justify-content-center text-center mt-0 w-75 p-0 ml-0">
                    <CompanysList />
                </Col>

            </Row>
        </Container>
    );
}

export default RecomendedJobsDashborad
