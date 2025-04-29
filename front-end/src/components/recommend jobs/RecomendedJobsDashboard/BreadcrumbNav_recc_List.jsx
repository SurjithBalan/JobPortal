import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './BreadcrumbNav_recc_List.css'


const BreadcrumbNav_recc_List = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .replace('/reccommended_job_list', '')
    .split('/')
    .filter((x) => x);

  const formatLabel = (str) =>
    str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const renderBreadcrumbItems = () => {
    const items = [];

    // Static: Home
    items.push(
      <Link key="home" to="/" className="breadcrumb-link">
        Home
      </Link>
    );

    // Static: HR Company
    items.push(
      <Link key="hr" to="/reccommended_job_list" className="breadcrumb-link">
       Recommended Jobs
      </Link>
    );

    // Dynamic
    pathnames.forEach((value, index) => {
      const to = `/reccommended_job_list/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;

      items.push(
        isLast ? (
          <span key={to} className="breadcrumb-current">
            {formatLabel(value)}
          </span>
        ) : (
          <Link key={to} to={to} className="breadcrumb-link">
            {formatLabel(value)}
          </Link>
        )
      );
    });

    // Insert bullet separators
    return items.flatMap((item, idx) => {
      if (idx === 0) return [item];
      return [
        <span key={`sep-${idx}`} className="breadcrumb-separator">•</span>,
        item,
      ];
    });
  };

  return (
    <div className="breadcrumb-wrapper mb-2 mt-0">
      <Container fluid className="d-flex align-items-center">
        <nav className="custom-breadcrumb">{renderBreadcrumbItems()}</nav>
      </Container>
    </div>
  );
};


export default BreadcrumbNav_recc_List;