import React from 'react'
import UserbannerAutoSlider from '../components/userbanner/UserbannerCarousel'
import JobCategories from '../components/jobCategories/JobCategories'
import UrgentFeaturedJobs from '../components/UrgentFeauturedJobs/UrgentFeauturedJobs'
import RecommendedJobs from '../components/recommend jobs/Recommended_Jobs'
import FeedbackForm from '../components/FeedbackForm/FeedbackForm'
import FeaturedCandidates from '../components/FeaturedCandidates/FeaturedCandidates'
import UserNavbar from '../components/usernavbar/UserNavbar'
import Counter from '../components/hrcompanies/Counter'
import HrCompanies from '../components/hrcompanies/HrCompanies'
import Latestjob from '../components/latestjobs/Latestjob'
import About from '../components/about/About'
function UserScreen() {
  return (
    <div>
      <UserNavbar/>
      <UserbannerAutoSlider />
      <Counter/>
      <HrCompanies/>
      <UrgentFeaturedJobs />
      <RecommendedJobs />
      <Latestjob/>
      <JobCategories />
      <FeaturedCandidates />
      <About/>
      <FeedbackForm />
      
    </div>
  )
}

export default UserScreen