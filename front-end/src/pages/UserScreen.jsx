import React from 'react'
import UserNavbar from '../components/usernavbar/UserNavbar'
import UserBanner from '../components/userbanner/UserBanner'
import JobCategories from '../components/jobcategory/BrowseCategory'
import Tophiring from '../components/tophiring/Tophiring'
import Ourservices from '../components/services/Ourservices'
function UserScreen() {
  return (
    <div>
        <UserNavbar/>
        <UserBanner/>
        <Tophiring/>
        <JobCategories/>
        <Ourservices/>
    </div>
  )
}

export default UserScreen