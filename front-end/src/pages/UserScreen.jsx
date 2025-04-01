import React from 'react'
import UserNavbar from '../components/usernavbar/UserNavbar'
import UserBanner from '../components/userbanner/UserBanner'
import JobCategories from '../components/jobcategory/BrowseCategory'
import Tophiring from '../components/tophiring/Tophiring'
function UserScreen() {
  return (
    <div>
        <UserNavbar/>
        <UserBanner/>
        <Tophiring/>
        <JobCategories/>
    </div>
  )
}

export default UserScreen