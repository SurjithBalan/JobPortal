import React from 'react';
import { Pagination } from 'react-bootstrap';
import './HRcompanyPagenation.css'; // Custom styles

const CustomPagination = () => {
    return (
        <div className="pagination-wrapper">
            <Pagination className="custom-pagination">
                <Pagination.Prev className='navigateButton-pagenation'/> {/* Left button */}
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Next  className='navigateButton-pagenation'/> {/* Right button */}
            </Pagination>
        </div>
    );
};

export default CustomPagination;