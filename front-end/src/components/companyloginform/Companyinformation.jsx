import React from "react";
import "../companyloginform/Companyinformation.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "../../assets/image/skylarklogoblue.png";
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import industry from "../data/industry";
const steps = ["Company Information", "Industry Sector", "Recruitment Details"];
export default function Companyinformation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    companyType: "Select",
    establishmentYear: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    gstNumber: "",
    IndustrySector: "",
    primaryContactName: "",
    primaryContactDesignation: "",
    primaryContactPhone: "",
    primaryContactEmail: "",
    secondaryContactName: "",
    secondaryContactDesignation: "",
    secondaryContactPhone: "",
    secondaryContactEmail: "",
    termsAccepted: false,
  });

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 0) {
      if (!formData.companyName.trim())
        newErrors.companyName = "Company name is required";
      if (!formData.companyWebsite.trim())
        newErrors.companyWebsite = "Website is required";
      if (!formData.companyType || formData.companyType === "Select")
        newErrors.companyType = "Company type is required";
      if (formData.establishmentYear.length != 4)
        newErrors.establishmentYear = "Enter valid year";
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state || formData.state === "Select")
        newErrors.state = "State is required";
      if (!formData.country || formData.country === "Select")
        newErrors.country = "Country is required";
      if (!formData.pincode || !/^\d{6}$/.test(formData.pincode))
        newErrors.pincode = "Pincode is required";
      if (!formData.gstNumber || !/^[0-9A-Z]{15}$/.test(formData.gstNumber))
        newErrors.gstNumber = "GST number is required";
    } else if (currentStep === 1) {
      if (!formData.IndustrySector)
        newErrors.IndustrySector = "Industry Sector required";
      if (!formData.primaryContactName.trim())
        newErrors.primaryContactName = "Name is required";
      if (!formData.primaryContactDesignation.trim())
        newErrors.primaryContactDesignation = "Designation is required";
      if (!formData.primaryContactPhone.trim())
        newErrors.primaryContactPhone = "Phone is required";
      if (!formData.primaryContactEmail.trim())
        newErrors.primaryContactEmail = "Email is required";
      // Secondary Contact
      // if (!formData.secondaryContactName.trim())
      //   newErrors.secondaryContactName = "Name is required";
      // if (!formData.secondaryContactDesignation.trim())
      //   newErrors.secondaryContactDesignation = "Designation is required";
      // if (!formData.secondaryContactPhone.trim())
      //   newErrors.secondaryContactPhone = "Phone is required";
      // if (!formData.secondaryContactEmail.trim())
      //   newErrors.secondaryContactEmail = "Email is required";
    } else if (currentStep === 2) {
      if (!formData.termsAccepted)
        newErrors.termsAccepted = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please fill all required fields before proceeding.");
      return;
    }
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="form-info mb-5 ">
            <h6 className="d-flex justify-content-start py-3 ">
              Company Information
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label ">
                    Company Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      isInvalid={!!errors.companyName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.companyName}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Company Website
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.companyWebsite}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyWebsite: e.target.value,
                        })
                      }
                      isInvalid={!!errors.companyWebsite}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.companyWebsite}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Company Type
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                      value={formData.companyType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyType: e.target.value,
                        })
                      }
                      isInvalid={!!errors.companyType}
                    >
                      <option value="Select"> Select </option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="Public Limited">Public Limited</option>
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnershipp">Partnership</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.companyType}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Year of Establishment
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      placeholder="YYY"
                      value={formData.establishmentYear}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          establishmentYear: e.target.value,
                        })
                      }
                      isInvalid={!!errors.establishmentYear}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.establishmentYear}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Registered Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      as="textarea"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    City
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    State
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      isInvalid={!!errors.state}
                    >
                      <option value="Select"> Select </option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="Public Limited">Public Limited</option>
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnershipp">Partnership</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Country
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      isInvalid={!!errors.country}
                    >
                      <option value="Select"> Select </option>
                      <option value="Private Limited">Private Limited</option>
                      <option value="Public Limited">Public Limited</option>
                      <option value="Proprietorship">Proprietorship</option>
                      <option value="Partnershipp">Partnership</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.country}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Pincode
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.pincode}
                      onChange={(e) =>
                        setFormData({ ...formData, pincode: e.target.value })
                      }
                      isInvalid={!!errors.pincode}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.pincode}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Corporate GST Number
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.gstNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          gstNumber: e.target.value,
                        })
                      }
                      isInvalid={!!errors.gstNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.gstNumber}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <div className="d-flex justify-content-between mx-4">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="my-3"
              >
                <MdOutlineKeyboardDoubleArrowLeft /> Back
              </button>
              <button
                className="my-3"
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
              >
                Save & next <HiOutlineChevronDoubleRight />
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="form-info mb-5 ">
            <h6 className="d-flex justify-content-start py-3 ">
              Industry Sector
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Industry Sector (They Cater To)
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                      value={formData.IndustrySector}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          IndustrySector: e.target.value,
                        })
                      }
                      isInvalid={!!errors.IndustrySector}
                    >
                      <option value="Select"> Select </option>
                      {industry.map((state, index) => (
                        <option key={index} value="Private Limited">
                          {state}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.IndustrySector}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <h6 className="d-flex justify-content-start py-3 ">
              Primary Contact (Level 1 Contact Person)
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Full Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.primaryContactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryContactName: e.target.value,
                        })
                      }
                      isInvalid={!!errors.primaryContactName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.primaryContactName}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Designation
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      className="w-50"
                      value={formData.primaryContactDesignation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryContactDesignation: e.target.value,
                        })
                      }
                      isInvalid={!!errors.primaryContactDesignation}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.primaryContactDesignation}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Mobile Number
                  </Form.Label>
                  <Col sm="10">
                    <PhoneInput
                      className="phone"
                      value={formData.primaryContactPhone}
                      onChange={(value) =>
                        setFormData({ ...formData, primaryContactPhone: value })
                      }
                      isInvalid={!!errors.primaryContactPhone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.primaryContactPhone}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Email Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="email"
                      className="w-50"
                      value={formData.primaryContactEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          primaryContactEmail: e.target.value,
                        })
                      }
                      isInvalid={!!errors.primaryContactEmail}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.primaryContactEmail}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Alternate Number (Optional)
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" className="w-50" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <h6 className="d-flex justify-content-start py-3 ">
              Secondary Contact (Level 2 Contact Person)
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Full Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Designation
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Mobile Number
                  </Form.Label>
                  <Col sm="10">
                    <PhoneInput
                      className="phone"
                      value={value}
                      onChange={setValue}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Email Address
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" className="w-50" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Alternate Number (Optional)
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" className="w-50" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <div className="d-flex justify-content-between mx-4">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="my-3"
              >
                <MdOutlineKeyboardDoubleArrowLeft /> Back
              </button>
              <button
                className="my-3"
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
              >
                Save & next <HiOutlineChevronDoubleRight />
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-info mb-5 ">
            <h6 className="d-flex justify-content-start py-3 ">
              Recruitment Details
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Types of Hiring you do
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                    >
                      <option value="Select"> Select </option>
                      {industry.map((state, index) => (
                        <option key={index} value="Private Limited">
                          {state}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextPassword"
                >
                  <Form.Label column sm="2" className="col-form-label">
                    Geographies You Serve
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-50"
                    >
                      <option value="Select"> Select </option>
                      {industry.map((state, index) => (
                        <option key={index} value="Private Limited">
                          {state}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <h6 className="d-flex justify-content-start py-3 ">
              Recruitment Capacity
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Number of Active Recruiters
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="text" className="w-50" />
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <h6 className="d-flex justify-content-start py-3 ">
              Add-ons (Optional but Insightful)
            </h6>
            <div className="form_data mx-3">
              <Form>
                <Form.Group as={Row} className="mb-4" controlId="company name">
                  <Form.Label column sm="2" className="col-form-label">
                    Company Logo
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="file" className="w-50" />
                  </Col>
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id="checkbox"
                    label="Accept Terms & Conditions"
                    checked={formData.termsAccepted}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        termsAccepted: e.target.checked,
                      })
                    }
                  />
                </div>
              </Form>
            </div>
            <div className="d-flex justify-content-between mx-4">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="my-3"
              >
                <MdOutlineKeyboardDoubleArrowLeft /> Back
              </button>
              <button className="my-3">
                Save & next <HiOutlineChevronDoubleRight />
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} className="image-top py-3">
            <div className="company-top-logo">
              <img src={logo} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12}>
            <h4 className="d-flex justify-content-start my-4 mx-4 fs-3 fw-bolder">
              Company Registration
            </h4>
            <div>
              <div className=" w-auto ">
                {/* Stepper */}
                <div className="stepper d-flex align-items-center  justify-content-center flex-nowrap overflow-auto gap-2 w-100 mb-4">
                  {steps.map((label, index) => (
                    <React.Fragment key={index}>
                      <div
                        className={`step-label  rounded-pill text-center   duration-300 ${
                          currentStep === index
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                        style={{ minWidth: "100px" }}
                      >
                        {index + 1}. {label}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className="flex-grow-1 border-top border-2 border-dark "
                          style={{ height: "2px" }}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Step Content */}
                <div className="border p-6 rounded shadow bg-white">
                  {renderStepContent()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
