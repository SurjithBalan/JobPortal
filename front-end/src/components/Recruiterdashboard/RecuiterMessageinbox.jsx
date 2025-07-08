import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup, Dropdown, Badge } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
const users = [
    {
        name: "Fiesta",
        status: "I am Avaiable",
        img: "https://i.pravatar.cc/40?img=1",
        online: true,
        unread: 0,
    },
    {
        name: "Acid India",
        status: "I am Offline",
        img: "https://i.pravatar.cc/40?img=2",
        online: false,
        unread: 0,
    },
    {
        name: "Matteo",
        status: "I am busy",
        img: "https://i.pravatar.cc/40?img=3",
        online: "busy",
        unread: 2,
    },
    {
        name: "Fiesta",
        status: "I am Avaiable",
        img: "https://i.pravatar.cc/40?img=1",
        online: true,
        unread: 0,
    },
    {
        name: "Acid India",
        status: "I am Offline",
        img: "https://i.pravatar.cc/40?img=2",
        online: false,
        unread: 0,
    },
    {
        name: "Matteo",
        status: "I am busy",
        img: "https://i.pravatar.cc/40?img=3",
        online: "busy",
        unread: 2,
    },
    {
        name: "Fiesta",
        status: "I am Avaiable",
        img: "https://i.pravatar.cc/40?img=1",
        online: true,
        unread: 0,
    },
    {
        name: "Acid India",
        status: "I am Offline",
        img: "https://i.pravatar.cc/40?img=2",
        online: false,
        unread: 0,
    },
    {
        name: "Matteo",
        status: "I am busy",
        img: "https://i.pravatar.cc/40?img=3",
        online: "busy",
        unread: 2,
    },
    // Repeat similar pattern...
];


const messages = [
    { from: "Fiesta", text: "How likely are you to recommend our company to your friends and family?" },
    { from: "You", text: "How likely are you to recommend our company to your friends and family?" },
    { from: "Fiesta", text: "How likely are you to recommend our company to your friends and family?" },
];
export default function RecuiterMessageinbox() {
     const [newMessage, setNewMessage] = useState("");
  return (
   <>
    <Container fluid  style={{ minHeight: "100vh", padding: "1rem", }}>
               <Row>
                   {/* Left Sidebar */}
                   <Col md={4} lg={3}>
                       <div className="p-0 bg bg-white ">
                           <h5 className="mb-3 fw-bold fontclr text-start">Message Inbox</h5>
                           <InputGroup className="mb-3">
                               <InputGroup.Text className="bg-light border-0">
                                   <BsSearch />
                               </InputGroup.Text>
                               <Form.Control
                                   placeholder="Search Message"
                                   className="bg-light border-0"
                               />
                           </InputGroup>
   
                           {users.map((user, idx) => (
                               <div
                                   key={idx}
                                   className="mb-2 border-0 shadow-sm"
                                   style={{ borderRadius: "12px" }}
                               >
                                   <Card.Body className="d-flex align-items-center justify-content-between py-2 px-3">
                                       <div className="d-flex align-items-center gap-2">
                                           <div className="position-relative">
                                               <img
                                                   src={user.img}
                                                   alt={user.name}
                                                   className="rounded-circle"
                                                   width={45}
                                                   height={45}
                                               />
                                               {/* Status Indicator */}
                                           </div>
                                           <div>
                                               <div className="d-flex align-items-center fw-semibold">
                                                   <span
                                                       className={`me-2 p-1 border border-white rounded-circle ${user.online === true
                                                           ? "bg-success"
                                                           : user.online === "busy"
                                                               ? "bg-warning"
                                                               : "bg-danger"
                                                           }`}
                                                       style={{ width: "10px", height: "10px" }}
                                                   ></span>
                                                   <p className="mb-0 fontclr">{user.name}</p>
                                                   <p></p>
                                               </div>
                                               <div style={{ fontSize: "0.85rem", color: "#424242" }}>
                                                   {user.status}
                                               </div>
                                           </div>
                                       </div>
   
                                       {/* Unread Count Badge */}
                                       {user.unread > 0 && (
                                           <Badge
                                               bg="primary"
                                               pill
                                               style={{
                                                   fontSize: "0.75rem",
                                                   padding: "4px 8px",
                                                   minWidth: "24px",
                                                   textAlign: "center",
                                               }}
                                           >
                                               {user.unread}
                                           </Badge>
                                       )}
                                   </Card.Body>
                               </div>
                           ))}
                       </div>
                   </Col>
   
                   {/* Right Chat Area */}
                   <Col md={8} lg={9}>
                       <Row className="align-items-center justify-content-end mb-5">
                           <Col xs="auto" className="d-flex gap-4">
                               <Dropdown className="w-100 position-relative">
                                   <Dropdown.Toggle
                                       as="button"
                                       bsPrefix="btn"
                                       className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-5  w-100"
                                   >
                                       <span className='textColor-applied fontclr'>Status</span> <FaChevronDown size={12} />
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       <Dropdown.Item style={{ color: '#43a047' }}>Available</Dropdown.Item>
                                       <Dropdown.Item style={{ color: '#e53935' }}>Offline</Dropdown.Item>
                                       <Dropdown.Item style={{ color: '#f0c909' }}>Busy</Dropdown.Item>
                                   </Dropdown.Menu>
                               </Dropdown>
                               <Dropdown className="w-100 position-relative">
                                   <Dropdown.Toggle
                                       as="button"
                                       bsPrefix="btn"
                                       className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-5  w-100"
                                   >
                                       <span className='textColor-applied fontclr'>Last 2 months</span> <FaChevronDown size={12} />
                                   </Dropdown.Toggle>
                                   <Dropdown.Menu>
                                       <Dropdown.Item className='fontclr'>Last 2 months</Dropdown.Item>
                                       <Dropdown.Item className='fontclr'>Last 4 months</Dropdown.Item>
                                       <Dropdown.Item className='fontclr'>Last 6 months</Dropdown.Item>
                                       <Dropdown.Item className='fontclr'>Last 8 months</Dropdown.Item>
                                       <Dropdown.Item className='fontclr'>Last 5 Years</Dropdown.Item>
                                   </Dropdown.Menu>
                               </Dropdown>
                           </Col>
                       </Row>
                       <div className="p-3">                        {/* Header */}
                           <div className="d-flex align-items-center gap-2 mb-3 p-2 rounded" style={{background:'#fafafa'}}> 
                               <img src={users[0].img} alt="user" className="rounded-circle" width={50} height={50} />
                               <div>
                                   <div className="fw-bold fontclr">{users[0].name}</div>
                                   <div className="text-muted fontclr">Active</div>
                               </div>
                           </div>
   
                           {/* Chat Box */}
                           <div className="p-3" style={{ height: "400px", overflowY: "auto", background: "#fff", borderRadius: "10px" }}>
                               {messages.map((msg, i) => (
                                   <div
                                       key={i}
                                       className={`d-flex flex-column ${msg.from === "You" ? "align-items-end" : "align-items-start"} mb-3`}
                                   >
                                       {msg.from !== "You" && <small className="fw-semibold mb-1 fontclr">{msg.from}</small>}
                                       <div className="bg-white shadow-sm rounded p-2 fontclr" style={{ maxWidth: "70%" }}>
                                           <span style={{ fontSize: "0.95rem", color:'#424242' }}>{msg.text}</span>
                                       </div>
                                       {msg.from === "You" && <small className="mt-1">You</small>}
                                   </div>
                               ))}
                           </div>
   
                           {/* Message Input */}
                           <InputGroup className=" mb-0" style={{marginTop:'11%'}}>
                               <Form.Control
                                   placeholder="Type a message..."
                                   value={newMessage}
                                   className="shadow-none border border-1"
                                   onChange={(e) => setNewMessage(e.target.value)}
                               />
                               <div className="ms-2">
                                   <Button className="px-2 py-2  fw-semibold shadow-none" style={{ backgroundColor: '#1e88e5', minWidth: '0', minHeight: '0' }}>Send Message</Button>
                               </div>
                           </InputGroup>
                       </div>
                   </Col>
               </Row>
           </Container>
   </>
  )
}
