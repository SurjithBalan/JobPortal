import React from 'react'
import { Container } from 'react-bootstrap'
import UserbannerAutoSlider from '../components/userbanner/UserbannerCarousel'
import JobCategories from '../components/jobCategories/JobCategories'
import UrgentFeaturedJobs from '../components/UrgentFeauturedJobs/UrgentFeauturedJobs'
import RecommendedJobs from '../components/recommend jobs/Recommended_Jobs'
import FeedbackForm from '../components/FeedbackForm/FeedbackForm'
import FeaturedCandidates from '../components/FeaturedCandidates/FeaturedCandidates'
import UserNavbar from '../components/usernavbar/UserNavbar'
import Latestjob from '../components/latestjobs/Latestjob'
import Counter from '../components/hrcompanies/Counter'
import About from '../components/about/About'
import Testimonials from '../components/testimonial/Testimonials'
import HrCompanies from '../components/hrcompanies/HrCompanies'
import Recruiters from '../components/realrecruiters/Recruiters'
import Footer from '../components/Footer/Footer'
// import BreadcrumbNavbarCompanyList from '../components/HRcompanyjoblist/BreadcrumbNavbarCompanyList'
import HRCompanyJobListingPage from '../components/HRcompanyjoblist/HRCompanyJobs'
import RecomendedJobsDashborad from '../components/recommend jobs/RecomendedJobsDashboard/RecomendedJobsDashborad'
import PostJob from '../components/postJob/postJob'
function UserScreen() {
  return (
    <Container fluid className='p-0' style={{
      margin: "0",
      padding: "0",
      overflowX: "hidden",
      width: "100%",
    }}>
      <UserNavbar />
      <UserbannerAutoSlider />
      <Counter />
      <HrCompanies />
      <UrgentFeaturedJobs />
      <RecommendedJobs />
      <Latestjob />
      <JobCategories />
      <FeaturedCandidates />
      <Recruiters />
      <About />
      <Testimonials />
      <FeedbackForm />
      {/* <HRCompanyJobListingPage /> */}
      <Footer />
      {/* <RecomendedJobsDashborad/>
      <PostJob/> */}      
    </Container>
  )
}

export default UserScreen