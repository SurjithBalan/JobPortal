import React from 'react'
import UserbannerAutoSlider from '../components/userbanner/UserbannerCarousel'
import JobCategories from '../components/jobCategories/JobCategories'
import UrgentFeaturedJobs from '../components/UrgentFeauturedJobs/UrgentFeauturedJobs'
import RecommendedJobs from '../components/recommend jobs/Recommended_Jobs'
import FeedbackForm from '../components/FeedbackForm/FeedbackForm'
import FeaturedCandidates from '../components/FeaturedCandidates/FeaturedCandidates'
import UserNavbar from '../components/usernavbar/UserNavbar'
import Latestjob from '../components/latestjobs/Latestjob'
import Counter from '../components/hrcompanies/Counter'
// import Tophiring from '../components/tophiring/Tophiring'
function UserScreen() {
  return (
    <div>
      <UserNavbar/>
      <UserbannerAutoSlider />
      <Counter/>
      <UrgentFeaturedJobs />
      <RecommendedJobs />
      <Latestjob/>
      <JobCategories />
      <FeedbackForm />
      <FeaturedCandidates />
      {/* <Tophiring/> */}
    </div>
  )
}

export default UserScreen