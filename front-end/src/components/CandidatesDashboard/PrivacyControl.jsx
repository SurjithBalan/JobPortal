import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import './PrivacyControl.css'; // Custom styles

const PrivacyControl = () => {
    const [settings, setSettings] = useState({
        hideMobile: true,
        hideEmail: true,
        showCompany: false,
        allowMessages: false,
        showProfilePic: false,
        inactiveAccount: false,
    });

    const handleToggle = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const settingsList = [
        { label: "Hide your mobile number", key: "hideMobile" },
        { label: "Hide your Email ID", key: "hideEmail" },
        { label: "Show your company name", key: "showCompany" },
        { label: "Allow candidates to message you", key: "allowMessages" },
        { label: "Show your profile pic", key: "showProfilePic" },
        { label: "Make my account inactive", key: "inactiveAccount" },
    ];

    return (
        <Container className="py-2">
            <h5 className="fw-bold mb-4 fontclr text-start fs-4">Privacy Control</h5>
            <h6 className="fw-semibold mb-4 fontclr text-start fs-4" style={{ color: '#1b7bcf', marginLeft:'280px' }}>Personal Information</h6>
            <Container className="privacy-container px-4" style={{ maxWidth: '600px' }}>
                {settingsList.map((item, idx) => (
                    <div key={idx} className="d-flex justify-content-between align-items-center py-3 border-bottom custom-setting-row">
                        <span className="setting-label text-start fontclr fs-6">• {item.label}</span>
                        <Form.Check
                            type="switch"
                            id={item.key}
                            className="custom-switch"
                            checked={settings[item.key]}
                            onChange={() => handleToggle(item.key)}
                        />
                    </div>
                ))}
            </Container>
        </Container>
    );
};

export default PrivacyControl;