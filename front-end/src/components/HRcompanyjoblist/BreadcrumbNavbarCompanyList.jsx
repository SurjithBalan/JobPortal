// import React from 'react';
// import { Breadcrumb, Container } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';

// const BreadcrumbNavbarCompanyList = () => {
//   const location = useLocation();

//   return (
//     <div style={{ backgroundColor: '#f8f9fa', minHeight: '45px', borderTop: '1px solid #424242', borderBottom: '0.5px solid  #424242' }} className='mt-2'>
//       <Container fluid className="d-flex align-items-center">
//         <Breadcrumb className="mb-0 mt-3">
//           <Breadcrumb.Item linkAs="span">
//             <Link
//               to="/"
//               style={{
//                 textDecoration: 'none', // always no underline
//                 fontWeight: location.pathname === '/' ? '600' : '400',
//                 color: '#424242',
//               }}
//             >
//               Home
//             </Link>
//           </Breadcrumb.Item>
//           <Breadcrumb.Item linkAs="span">
//             <Link
//               to="/hr-company-page"
//               style={{
//                 textDecoration: 'none', // always no underline
//                 fontWeight: location.pathname === '/hr-company-page' ? '600' : '400',
//                 color: '#424242',
//               }}
//             >
//               HR Company
//             </Link>
//           </Breadcrumb.Item>
//         </Breadcrumb>
//       </Container>
//     </div>
//   );
// };

// export default BreadcrumbNavbarCompanyList;

import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './BreadcrumbNavbarCompanyList.css'; // We'll add styles here

const BreadcrumbNavbarCompanyList = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .replace('/hr-company-page', '')
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
      <Link key="hr" to="/hr-company-page" className="breadcrumb-link">
        HR Company
      </Link>
    );

    // Dynamic
    pathnames.forEach((value, index) => {
      const to = `/hr-company-page/${pathnames.slice(0, index + 1).join('/')}`;
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

export default BreadcrumbNavbarCompanyList;