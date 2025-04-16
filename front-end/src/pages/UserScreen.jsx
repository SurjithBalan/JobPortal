import React from 'react'
import UserbannerAutoSlider from '../components/userbanner/UserbannerCarousel'
import JobCategories from '../components/jobCategories/JobCategories'
import UrgentFeaturedJobs from '../components/UrgentFeauturedJobs/UrgentFeauturedJobs'
import RecommendedJobs from '../components/recommend jobs/Recommended_Jobs'
import FeedbackForm from '../components/FeedbackForm/FeedbackForm'
import FeaturedCandidates from '../components/FeaturedCandidates/FeaturedCandidates'
import UserNavbar from '../components/usernavbar/UserNavbar'
// import Latestjob from
function UserScreen() {
  return (
    <div>
      <UserNavbar/>
      <UserbannerAutoSlider />
      <UrgentFeaturedJobs />
      <RecommendedJobs />
      {/* <Latestjob/> */}
      <JobCategories />
      <FeedbackForm />
      <FeaturedCandidates />
    </div>
  )
}

export default UserScreen