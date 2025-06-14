import React, { useState } from "react";
import { Container, Button, Nav } from "react-bootstrap";
import PersonalInfo from './PersonalInfo'
import PersonalDetails from './PersonalDetails'
import EducationalQualification from './EducationalQualification'
import ResumeAndpresence from './ResumeAndpresence'

const CandidatequickProfilePage = () => {
    const [activeStep, setActiveStep] = useState("PersonalInfo");
    const handleComponentDisplay = (step) => {
        setActiveStep(step);
    };
    return (<>
        <Container>
            <div className="bg-white text-white p-3 mb-4">
                <h6 className="ms-2 fs-2 text-dark" style={{color:'#424242'}}>Quick Profile</h6>
                <Nav className="profile-steps d-flex justify-content-between align-items-center flex-wrap mt-2 g-3">
                    <Nav.Item>
                        <Button
                            className="rounded-pill px-3"
                            onClick={() => handleComponentDisplay("PersonalInfo")}
                            style={{ backgroundColor: '#1e88e5' }} >
                            1. Personal Information
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            className="rounded-pill"
                            onClick={() => handleComponentDisplay("PersonalDetails")}
                            style={{ backgroundColor: '#1e88e5' }} >
                            2. Professional Details
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            className="rounded-pill"
                            onClick={() => handleComponentDisplay("Education")}
                            style={{ backgroundColor: '#1e88e5' }} >
                            3. Educational Qualifications
                        </Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button
                            className="rounded-pill"
                            onClick={() => handleComponentDisplay("Resume")}
                            style={{ backgroundColor: '#1e88e5' }} >
                            4. Resume & Online Presence
                        </Button>
                    </Nav.Item>
                </Nav>
            </div>
            {activeStep === "PersonalInfo" && <PersonalInfo />}
            {activeStep === "PersonalDetails" && <PersonalDetails />}
            {activeStep === "Education" && <EducationalQualification />}
            {activeStep === "Resume" && <ResumeAndpresence />}
        </Container>
    </>
    );
};
export default CandidatequickProfilePage;
