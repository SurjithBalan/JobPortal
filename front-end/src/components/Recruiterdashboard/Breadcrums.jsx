import React from 'react'
import { Link,useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
export default function Breadcrums() {
    const location = useLocation();
    
        const pathnames = location.pathname
            .replace('/Candidate Dashboard', '')
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
                <Link key="hr" to="/RecruiterDashboard" className="breadcrumb-link">
                    RecruiterDashboard
                </Link>
            );
    
            // Dynamic
            pathnames.forEach((value, index) => {
                const to = `/RecruiterDashboard/${pathnames.slice(0, index + 1).join('/')}`;
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
     <div className="breadcrumb-wrapper mb-2  my-4 bg-white">
            <Container fluid className="d-flex align-items-center">
                <nav className="custom-breadcrumb">{renderBreadcrumbItems()}</nav>
            </Container>
        </div>
  )
}
