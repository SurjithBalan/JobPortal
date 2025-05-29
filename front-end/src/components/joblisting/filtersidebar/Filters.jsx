import { useState } from "react";
import "./filters.css";
import dateOptions from "../../data/dateoptions.js";
import FilterDropdown from "./FilterDropdown.jsx";
import LocationFilter from "./LocationFilter.jsx";
import JobAlertForm from "./JobAlertForm.jsx";
import FilterBar from "./FilterBar.jsx";
import Education from "../../data/education.js";
import { CiFilter } from "react-icons/ci";

export default function Filters() {
  // Sidebar States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  //Salary Range fliter
  const [range, setRange] = useState([10000, 50000]);

  const handleSliderChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setRange([min, max]);
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), range[1] - 1000);
    setRange([value, range[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), range[0] + 1000);
    setRange([range[0], value]);
  };
  // Experience Range filter

  const minExpLimit = 0;
  const maxExpLimit = 20;

  const [minExperience, setMinExperience] = useState(1);
  const [maxExperience, setMaxExperience] = useState(10);

  const handleminimumChange = (e) => {
    const value = Math.min(Number(e.target.value), maxExperience - 1);
    setMinExperience(value);
  };

  const handleMaximumChange = (e) => {
    const value = Math.max(Number(e.target.value), minExperience + 1);
    setMaxExperience(value);
  };

  const handleSlidChange = (e) => {
    const [min, max] = e.target.value.split(",").map(Number);
    setMinExperience(min);
    setMaxExperience(max);
  };

  return (
    <>
      <div className="">
        <button className="toggle-btn my-5 mx-1" onClick={toggleSidebar}>
          <CiFilter color="#FFA900" />
          Filter
        </button>

        <div className={` sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className=" my-4 w-auto hero-sidebar">
            <JobAlertForm />
            <FilterBar />
            <h6 className="fw-bold mb-0">Experience Level</h6>
            <div className="d-flex align-items-center mb-0 gap-2">
              <div className="experience-slider-container">
                <div className="experience-inputs ">
                  <div>
                    <label
                      min={minExpLimit}
                      max={maxExperience - 1}
                      onChange={(e) => setMinExperience(e.target.value)}
                    >
                      {minExperience} Years
                    </label>
                  </div>
                  <div>
                    <label
                      min={minExperience + 1}
                      max={maxExpLimit}
                      onChange={(e) => setMaxExperience(e.target.value)}
                    >
                      {maxExperience}Years
                    </label>
                  </div>
                </div>

                <div className="slider-track">
                  <input
                    type="range"
                    min={minExpLimit}
                    max={maxExpLimit}
                    value={minExperience}
                    onChange={(e) =>
                      setMinExperience(
                        Math.min(Number(e.target.value), maxExperience - 1)
                      )
                    }
                    className="thumb thumb-left"
                  />
                  <input
                    type="range"
                    min={minExpLimit}
                    max={maxExpLimit}
                    value={maxExperience}
                    onChange={(e) =>
                      setMaxExperience(
                        Math.max(Number(e.target.value), minExperience + 1)
                      )
                    }
                    className="thumb thumb-right"
                  />
                  <div className="slider-track"></div>
                  <div
                    className="slider-range"
                    style={{
                      left: `${(minExperience / maxExpLimit) * 100}%`,
                      right: `${100 - (maxExperience / maxExpLimit) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            <h6 className="fw-bold ">Salary Range</h6>
            <div className="d-flex align-items-center  gap-2">
              <div className="range-container">
                <div className="slider-track">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={range[0]}
                    onChange={handleMinChange}
                    className="thumb thumb-left"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={range[1]}
                    onChange={handleMaxChange}
                    className="thumb thumb-right"
                  />
                  
                  <div
                    className="slider-range"
                    style={{
                      left: `${(range[0] / 100000) * 100}%`,
                      right: `${100 - (range[1] / 100000) * 100}%`,
                    }}
                  />
                </div>

                <p className="result">
                  ₹{range[0].toLocaleString()} – ₹{range[1].toLocaleString()}
                </p>
              </div>
            </div>

            <LocationFilter />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Date Posted"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="work Mode"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Job type"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="Shift Timing"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Education"
              options={Education}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="Industry"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Functionality"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="Gender"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Company type"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="Notice period"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#E8E8E8"
              title="Career Level"
              options={dateOptions}
            />
            <FilterDropdown
              bgColor="#DAE9EA"
              title="Language"
              options={dateOptions}
            />
          </div>
        </div>
      </div>
    </>
  );
}
