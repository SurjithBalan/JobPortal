import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Badge,
} from "react-bootstrap";
import "./postJobForm.css";
import "react-phone-input-2/lib/style.css";
import { BsPlusLg, BsX } from "react-icons/bs";
import { FaRegListAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { BsCreditCard2Front } from "react-icons/bs";
import { PiCityFill } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import { BsCardHeading } from "react-icons/bs";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaIdCardClip } from "react-icons/fa6";
import { LiaCitySolid } from "react-icons/lia";
import { MdWorkOutline } from "react-icons/md";
import { PiOfficeChair } from "react-icons/pi";
import { IoIosLaptop } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";
import { PiListNumbers } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { PiNotebookLight } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
const PostJobForm = () => {
  const [skills, setSkills] = useState([
    "UI Designer",
    "Figma",
    "UX Designer",
    "Figma",
    "UI Designer",
    "UX Designer",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = () => {
    if (inputValue.trim() !== "") {
      setSkills([...skills, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <Container className="py-4">
      <h4 className="mb-4 fs-4 text-start">Post a New job</h4>
      <Form>
        {/* Job Title */}
        <Form.Group controlId="jobTitle" className="mb-3 ">
          <Form.Label className="text-start d-block text-form-label">
            <FaIdCard className="mx-2"/> Company Name *
          </Form.Label>
          <Form.Control type="text" placeholder="" className="bg-light shadow-none" />
        </Form.Group>
        <Row className="g-3">
          <Col md={6}>
            <Form.Group controlId="category" className=" mt-4 text-start">
              <Form.Label>< CiLocationArrow1 className="mx-2"/> Locality</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Enter Office Location</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="category" className=" mt-4 text-start">
              <Form.Label> <FaCity className="mx-2"/> City</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Enter City Name</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <div className="text-end ">
            <button className="rounded-2 bg-primary border border-none text-white  p-2">
              + Add More Locations
            </button>
          </div>
        </Row>
        <Form.Group controlId="jobTitle" className="mb-3 mt-4">
          <Form.Label className="text-start d-block text-form-label">
            < BsCreditCard2Front className="mx-2"/> Job Title *
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Job Title"
            className="bg-light shadow-none"
          />
        </Form.Group>
        <Form.Group controlId="jobTitle" className="mb-3 mt-4">
          <Form.Label className="text-start d-block text-form-label">
            < PiCityFill className="mx-2"/> About Company
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter About Company"
            className="bg-light shadow-none"
          />
        </Form.Group>
        {/* Job Description */}
        <Form.Group controlId="jobDescription" className="text-start mb-4">
          <Form.Label><CiCreditCard2 className="mx-2"/> Job Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Job Description"
            rows={5}
            className="bg-light shadow-none"
          />
        </Form.Group>

        {/* Skill */}
        <div className="mb-3  rounded-3 ">
          <Row className="align-items-center mb-2">
            <Col xs="auto">
              <FaRegListAlt size={18} className="me-2" />
              Skills
            </Col>
          </Row>

          <Row className="g-2">
            <Col md={6}>
              <InputGroup className="bg-light rounded">
                <Form.Control
                  placeholder="Add Minimum 6 Skills"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="border-none bg-light shadow-none"
                />
                <button  variant="primary" className=" border border-none mx-3 my-2 bg-primary rounded-2 p-2" onClick={handleAddSkill}>
                  <BsPlusLg  />
                </button >
              </InputGroup>
            </Col>

            <Col md={6}>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    pill
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center border"
                  >
                    {skill} 
                    <BsX
                      role="button"
                      className="ms-2"
                      onClick={() => handleRemoveSkill(index)}
                    />
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        {/* Information */}
        <h5 className="mb-3 text-start">Information</h5>
        <Row className="g-3">
          <Col md={4}>
            <Form.Group controlId="category" className="text-start">
              <Form.Label><BsCardHeading className="mx-2"/> Category</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Category</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="qualification" className="mt-4 text-start">
              <Form.Label><LiaCitySolid className="mx-2"/> Company Type</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Company Type</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="qualification" className="mt-4 text-start">
              <Form.Label><MdWorkOutline className="mx-2"/> Experience</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Experience</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="qualification" className="mt-4 text-start">
              <Form.Label><PiOfficeChair className="mx-2"/> Work Mode</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Work Mode</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="industry" className="text-start">
              <Form.Label><LiaIndustrySolid className="mx-2"/> Industry</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Industry</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="jobType" className="text-start mt-4">
              <Form.Label><IoIosLaptop className="mx-2"/> Job Type</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Job Type</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="jobType" className="text-start mt-4">
              <Form.Label><MdCurrencyRupee className="mx-2"/> CTC Range</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>CTC Range</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="jobType" className="text-start mt-4">
              <Form.Label><PiListNumbers className="mx-2"/> No. of Positions Open</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>No. of Positions Open</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="careerLevel text-start">
              <Form.Label className="text-start d-block">
                <FaIdCardClip className="mx-2"/> Career Level
              </Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Career Level</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="experience " className="mt-4">
              <Form.Label className="text-start d-block">
                <PiNotebookLight className="mx-2"/> Qualification
              </Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Qualification</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="experience " className="mt-4">
              <Form.Label className="text-start d-block"><BsGenderAmbiguous className="mx-2"/> Gender</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Gender</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="experience " className="mt-4">
              <Form.Label className="text-start d-block">
                <MdOutlineLocalPhone className="mx-2"/> Phone Number
              </Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Phone Number</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="qualification" className="mt-4 text-start">
              <Form.Label><IoMdTime className="mx-2"/> Shift Timing</Form.Label>
              <Form.Select className="bg-light shadow-none">
                <option>Shift Timing</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={8}>
            <Form.Group controlId="qualification" className="mt-4 text-start">
              <Form.Label><CgDanger className="mx-2"/>Important Information</Form.Label>
               <Form.Control
            type="text"
            placeholder=""
            className="bg-light shadow-none"
          />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end my-4 ">
          <Button
            variant="primary"
            size="md"
            className="text-white rounded-pill mx-4"
            style={{ backgroundColor: "#1e88e5" }}
          >
            Publish Job
          </Button>
          <Button
            variant="primary"
            size="md"
            className="text-white rounded-pill px-2"
            style={{ backgroundColor: "#1e88e5" }}
          >
            Save & Draft
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostJobForm;
