import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNav_recc_List = () => {
  const location = useLocation();

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '45px', borderTop: '1px solid #424242', borderBottom: '0.5px solid  #424242' }} className='mt-2'>
      <Container fluid className="d-flex align-items-center">
        <Breadcrumb className="mb-0 mt-3">
          <Breadcrumb.Item linkAs="span">
            <Link
              to="/"
              style={{
                textDecoration: 'none', // always no underline
                fontWeight: location.pathname === '/' ? '600' : '400',
                color: '#424242',
              }}
            >
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs="span">
            <Link
              to="/reccommended_job_list"
              style={{
                textDecoration: 'none', // always no underline
                fontWeight: location.pathname === '/hr-company-page' ? '600' : '400',
                color: '#424242',
              }}
            >
              Recommended Jobs
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default BreadcrumbNav_recc_List;