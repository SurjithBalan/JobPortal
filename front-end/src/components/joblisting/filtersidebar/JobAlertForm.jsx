import React, { useState } from 'react';
import { Form, Button,  Container,Col, Row } from 'react-bootstrap';
import { MdOutlineMail } from "react-icons/md";
const JobAlertForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'Daily'
  });

  const frequencies = [
    'Daily', 'Weekly', 'Fortnightly', 'Monthly',
    'Biannually', 'Annually', 'Never'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Job Alert Created!\nName: ${formData.name}\nEmail: ${formData.email}\nFrequency: ${formData.frequency}`);
  };

  return (
    <Container fluid className=" my-3  border" style={{ maxWidth: '400px' }}>
      <Row>
        <Col className='p-0'>
        <div className=" email_alert w-100 p-2  text-white d-flex justify-content-center align-content-between align-items-center" style={{backgroundColor:"#1E88E5"}}>
        
        <h6> <MdOutlineMail className=' mx-1' />Email Me New Jobs</h6>
      </div>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Job alert name..."
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="example@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="mb-3">
          {frequencies.map((freq, idx) => (
            <Form.Check
              key={idx}
              type="radio"
              label={freq}
              name="frequency"
              value={freq}
              checked={formData.frequency === freq}
              onChange={handleChange}
              className="mb-1"
            />
          ))}
        </div>

        <Button type="submit" variant="primary" className="w-100 my-2 d-flex justify-content-center align-content-center">
          Create Alert
        </Button>
      </Form>
    </Container>
  );
};

export default JobAlertForm;
