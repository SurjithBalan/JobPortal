import "./breadcrums.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Breadcrums.css"; // Ensure you create and import this CSS

export default function Breadcrums() {
  const location = useLocation();

  const pathnames = location.pathname
    .replace("/Candidate Dashboard", "")
    .split("/")
    .filter((x) => x);

  const formatLabel = (str) =>
    str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const renderBreadcrumbItems = () => {
    const items = [];

    items.push(
      <Link key="home" to="/" className="breadcrumb-link">
        Home
      </Link>
    );

    items.push(
      <Link key="hr" to="/RecruiterDashboard" className="breadcrumb-link">
        RecruiterDashboard
      </Link>
    );

    pathnames.forEach((value, index) => {
      const to = `/RecruiterDashboard/${pathnames
        .slice(0, index + 1)
        .join("/")}`;
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

    return items.flatMap((item, idx) => {
      if (idx === 0) return [item];
      return [
        <span key={`sep-${idx}`} className="breadcrumb-separator">
          •
        </span>,
        item,
      ];
    });
  };

  return (
    <div className="breadcrumb-wrapper my-3 bg-white shadow-sm">
      <Container
        fluid
        className="breadcrumb-container d-flex align-items-center"
      >
        <nav className="custom-breadcrumb flex-wrap">
          {renderBreadcrumbItems()}
        </nav>
      </Container>
    </div>
  );
}
