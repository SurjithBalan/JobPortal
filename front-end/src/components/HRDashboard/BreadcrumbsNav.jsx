import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BreadcrumbsNav.css'; // optional if you apply styles

const BreadcrumbsNav = ({ activeItem }) => {
    // Format the activeItem string (e.g., 'AdminAccess' -> 'Admin Access')
    const formatItem = (item) => {
        return item?.replace(/([A-Z])/g, ' $1').trim();
    };

    return (
        <div className="text-start mt-3 ms-3">
            <Breadcrumb className="custom-breadcrumb">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} >
                    Home
                </Breadcrumb.Item>

                {activeItem && (
                    <Breadcrumb.Item active className="text-capitalize">
                        {formatItem(activeItem)}
                    </Breadcrumb.Item>
                )}
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbsNav;