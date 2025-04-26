import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNavbarCompanyList = () => {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '45px' }}>
      <Container className="d-flex align-items-center">
        <Breadcrumb className="mb-0 mt-3">
          <Breadcrumb.Item>
            <Link
              to="/"
              style={{
                textDecoration: location.pathname === '/' ? 'underline' : 'none',
                fontWeight: location.pathname === '/' ? '600' : '400',
                color: 'inherit',
              }}
            >
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to="/hr-company-page"
              style={{
                textDecoration: location.pathname === '/hr-company-page' ? 'underline' : 'none',
                fontWeight: location.pathname === '/hr-company-page' ? '600' : '400',
                color: 'inherit',
              }}
            >
              HR Company
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default BreadcrumbNavbarCompanyList;