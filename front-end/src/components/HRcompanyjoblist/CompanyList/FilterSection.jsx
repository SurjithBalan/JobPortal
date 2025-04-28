import React from 'react';
import { Container, Row, Col, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import './FilterSection.css'; // for custom styles

const FilterSection = () => {
    return (
        <div className="filter-section py-0">
            <Container>
                <Row className="d-flex align-items-center py-0">
                    <Col md={6} className="mb-2 mb-md-0 d-flex justify-content-start">
                        <div className="results-text">
                            Showing 1 - 10 of 11 results
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-md-end justify-content-start gap-2">
                        <DropdownButton
                            as={ButtonGroup}
                            title="10 Per Page"
                            variant="light"
                            className="custom-dropdown"
                        >
                            <Dropdown.Item>10 Per Page</Dropdown.Item>
                            <Dropdown.Item>20 Per Page</Dropdown.Item>
                            <Dropdown.Item>50 Per Page</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            as={ButtonGroup}
                            title="Sort By (Default)"
                            variant="light"
                            className="custom-dropdown"
                        >
                            <Dropdown.Item>Default</Dropdown.Item>
                            <Dropdown.Item>Newest</Dropdown.Item>
                            <Dropdown.Item>Oldest</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FilterSection;