import React, { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { BsFilter, BsX } from 'react-icons/bs'; // Using react-icons for icons

const FilterBar = () => {
  const [filters, setFilters] = useState(['Fresher']);

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter(f => f !== filterToRemove));
  };

  const clearAll = () => {
    setFilters([]);
  };

  return (
    <div className="d-flex align-items-center gap-3 flex-wrap">
      <div className="d-flex align-items-center gap-2">
        <BsFilter size={20} />
        <span className="fw-semibold">Filters</span>
        <span>({filters.length})</span>
      </div>

      <div className="d-flex gap-2 flex-wrap">
        {filters.map((filter, idx) => (
          <Button
            key={idx}
            variant="outline-primary"
            size="sm"
            className="d-flex align-items-center gap-1"
            onClick={() => removeFilter(filter)}
          >
            {filter}
            <BsX />
          </Button>
        ))}
      </div>

      {filters.length > 0 && (
        <Button
          variant="link"
          size="sm"
          className="text-decoration-none text-primary"
          onClick={clearAll}
        >
          Clear all
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
