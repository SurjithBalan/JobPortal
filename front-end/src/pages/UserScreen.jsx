import React from 'react'
import UserNavbar from '../components/usernavbar/UserNavbar'
import UserBanner from '../components/userbanner/UserBanner'
import JobCategories from '../components/jobcategory/BrowsCategory'
function UserScreen() {
  return (
    <div>
        <UserNavbar/>
        <UserBanner/>
        <JobCategories/>
    </div>
  )
}

export default UserScreen