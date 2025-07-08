import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Table } from 'react-bootstrap'
import { PiChartLineUpLight } from "react-icons/pi";
import { PiBuildingsLight } from "react-icons/pi";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps';
import './StatisticsPage.css'
import india from '../../assets/image/indian_map.png'
import { Pie, Cell, PieChart, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";
const locationMarkers = [
    { coordinates: [78.96, 20.59] },
    { coordinates: [77.21, 28.61] },
    { coordinates: [80.27, 13.08] },
    { coordinates: [88.36, 22.57] },
    { coordinates: [72.87, 19.08] },
];
function StatisticsPage() {
    const statisticsStats = [
        { count: '250', label: 'Total HR Companies' },
        { count: '15,000', label: 'Total Candidates' },
        { count: '4,200', label: 'Total Jobs Posted' },
        { count: '9,800', label: 'Total Applications' },
        { count: '720', label: 'Active Recruiters' },
        { count: '2.3', label: 'Avg. Applications Per Job' },
    ];
    const Companydata = [
        {
            name: 'Name',
            location: '+91 3247962484',
            jobsPosted: '30 days',
            candidates: '₹ 2,000',
            status: 'Active',
            industryFocus: 1,
        },
        {
            name: 'Name',
            location: '+91 3247962484',
            jobsPosted: '20 days',
            candidates: '₹ 2,500',
            status: 'Active',
            industryFocus: 1,
        },
        {
            name: 'Name',
            location: '+91 3247962484',
            jobsPosted: '30 days',
            candidates: '₹ 1,500',
            status: 'Active',
            industryFocus: 2,
        },
    ];
    const locationData = [
        {
            city: 'Chennai',
            coordinates: [80.2707, 13.0827],
            hrCompanies: 40,
            candidates: 3000,
            jobs: 500,
            industry: 'IT/ITES',
        },
        {
            city: 'Hyderabad',
            coordinates: [78.4867, 17.3850],
            hrCompanies: 35,
            candidates: 2800,
            jobs: 450,
            industry: 'Fin Tech',
        },
        {
            city: 'Pune',
            coordinates: [73.8567, 18.5204],
            hrCompanies: 25,
            candidates: 2000,
            jobs: 320,
            industry: 'Manufacturing',
        },
    ];

    const industrydata = [
        { name: 'IT Services', value: 51.3 },
        { name: 'Healthcare', value: 21.4 },
        { name: 'BFSI', value: 20 },
    ];

    const COLORS = ['#E0E7FF', '#1D4ED8', '#BFDBFE']; // Match your image colors

    const renderLabel = ({ percent }) =>
        `${(percent * 100).toFixed(1)}%`;

    const industrytableData = [
        {
            industry: 'IT Services',
            jobs: '1,200',
            applications: '4,000',
            hrCompanies: '75',
            roles: 'Developer, QA',
        },
        {
            industry: 'Healthcare',
            jobs: '500',
            applications: '1,100',
            hrCompanies: '30',
            roles: 'Nurses, Tech',
        },
        {
            industry: 'BFSI',
            jobs: '800',
            applications: '2,000',
            hrCompanies: '40',
            roles: 'Finance, Excess',
        },
    ];
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent,
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#333"
                textAnchor="middle"
                dominantBaseline="central"
                style={{ fontSize: '12px', fontWeight: 500 }}
            >
                {(percent * 100).toFixed(1)}%
            </text>
        );
    };

    const functionalitydata = [
        {
            name: 'Software Dev',
            jobPosted: 1000,
            applications: 3500,
        },
        {
            name: 'Sales & Mark',
            jobPosted: 600,
            applications: 1800,
        },
        {
            name: 'HR & Admin',
            jobPosted: 250,
            applications: 700,
        },
    ];
    const careerLeveldata = [
        { name: 'Entry level', candidates: 4000, applications: 1500 },
        { name: 'Mid level', candidates: 7000, applications: 5000 },
        { name: 'Senior level', candidates: 3000, applications: 3300 },
    ];
    const initialData = [
        {
            location: 'Chennai',
            industry: 'IT Services',
            functionality: 'Development',
            careerLevel: 'Mid Level',
            candidates: 1300,
            jobPosted: 400,
        },
        {
            location: 'Pune',
            industry: 'Healthcare',
            functionality: 'Clinical Support',
            careerLevel: 'Entry Level',
            candidates: 800,
            jobPosted: 120,
        },
        {
            location: 'Chennai',
            industry: 'IT Services',
            functionality: 'Development',
            careerLevel: 'Mid Level',
            candidates: 1300,
            jobPosted: 400,
        },
    ];

    const [filters, setFilters] = useState({
        location: 'All',
        industry: 'All',
        functionality: 'All',
        careerLevel: 'All',
    });

    const locations = ['All', ...new Set(initialData.map(item => item.location))];
    const industries = ['All', ...new Set(initialData.map(item => item.industry))];
    const functionalities = ['All', ...new Set(initialData.map(item => item.functionality))];
    const careerLevels = ['All', ...new Set(initialData.map(item => item.careerLevel))];

    const handleFilterChange = (field, value) => {
        setFilters({ ...filters, [field]: value });
    };

    const filteredData = initialData.filter(item => {
        return (
            (filters.location === 'All' || item.location === filters.location) &&
            (filters.industry === 'All' || item.industry === filters.industry) &&
            (filters.functionality === 'All' || item.functionality === filters.functionality) &&
            (filters.careerLevel === 'All' || item.careerLevel === filters.careerLevel)
        );
    });


    return (
        <Container className="my-4">
            <h5 className="section-title text-start mb-3" style={{ color: '#424242' }} >
                <PiChartLineUpLight size={30} className="me-2" style={{ color: '#3996e7' }} /> Statistics
            </h5>
            <Row className="g-3 justify-content-center">
                {statisticsStats.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={2}>
                        <div className="text-center p-3 shadow-sm border-0 rounded-4 h-100">
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                <PiBuildingsLight size={32} style={{ color: '#2196f3' }} className="mb-2" />
                                <h5 className="fw-semibold mb-1">{item.count}</h5>
                                <div className="text-muted small text-center">{item.label}</div>
                            </Card.Body>
                        </div>
                    </Col>
                ))}
            </Row>

            {/*HR Company - wise Report  */}
            <Row className="align-items-center justify-content-between mb-3 mt-3">
                <Col>
                    <h5 className="fw-semibold mb-0 text-start">HR Company - wise Report</h5>
                </Col>
                <Col xs="auto">
                    <div className="d-flex align-items-center">
                        <span className="me-2 text-muted fw-medium">Showing</span>
                        <Form.Select
                            size="sm"
                            style={{
                                width: '160px',
                                borderRadius: '10px',
                                fontWeight: 500,
                            }}
                        >
                            <option>High- performing</option>
                            <option>Low- performing</option>
                            <option>All</option>
                        </Form.Select>
                    </div>
                </Col>
            </Row>

            <div className="table-responsive">
                <Table bordered className="rounded-4 overflow-hidden table-statistics">
                    <thead className="table-light">
                        <tr>
                            <th>HR Company</th>
                            <th>Location</th>
                            <th>Jobs Posted</th>
                            <th>Candidates Applied</th>
                            <th>Recruiters</th>
                            <th>Industry Focus</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {Companydata.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.name}</td>
                                <td>{row.location}</td>
                                <td>{row.jobsPosted}</td>
                                <td>{row.candidates}</td>
                                <td className="text-success fw-semibold">{row.status}</td>
                                <td>{row.industryFocus}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h5 className="fw-semibold mb-3 text-start">Location – wise Report</h5>
            <div className="p-3 shadow-sm rounded-4 border-0 bg-white">
                <div className="p-3 shadow-sm rounded-4 border-0 bg-white">
                    <div
                        style={{
                            width: "100%",
                            overflowX: "auto",
                            backgroundImage: `url(${india})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain", // or "cover" if full coverage
                            backgroundPosition: "center",
                            padding: "20px 0",
                        }}
                    >
                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{ scale: 1000, center: [82.8, 22] }}
                            width={800}
                            height={500}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#DBEAFE" // light blue
                                            stroke="#ffffff" // white stroke for borders
                                            strokeWidth={1}
                                        />
                                    ))
                                }
                            </Geographies>

                            {locationMarkers.map((loc, i) => (
                                <Marker key={i} coordinates={loc.coordinates}>
                                    <circle r={22} fill="rgba(59,130,246,0.3)" />
                                    <circle r={8} fill="#3B82F6" />
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>
                </div>
                <Row className="mt-4">
                    <Col>
                        <Table responsive bordered className="location-table mb-0">
                            <thead>
                                <tr>
                                    <th>City/Region</th>
                                    <th>HR Companies</th>
                                    <th>Candidates</th>
                                    <th>Jobs Posted</th>
                                    <th>Top Industry</th>
                                </tr>
                            </thead>
                            <tbody>
                                {locationData.map((loc, index) => (
                                    <tr key={index}>
                                        <td>{loc.city}</td>
                                        <td>{loc.hrCompanies}</td>
                                        <td>{loc.candidates.toLocaleString()}</td>
                                        <td>{loc.jobs}</td>
                                        <td>{loc.industry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <h4 className="fw-bold mb-3 text-start mt-4">Industry - wise Report</h4>
            <div className="p-4 rounded-4 border-0 shadow-sm">
                <Row className="d-flex flex-wrap align-items-center">
                    <Col xs={12} md={6}>
                        <div className="mb-4">
                            {industrydata.map((item, index) => (
                                <div key={item.name} className="d-flex align-items-start mb-2">
                                    <div
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            backgroundColor: COLORS[index],
                                            marginRight: 8,
                                        }}
                                    ></div>
                                    <span className="me-2">{item.name}</span>
                                    <strong>{item.value}%</strong>
                                </div>
                            ))}
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="d-flex justify-content-end p-4">
                        <div style={{ width: '220px', height: '220px' }}>
                            <PieChart width={220} height={220}>
                                <Pie
                                    data={industrydata}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={0}
                                    outerRadius={100}
                                    startAngle={270}         // Start from top center
                                    endAngle={-90}           // Draw counter-clockwise
                                    dataKey="value"
                                    paddingAngle={0}
                                    label={renderCustomizedLabel}  // ✅ use custom label renderer
                                    labelLine={false}
                                >
                                    {industrydata.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </div>
                    </Col>
                </Row>
                <Table responsive className="mt-4 mb-0" borderless>
                    <thead className="bg-light text-secondary">
                        <tr>
                            <th>Industry</th>
                            <th>Job Posted</th>
                            <th>Applications</th>
                            <th>HR Companies</th>
                            <th>Active Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {industrytableData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.industry}</td>
                                <td>{row.jobs}</td>
                                <td>{row.applications}</td>
                                <td>{row.hrCompanies}</td>
                                <td>{row.roles}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h4 className="fw-bold mb-3 text-start mt-4">Functionality - wise Report</h4>
            <div className="p-4 border-0 shadow-sm rounded-4">
                <Row>
                    <Col md={7} className="d-flex flex-column justify-content-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart
                                layout="vertical"
                                data={functionalitydata}
                                margin={{ top: 10, right: 20, bottom: 10, left: 30 }}
                            >
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="jobPosted" fill="#1D4ED8" barSize={20} radius={[10, 10, 10, 10]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>

                    <Col md={5} className="d-flex flex-column justify-content-center">
                        <div className="mb-2 d-flex align-items-center">
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: '#1D4ED8',
                                    marginRight: 8,
                                }}
                            ></div>
                            <span>Job Posted</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: '#BFDBFE',
                                    marginRight: 8,
                                }}
                            ></div>
                            <span>Application</span>
                        </div>
                    </Col>
                </Row>

                <Table responsive className="mt-4 mb-0" borderless>
                    <thead className="bg-light text-secondary">
                        <tr>
                            <th>Functionality</th>
                            <th>Job Posted</th>
                            <th>Applications</th>
                            <th>Avg Exp Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Software Dev</td>
                            <td>1000</td>
                            <td>3500</td>
                            <td>3.5 Yrs</td>
                        </tr>
                        <tr>
                            <td>Sales & Marketing</td>
                            <td>600</td>
                            <td>1800</td>
                            <td>2.8 Yrs</td>
                        </tr>
                        <tr>
                            <td>HR &Admin</td>
                            <td>250</td>
                            <td>700</td>
                            <td>4.0 Yrs</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <h4 className="fw-bold mb-3 text-start mt-4">Career Level Breakdown</h4>
            <div className="p-4 border-0 shadow-sm rounded-4">
                <Row>
                    <Col md={7}>
                        <ResponsiveContainer width="70%" height={250}>
                            <BarChart data={careerLeveldata} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="candidates" fill="#1D4ED8" barSize={30} radius={[4, 4, 0, 0]} />                                
                            </BarChart>
                        </ResponsiveContainer>
                    </Col>
                    <Col md={5} className="d-flex flex-column justify-content-center">
                        <div className="mb-2 d-flex align-items-center">
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: '#1D4ED8',
                                    marginRight: 8,
                                }}
                            ></div>
                            <span>Candidates</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: '#BFDBFE',
                                    marginRight: 8,
                                }}
                            ></div>
                            <span>Application</span>
                        </div>
                    </Col>
                </Row>

                <Table responsive className="mt-4 mb-0" borderless>
                    <thead className="bg-light text-secondary">
                        <tr>
                            <th>Career Level</th>
                            <th>Candidates</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {careerLeveldata.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.name}</td>
                                <td>{row.candidates}</td>
                                <td>{row.applications}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h4 className="fw-bold mb-3 text-start mt-4">Composite Report</h4>
            {/* Filter Dropdowns */}
            <Row className="mb-3">
                <Col xs={12} md={3} className="mb-2">
                    <Form.Label className="fw-semibold">Location</Form.Label>
                    <Form.Select
                        value={filters.location}
                        onChange={(e) => handleFilterChange('location', e.target.value)}
                    >
                        {locations.map((loc, idx) => (
                            <option key={idx} value={loc}>{loc}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col xs={12} md={3} className="mb-2">
                    <Form.Label className="fw-semibold">Industry</Form.Label>
                    <Form.Select
                        value={filters.industry}
                        onChange={(e) => handleFilterChange('industry', e.target.value)}
                    >
                        {industries.map((ind, idx) => (
                            <option key={idx} value={ind}>{ind}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col xs={12} md={3} className="mb-2">
                    <Form.Label className="fw-semibold">Functionality</Form.Label>
                    <Form.Select
                        value={filters.functionality}
                        onChange={(e) => handleFilterChange('functionality', e.target.value)}
                    >
                        {functionalities.map((fun, idx) => (
                            <option key={idx} value={fun}>{fun}</option>
                        ))}
                    </Form.Select>
                </Col>

                <Col xs={12} md={3} className="mb-2">
                    <Form.Label className="fw-semibold">Career Level</Form.Label>
                    <Form.Select
                        value={filters.careerLevel}
                        onChange={(e) => handleFilterChange('careerLevel', e.target.value)}
                    >
                        {careerLevels.map((level, idx) => (
                            <option key={idx} value={level}>{level}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            {/* Report Table */}
            <div className="p-3 border-0 shadow-sm rounded-4">
                <Table responsive borderless className="mb-0">
                    <thead className="bg-light text-secondary">
                        <tr>
                            <th>Location</th>
                            <th>Industry</th>
                            <th>Functionality</th>
                            <th>Career Level</th>
                            <th>Candidates</th>
                            <th>Job Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, i) => (
                            <tr key={i}>
                                <td>{row.location}</td>
                                <td>{row.industry}</td>
                                <td>{row.functionality}</td>
                                <td>{row.careerLevel}</td>
                                <td>{row.candidates}</td>
                                <td>{row.jobPosted}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default StatisticsPage
