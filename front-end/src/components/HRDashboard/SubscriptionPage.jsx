import { React, useState } from 'react';
import { Container, Row, Col, Card, Table, Form } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import { PiChartLineUpLight } from "react-icons/pi";
import { BsFillBarChartFill } from "react-icons/bs";
import { PiCurrencyInrLight } from "react-icons/pi";
import './Subscription.css'
const Subscription = () => {
    const cards = [
        {
            title: 'HR Company Subscriptions',
            count: 24,
            price: 55000,

        },
        {
            title: 'Individual Recruiters',
            count: 56,
            price: 78000,

        },
        {
            title: 'Candidates Subscriptions',
            count: 132,
            price: 74000,

        },
    ];
    const [tableData, setTableData] = useState([
        {
            name: 'Basic',
            duration: '1 Month',
            amount: 99,
            features: '1 Job posting\n0 Featured Job\nJob displayed for 20 days\nPremium Support 24/7',
            limit: 10,
            access: false,
            status: 'Inactive',
            createdBy: 'Skylark',
            createdDate: '10.04.25',
        },
        {
            name: 'Standard',
            duration: '1 Month',
            amount: 99,
            features: '1 Job posting\n0 Featured Job\nJob displayed for 20 days\nPremium Support 24/7',
            limit: 10,
            access: true,
            status: 'Active',
            createdBy: 'Skylark',
            createdDate: '10.04.25',
        },
        {
            name: 'Extended',
            duration: '1 Month',
            amount: 99,
            features: '1 Job posting\n0 Featured Job\nJob displayed for 20 days\nPremium Support 24/7',
            limit: 10,
            access: true,
            status: 'Active',
            createdBy: 'Skylark',
            createdDate: '10.04.25',
        },
    ]);

    const handleToggle = (index) => {
        const updatedData = [...tableData];
        updatedData[index].access = !updatedData[index].access;
        updatedData[index].status = updatedData[index].access ? 'Active' : 'Inactive';
        setTableData(updatedData);
    };
    const Subscribersdata = [
        { name: 'Name', contact: '+91 3247962484', duration: '30 days', amount: '2,000', status: 'Active' },
        { name: 'Name', contact: '+91 3247962484', duration: '20 days', amount: '2,500', status: 'Active' },
        { name: 'Name', contact: '+91 3247962484', duration: '30 days', amount: '1,500', status: 'Active' },
    ];
    return (
        <Container className="my-4">
            <h5 className="section-title text-start mb-3" style={{ color: '#424242' }} >
                <PiChartLineUpLight size={30} className="me-2" style={{ color: '#3996e7' }} /> Subscription
            </h5>
            <Row className="g-4 justify-content-center">
                {cards.map((item, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4}>
                        <Card className="h-100 text-center border rounded-3 shadow-sm custom-sub-card">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <h6 className="fw-semibold mb-2 fontColor424242">{item.title}</h6>
                                <h4 className="my-2 fontColor424242">{item.count}</h4>
                                <h6 className="fw-normal text-dark mt-1 fontColor424242"><span><PiCurrencyInrLight size={20} /></span>{item.price}</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h5 className="section-title text-start my-4 " style={{ color: '#424242' }} >
                <BsFillBarChartFill size={30} className="me-2" style={{ color: '#3996e7' }} /> Subscription plans
            </h5>

            {/* Plan for HR Company */}
            <h4 className="section-title text-start mb-3" style={{ color: '#424242' }} >
                Plan for HR Company
            </h4>
            <div className="table-responsive mt-4">
                <Table bordered className="align-middle text-center">
                    <thead className="table-light no-border-thead">
                        <tr>
                            <th className='fontColor424242 fw-semibold' >Subscription Name</th>
                            <th className='fontColor424242 fw-semibold'>Duration</th>
                            <th className='fontColor424242 fw-semibold'>Amount</th>
                            <th className='fontColor424242 fw-semibold'>Features Included</th>
                            <th className='fontColor424242 fw-semibold'>Job Posting Limit</th>
                            <th className='fontColor424242 fw-semibold'>Candidate Access</th>
                            <th className='fontColor424242 fw-semibold'>Status</th>
                            <th className='fontColor424242 fw-semibold'>Created By</th>
                            <th className='fontColor424242 fw-semibold'>Created Date</th>
                            <th className='fontColor424242 fw-semibold'>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='fontColor424242'>{row.name}</td>
                                <td className='fontColor424242'>{row.duration}</td>
                                <td className='fontColor424242'>{row.amount}</td>
                                <td className='fontColor424242' style={{ whiteSpace: 'pre-line' }}>{row.features}</td>
                                <td className='fontColor424242'>{row.limit}</td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        id={`switch-${index}`}
                                        checked={row.access}
                                        onChange={() => handleToggle(index)}
                                        className={`custom-switch ${row.access ? 'switch-on' : 'switch-off'}`}
                                        style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                </td>
                                <td className={row.status === 'Active' ? 'text-success' : 'text-danger'}>
                                    {row.status}
                                </td>
                                <td className='fontColor424242'>{row.createdBy}</td>
                                <td className='fontColor424242'>{row.createdDate}</td>
                                <td>
                                    <FiEdit2 className="me-2 text-primary" style={{ cursor: 'pointer' }} />
                                    <AiOutlinePlus className="text-primary" style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/*  */}
            <h4 className="section-title text-start mb-3" style={{ color: '#424242' }} >
                Plan for Individual Recruiters
            </h4>
            <div className="table-responsive mt-4">
                <Table bordered className="align-middle text-center">
                    <thead className="table-light no-border-thead">
                        <tr>
                            <th className='fontColor424242 fw-semibold' >Subscription Name</th>
                            <th className='fontColor424242 fw-semibold'>Duration</th>
                            <th className='fontColor424242 fw-semibold'>Amount</th>
                            <th className='fontColor424242 fw-semibold'>Features Included</th>
                            <th className='fontColor424242 fw-semibold'>Job Posting Limit</th>
                            <th className='fontColor424242 fw-semibold'>Candidate Access</th>
                            <th className='fontColor424242 fw-semibold'>Status</th>
                            <th className='fontColor424242 fw-semibold'>Created By</th>
                            <th className='fontColor424242 fw-semibold'>Created Date</th>
                            <th className='fontColor424242 fw-semibold'>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='fontColor424242'>{row.name}</td>
                                <td className='fontColor424242'>{row.duration}</td>
                                <td className='fontColor424242'>{row.amount}</td>
                                <td className='fontColor424242' style={{ whiteSpace: 'pre-line' }}>{row.features}</td>
                                <td className='fontColor424242'>{row.limit}</td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        id={`switch-${index}`}
                                        checked={row.access}
                                        onChange={() => handleToggle(index)}
                                        className={`custom-switch ${row.access ? 'switch-on' : 'switch-off'}`}
                                        style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                </td>
                                <td className={row.status === 'Active' ? 'text-success' : 'text-danger'}>
                                    {row.status}
                                </td>
                                <td className='fontColor424242'>{row.createdBy}</td>
                                <td className='fontColor424242'>{row.createdDate}</td>
                                <td>
                                    <FiEdit2 className="me-2 text-primary" style={{ cursor: 'pointer' }} />
                                    <AiOutlinePlus className="text-primary" style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/*  Plan for Candidates */}
            <h4 className="section-title text-start mb-3" style={{ color: '#424242' }} >
                Plan for Candidates
            </h4>
            <div className="table-responsive mt-4">
                <Table bordered className="align-middle text-center">
                    <thead className="table-light no-border-thead">
                        <tr>
                            <th className='fontColor424242 fw-semibold' >Subscription Name</th>
                            <th className='fontColor424242 fw-semibold'>Duration</th>
                            <th className='fontColor424242 fw-semibold'>Amount</th>
                            <th className='fontColor424242 fw-semibold'>Features Included</th>
                            <th className='fontColor424242 fw-semibold'>Job Posting Limit</th>
                            <th className='fontColor424242 fw-semibold'>Candidate Access</th>
                            <th className='fontColor424242 fw-semibold'>Status</th>
                            <th className='fontColor424242 fw-semibold'>Created By</th>
                            <th className='fontColor424242 fw-semibold'>Created Date</th>
                            <th className='fontColor424242 fw-semibold'>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className='fontColor424242'>{row.name}</td>
                                <td className='fontColor424242'>{row.duration}</td>
                                <td className='fontColor424242'>{row.amount}</td>
                                <td className='fontColor424242' style={{ whiteSpace: 'pre-line' }}>{row.features}</td>
                                <td className='fontColor424242'>{row.limit}</td>
                                <td>
                                    <Form.Check
                                        type="switch"
                                        id={`switch-${index}`}
                                        checked={row.access}
                                        onChange={() => handleToggle(index)}
                                        className={`custom-switch ${row.access ? 'switch-on' : 'switch-off'}`}
                                        style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                                    />
                                </td>
                                <td className={row.status === 'Active' ? 'text-success' : 'text-danger'}>
                                    {row.status}
                                </td>
                                <td className='fontColor424242'>{row.createdBy}</td>
                                <td className='fontColor424242'>{row.createdDate}</td>
                                <td>
                                    <FiEdit2 className="me-2 text-primary" style={{ cursor: 'pointer' }} />
                                    <AiOutlinePlus className="text-primary" style={{ cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h5 className="section-title text-start my-4 " style={{ color: '#424242' }} >
                <BsFillBarChartFill size={30} className="me-2" style={{ color: '#3996e7' }} /> Recent Subscribers
            </h5>
            {/* Recent Subscribers */}
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-semibold mb-0 fontColor424242">Recently Joined HR Company</h5>
                        <a href="#" className="text-primary text-decoration-none">View all</a>
                    </div>

                    <div className="custom-card-subs">
                        {/* Header Row */}
                        <Row className="header-row-subs">
                            <Col className="header-col-subs fontColor424242">Name</Col>
                            <Col className="header-col-subs fontColor424242">Contact</Col>
                            <Col className="header-col-subs fontColor424242">Duration</Col>
                            <Col className="header-col-subs fontColor424242">Amount</Col>
                            <Col className="header-col-subs fontColor424242">Status</Col>
                        </Row>

                        {/* Data Rows */}
                        {Subscribersdata.map((item, index) => (
                            <Row className="data-row-subs" key={index}>
                                <Col className="data-col-subs fontColor424242">{item.name}</Col>
                                <Col className="data-col-subs fontColor424242">{item.contact}</Col>
                                <Col className="data-col-subs fontColor424242">{item.duration}</Col>
                                <Col className="data-col-subs fontColor424242">{item.amount}</Col>
                                <Col className="data-col-subs text-success fw-semibold">{item.status}</Col>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>
            {/*  Recently Joined Individual Recruiters */}
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-semibold mb-0 fontColor424242">Recently Joined Candidates</h5>
                        <a href="#" className="text-primary text-decoration-none">View all</a>
                    </div>

                    <div className="custom-card-subs">
                        {/* Header Row */}
                        <Row className="header-row-subs">
                            <Col className="header-col-subs fontColor424242">Name</Col>
                            <Col className="header-col-subs fontColor424242">Contact</Col>
                            <Col className="header-col-subs fontColor424242">Duration</Col>
                            <Col className="header-col-subs fontColor424242">Amount</Col>
                            <Col className="header-col-subs fontColor424242">Status</Col>
                        </Row>

                        {/* Data Rows */}
                        {Subscribersdata.map((item, index) => (
                            <Row className="data-row-subs" key={index}>
                                <Col className="data-col-subs fontColor424242">{item.name}</Col>
                                <Col className="data-col-subs fontColor424242">{item.contact}</Col>
                                <Col className="data-col-subs fontColor424242">{item.duration}</Col>
                                <Col className="data-col-subs fontColor424242">{item.amount}</Col>
                                <Col className="data-col-subs text-success fw-semibold">{item.status}</Col>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>
            {/*  Recently Joined Candidates */}
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-semibold mb-0 fontColor424242">Recently Joined HR Company</h5>
                        <a href="#" className="text-primary text-decoration-none">View all</a>
                    </div>

                    <div className="custom-card-subs">
                        {/* Header Row */}
                        <Row className="header-row-subs">
                            <Col className="header-col-subs fontColor424242">Name</Col>
                            <Col className="header-col-subs fontColor424242">Contact</Col>
                            <Col className="header-col-subs fontColor424242">Duration</Col>
                            <Col className="header-col-subs fontColor424242">Amount</Col>
                            <Col className="header-col-subs fontColor424242">Status</Col>
                        </Row>

                        {/* Data Rows */}
                        {Subscribersdata.map((item, index) => (
                            <Row className="data-row-subs" key={index}>
                                <Col className="data-col-subs fontColor424242">{item.name}</Col>
                                <Col className="data-col-subs fontColor424242">{item.contact}</Col>
                                <Col className="data-col-subs fontColor424242">{item.duration}</Col>
                                <Col className="data-col-subs fontColor424242">{item.amount}</Col>
                                <Col className="data-col-subs text-success fw-semibold">{item.status}</Col>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Subscription;