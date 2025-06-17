import React from 'react';
import { Container, Row, Col, Button, Card, Badge, Dropdown } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import interviewInvite1 from '../../assets/image/interviewInvite1.jpg';
import interviewInvite2 from '../../assets/image/interviewInvite2.jpg';
import candidateImage from '../../assets/image/candidateImage.jpg';
import { FaChevronDown } from 'react-icons/fa';
import './InterviewSchedule.css';
const meetings = [
    { day: 1, time: "09:00-10:00", title: "Meeting with Hiroshi" },
    { day: 2, time: "09:00-10:00", title: "Meeting with Santiago" },
    { day: 3, time: "09:00-10:00", title: "Meeting with Liam" },
    { day: 4, time: "09:00-10:00", title: "Meeting with Björn" },
    { day: 5, time: "09:00-10:00", title: "Meeting with Jean-Luc" },
    { day: 4, time: "12:00-14:00", title: "Meeting with Jon Hendry" },
    { day: 1, time: "13:00-14:00", title: "Meeting with Arjun" },
    { day: 5, time: "13:00-14:00", title: "Meeting with Amir" },
    { day: 4, time: "16:00-17:00", title: "Meeting with Matteo" }
];

// Utility to convert "HH:MM" to total minutes
const getTimeInMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
};
// Get all time bounds
const allTimes = meetings.flatMap((m) => m.time.split("-"));
const allMins = allTimes.map(getTimeInMinutes);

// Calculate dynamic container height
const earliestStart = Math.min(...meetings.map(m => getTimeInMinutes(m.time.split("-")[0])));
const latestEnd = Math.max(...meetings.map(m => getTimeInMinutes(m.time.split("-")[1])));
// const containerHeight = latestEnd - earliestStart; // height in minutes
const minuteToPixel = 1.5; // Customize as needed
// const top = (startMin - earliestStart) * minuteToPixel;
// const height = (endMin - startMin) * minuteToPixel;
// const containerHeight = (latestEnd - earliestStart) * minuteToPixel;

const InterviewSchedule = () => {
    // const dayColumns = [1, 2, 3, 4, 5, 6, 7]; // Represents 7 days (e.g., Sunday to Saturday)
    const dayColumns = [1, 2, 3, 4, 5];
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const totalDays = 31;
    const startDay = 4; // May 1st is on Thursday (index 4 if Sunday is 0)



    const getTimeInMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return hours * 60 + minutes;
    };

    // Flatten all meeting times
    const allTimes = meetings.flatMap(m => m.time.split("-"));
    const allMinutes = allTimes.map(getTimeInMinutes);

    // Calculate range
    const earliestStart = Math.min(...allMinutes);
    const latestEnd = Math.max(...allMinutes);

    // Set ratio — adjust as needed
    const minuteToPixelRatio = 1.2;

    // Container height
    const containerHeight = (latestEnd - earliestStart) * minuteToPixelRatio;
    return (
        <Container fluid className="py-4">
            <Row>
                {/* Left Sidebar */}
                <Col xs={12} md={4} lg={3} className="bg-light p-3">
                    <h5 className="fw-bold mb-2 text-start fontclr" >Interview Schedule</h5>
                    {/* Date & Time Section */}
                    <div className="mb-3 p-3">
                        <Row className="align-items-start">
                            <Col xs={3} >
                                <h2 className="fw-bold display-4 m-0 text-start fontclr">07</h2>
                            </Col>
                            <Col xs={9} className='mb-1'>
                                <p className="mb-1 fw-semibold text-start mt-1 fontclr">Wednesday</p>
                                <p className="mb-0 fw-semibold text-start fontclr">May, 2025</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="justify-content-between align-items-center mb-2">
                            <Col xs="auto"><FaChevronLeft className='fontclr' /></Col>
                            <Col xs="auto"><strong className='fontclr'>May 2025</strong></Col>
                            <Col xs="auto"><FaChevronRight className='fontclr' /></Col>
                        </Row>

                        <Row className="text-center fw-bold fontclr">
                            {days.map((day, index) => (
                                <Col key={index}>{day}</Col>
                            ))}
                        </Row>

                        <div className="calendar-grid mt-2 mb-4">
                            {Array.from({ length: startDay }).map((_, i) => (
                                <div key={`empty-${i}`} className="calendar-cell empty fontclr"></div>
                            ))}

                            {Array.from({ length: totalDays }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`calendar-cell ${i + 1 === 7 ? 'active' : ''}`}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                        <div>
                            <h5 className="fw-bold text-start fontclr">Interview Date & Time</h5>
                            <ul className="list-unstyled">
                                <li className="interview-item d-flex justify-content-between align-items-center">
                                    <span className='fontclr'>Fiesta - Today, 3 PM</span>
                                    <span className="dots fontclr">⋮</span>
                                </li>
                                <li className="interview-item d-flex justify-content-between align-items-center">
                                    <span className='fontclr'>Acid India - 8th May 2025, 4 PM</span>
                                    <span className="dots fontclr">⋮</span>
                                </li>
                                <li className="interview-item d-flex justify-content-between align-items-center">
                                    <span className='fontclr'>Available : 18:00–19:00</span>
                                    <span className="dots fontclr">⋮</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Interview Invite Cards */}
                    {/* Card 1: Fiesta */}
                    <div className="interview-card p-3 mb-3 shadow-sm rounded">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                            <div className="d-flex align-items-center">
                                <img
                                    src={interviewInvite1}
                                    alt="user"
                                    className="rounded-circle"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                                <div className='ms-3 mb-0'>
                                    <div className="fw-semibold text-start fontclr">Fiesta</div>
                                    <small className="text-muted fontclr">Web Developer</small>
                                </div>
                            </div>
                            <Badge className="time-badge px-2" >Tdy, 3PM</Badge>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="dot fontclr">•</span><span>Chennai</span>
                            <span className="dot fontclr">•</span><span>6 LPA</span>
                        </div>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="tag tag-accept">Accept</span>
                            <span className="tag tag-reschedule">Re-Schedule</span>
                            <span className="tag tag-warning">Not Available</span>
                            <span className="tag tag-danger">Not Interested</span>
                        </div>
                    </div>

                    {/* Card 2: Acid India */}
                    <div className="interview-card p-3 mb-3 shadow-sm rounded">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img
                                    src={interviewInvite2}
                                    alt="user"
                                    className="rounded-circle"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                />
                                <div className='ms-3 mb-0'>
                                    <div className="fw-semibold text-start fontclr">Acid India</div>
                                    <small className="text-muted fontclr">Web Developer</small>
                                </div>
                            </div>
                            <Badge bg="primary" className="time-badge text-center">
                                8th May 25<br />4PM
                            </Badge>
                        </div>
                    </div>

                    {/* Card 3: Matteo */}
                    <div className="interview-card p-3 shadow-sm rounded">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <img
                                    src={candidateImage}
                                    alt="user"
                                    className="rounded-circle"
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}

                                />
                                <div className='ms-3 mb-0'>
                                    <div className="fw-semibold text-start fontclr">Matteo</div>
                                    <div className="text-muted text-center fontclr">Web Developer</div>
                                </div>
                            </div>
                            <Badge bg="primary" className="time-badge text-center">
                                9th May 25<br />11AM
                            </Badge>
                        </div>
                    </div>
                </Col>
                {/* Right Column*/}
                <Col xs={12} lg={8}>
                    <Row className="align-items-center justify-content-between mb-5">
                        <Col xs="auto">
                            <h6 className="fw-bold fontclr">May 4th - 10th, 2025</h6>
                        </Col>
                        <Col xs="auto" className="d-flex gap-4">
                            <Dropdown className="w-100 position-relative">
                                <Dropdown.Toggle
                                    as="button"
                                    bsPrefix="btn"
                                    className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-5  w-100"
                                >
                                    <span className='textColor-applied fontclr'>Week</span> <FaChevronDown size={12} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item className='fontclr'>Week</Dropdown.Item>
                                    <Dropdown.Item className='fontclr'>Day</Dropdown.Item>
                                    <Dropdown.Item className='fontclr'>Months</Dropdown.Item>
                                    <Dropdown.Item className='fontclr'>Years</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <div className="d-flex border-top border-bottom py-2">
                        {["4", "5", "6", "7", "8", "9", "10"].map((date, i) => (
                            <div key={i} className="text-center flex-fill fontclr">
                                <div className={`rounded-circle mx-auto mt-1 ${date === "7" ? 'bg-primary text-white' : ''}`} style={{ width: 30, height: 30, lineHeight: '30px' }}>{date}</div>
                                <div className={`fw-semibold ${date === "7" ? 'text-primary' : ''}`}>{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i]}</div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex border-top border-bottom" style={{ position: "relative" }}>
                        {dayColumns.map((day) => {
                            const dayMeetings = meetings.filter((m) => m.day === day);

                            return (
                                <div
                                    key={day}
                                    className="flex-grow-1 border-start d-flex"
                                    style={{
                                        position: "relative",
                                        height: `${containerHeight}px`,
                                    }}
                                >
                                    {dayMeetings.map((meeting, i) => {
                                        const [start, end] = meeting.time.split("-");
                                        const startMin = getTimeInMinutes(start);
                                        const endMin = getTimeInMinutes(end);

                                        // Apply scaling
                                        const top = (startMin - earliestStart) * minuteToPixelRatio;
                                        const height = (endMin - startMin) * minuteToPixelRatio;

                                        return (
                                            <div
                                                key={i}
                                                className="position-absolute border rounded small px-2 py-1 text-primary bg-white"
                                                style={{
                                                    top: `${top}px`,
                                                    height: `${height}px`,
                                                    left: "10%",
                                                    width: "80%",
                                                    borderColor: "#2196f3",
                                                    fontSize: "0.85rem",
                                                    lineHeight: "1.2",
                                                    boxShadow: "0 0 3px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                <div className="fw-semibold" style={{ marginBottom: "2px", lineHeight: "1.1" }}>
                                                    {meeting.title}
                                                </div>
                                                <div className="text-muted" style={{ lineHeight: "1.1", fontSize: "0.75rem" }}>
                                                    {meeting.time}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default InterviewSchedule;
