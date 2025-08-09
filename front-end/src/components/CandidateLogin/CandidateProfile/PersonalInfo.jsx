import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPersonalInfo } from '../../../store/features/userProfileSlice';

function PersonalInfo() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const { loading, error } = useSelector(state => state.userProfile);

  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update values
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    setFormErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const userData = {
      userId: user?.id || '',  
      firstName: formData.get('firstName')?.trim(),
      lastName: formData.get('lastName')?.trim(),
      email: user?.email || '',
      phone: formData.get('phone')?.trim(),
      dateOfBirth: formData.get('dateOfBirth'),
      gender: formData.get('gender'),
      areaLocality: formData.get('areaLocality')?.trim(),
      city: formData.get('city')?.trim(),
      state: formData.get('state'),
      pin: formData.get('pin')?.trim(),
    };
   console.log('Submitting user data:', userData);
    const errors = {};
    Object.entries(userData).forEach(([key, value]) => {
      if (!value || value === 'Select') {
        errors[key] = `${key} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    dispatch(addPersonalInfo(userData));
  };

  return (
    <Container>
      <div className="bg-light p-4 rounded">
        <div className='pt-2 pb-2 px-2' style={{ backgroundColor: '#efefef' }}>
          <h4 className="fontColorP fw-semibold">Personal Information</h4>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.firstName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Last Name</Form.Label>
                <Form.Control
                  name="lastName"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.lastName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.lastName}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Email</Form.Label>
                <Form.Control
                  name="email"
                  className='fontColorP'
                  value={user?.email || ''}
                  readOnly
                  plaintext
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Phone No</Form.Label>
                <Form.Control
                  name="phone"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.phone}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  className='fontColorP'
                  isInvalid={!!formErrors.dateOfBirth}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.dateOfBirth}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  className='fontColorP'
                  isInvalid={!!formErrors.gender}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{formErrors.gender}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Area Locality</Form.Label>
                <Form.Control
                  name="areaLocality"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.areaLocality}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.areaLocality}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>City</Form.Label>
                <Form.Control
                  name="city"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.city}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.city}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>State</Form.Label>
                <Form.Select
                  name="state"
                  className='fontColorP'
                  isInvalid={!!formErrors.state}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option>Tamil Nadu</option>
                  <option>Kerala</option>
                  <option>Karnataka</option>
                  <option>Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{formErrors.state}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='fontColorP'>Pin</Form.Label>
                <Form.Control
                  name="pin"
                  placeholder="Enter"
                  className='fontColorP'
                  isInvalid={!!formErrors.pin}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">{formErrors.pin}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" size="lg" style={{ backgroundColor: '#1e88e5' }} type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save & Next'}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default PersonalInfo;
