import React from 'react'
import '../realrecruiters/recruiters.css'
import { Container ,Row,Col } from 'react-bootstrap'
import image from '../../assets/image/recruiter.jpeg'
import { PiNumberOne } from "react-icons/pi";
import { PiNumberTwoLight } from "react-icons/pi";
import { PiNumberThreeLight } from "react-icons/pi";
export default function Recruiters() {
  return (
    <Container className='recruiter-section w-auto py-4'>
      <Row >
        <Col md={8} className='recruiter-top'>
          <div className='recruiter-content '>
            <h1 className='text-white'>Get <b>Notified</b> by <b>1000s</b> of <b>Real Recruiters</b></h1>
            <button className='bg-white rounded-4 ' style={{color:'#1E88E5'}}> Highlight My Profile</button>
          </div>
          </Col>
          <Col md={4} >
          <div className='recruiter-image'>
            <img src={image} alt="recruiter-image" />
          </div>
          </Col>
   </Row>

   <Row className='recruiter-row'>
  <Col md={12} className='recruiter'>
    <div className='recruiter-sign d-flex gap-4 align-items-center flex-wrap justify-content-start'>
      <span className='d-flex align-items-center gap-2'>
      <PiNumberOne  size={40} style={{backgroundColor:'white', borderRadius:'50px',color:'#1E88E5'}} /> Register & Sign In
      </span>
      <span className='d-flex align-items-center gap-2'>
      <PiNumberTwoLight   size={40} style={{backgroundColor:'white', borderRadius:'50px',color:'#1E88E5'}} /> Update your Profile
      </span>
      <span className='d-flex align-items-center gap-2'>
      <PiNumberThreeLight size={40} style={{backgroundColor:'white', borderRadius:'50px',color:'#1E88E5'}} /> Apply for Jobs
      </span>
    </div>
    <div className='recruiter-details mx-4'>
      <p>1.Register & Sign in to your job account.</p>
      <p>2.Update your Profile and start your job search with job title & location</p>
      <p>3.Apply to multiple jobs.</p>
    </div>
    <div className='recruiter-button'>
      <button>Register or Sign In</button>
    </div>
  </Col>
</Row>
    </Container>
  )
}
