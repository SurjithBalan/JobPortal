import  { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import './filterDropdown.css'; // Optional for some custom styles

const FilterDropdown = ({bgColor, title, options }) => {
  const [selected, setSelected] = useState({});
  const [show, setShow] = useState(false);

  const toggleDropdown = (isOpen) => setShow(isOpen);

  const handleCheck = (label) => {
    setSelected((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <Dropdown show={show} onToggle={toggleDropdown} className="w-100 mb-3">
      <Dropdown.Toggle
        className=" w-100 text-start   d-flex justify-content-around align-items-center shadow-none  "
        style={{ borderRadius: '8px',backgroundColor:bgColor ,color:"#424242",border:"1px solid #C2BFBF" }}
      >
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100 p-2" style={{ maxHeight: '250px', overflowY: 'auto' }}>
        {options.map((option, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
      <Form.Check
        type="checkbox"
        id={`checkbox-${index}`}
        className="m-0 me-2 checkbox-dark"
        checked={!!selected[option.label]}
        onChange={() => handleCheck(option.label)}
      />
      <div className="d-flex align-items-center justify-content-between w-100">
        <span className="label-text  d-flex justify-content-start flex-grow-1">{option.label}</span>
        <span className="drop_count">{option.count}</span>
      </div>
    </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
