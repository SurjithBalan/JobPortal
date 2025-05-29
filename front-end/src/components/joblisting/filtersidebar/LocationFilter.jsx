import React, { useState } from 'react';
import { Collapse, Button, Form, Card, Container } from 'react-bootstrap';

const stateCityLocalityMap = {
  "Tamil Nadu": {
    "Nagappatinam": ["thevur", "kizhvelur"],
    "Thiruvarur": ["Thevur", "Mayiladuthurais"]
  },
  
};

const LocationFilter = () => {
  const [open, setOpen] = useState(true);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
    setLocality('');
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setLocality('');
  };

  const handleLocalityChange = (e) => {
    setLocality(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Selected: ${state} > ${city} > ${locality}`);
  };

  const cities = state ? Object.keys(stateCityLocalityMap[state]) : [];
  const localities = state && city ? stateCityLocalityMap[state][city] : [];

  return (
    <Container className=" rounded-3 p-2  border my-4">
      <div
        className="d-flex justify-content-between align-items-center "
        style={{ cursor: 'pointer' }}
        onClick={() => setOpen(!open)}
      >
        <h6>Locations</h6>
        <span>{open ? '▲' : '▼'}</span>
      </div>

      <Collapse in={open}>
        <div>
          <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select value={state} onChange={handleStateChange}>
              <option value="">Select State</option>
              {Object.keys(stateCityLocalityMap).map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Select value={city} onChange={handleCityChange} disabled={!state}>
              <option value="">Select City</option>
              {cities.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Locality</Form.Label>
            <Form.Select value={locality} onChange={handleLocalityChange} disabled={!city}>
              <option value="">Select Locality</option>
              {localities.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" className="w-100">
            Submit
          </Button>
        </div>
      </Collapse>
    </Container>
  );
};

export default LocationFilter;
