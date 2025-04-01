import React from 'react'
import UserNavbar from '../components/usernavbar/UserNavbar'
import UserBanner from '../components/userbanner/UserBanner'
import JobCategoriesCarousel from '../components/jobcategory/BrowseCategory'
function UserScreen() {
  return (
    <div>
        <UserNavbar/>
        <UserBanner/>
       <JobCategoriesCarousel/>
    </div>
  )
}

export default UserScreen