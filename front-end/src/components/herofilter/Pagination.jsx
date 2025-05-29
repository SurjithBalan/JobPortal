import React from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import './paginate.css';

const Pagination = ({ jobsPerPage, totalJobs, paginate, activePage }) => {
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const getPageNumbers = () => {
    const pages = [];

    // Always show first and last page
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (activePage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (activePage > totalPages - 4) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', activePage - 1, activePage, activePage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <ul className='paginate'>
      <li>
        <button
          className='prev-nextbtns'
          onClick={() => activePage > 1 && paginate(activePage - 1)}
        >
          <HiChevronLeft />
        </button>
      </li>

      {pageNumbers.map((num, index) => (
        <li key={index}>
          {num === '...' ? (
            <span className='ellipsis'>...</span>
          ) : (
            <button
              className={`paginate-btns ${num === activePage ? 'paginate-button-bg' : ''}`}
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          )}
        </li>
      ))}

      <li>
        <button
          className='prev-nextbtns'
          onClick={() => activePage < totalPages && paginate(activePage + 1)}
        >
          <HiChevronRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
