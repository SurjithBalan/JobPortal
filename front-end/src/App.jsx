
import './App.css'
import CompanyLogin from './components/companylogin/CompanyLogin';
import Companypassword from './components/companylogin/Companypassword';
import Companysentmail from './components/companylogin/Companysentmail';
import Resetpassword from './components/companylogin/Resetpassword';
import CandidateLogin from './components/CandidateLogin/emailRegister/Candidate_Login_email'
import CandidateLogin_otp from './components/CandidateLogin/otpEnterPage/Candidate_Login_otp'
import Candidate_resentOtp_login from './components/CandidateLogin/resentOtp/ResentOtp_candidate'
import VerifyOTP from './components/CandidateLogin/VerifyOTP/VerifyOTP'
import UserScreen from './pages/UserScreen'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Herofilter from './components/herofilter/Herofilter';
import HRCompanyJobListingPage from './components/HRcompanyjoblist/HRCompanyJobs';
import Featurefilter from './components/featurefilter/Featurefilter';
import Companyinformation from './components/companyloginform/Companyinformation';
import RecomendedJobsDashborad from './components/recommend jobs/RecomendedJobsDashboard/RecomendedJobsDashborad'
import CandidatequickProfilePage from './components/CandidateLogin/CandidateProfile/quickProfile'
import CandidateDashboardMain from './components/CandidatesDashboard/candidateDashboardMain'
import JobDetailsPage from './components/JobDescription/jobDescription'
import HRDashboardMain from './components/HRDashboard/HRDashboardMain'
function App() {  
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<UserScreen />} />
            <Route path="/companylogin" element={<CompanyLogin />} />
            <Route path="/companypassword" element={<Companypassword />} />
            <Route path="/companysentmail" element={<Companysentmail />} />
            <Route path="/resetpassword" element={<Resetpassword />} />
            <Route path='/CandidateLogin' element={<CandidateLogin />} />
            <Route path='/CandidateLogin_otp' element={<CandidateLogin_otp />} />
            <Route path='/Candidate_resentOtp_login' element={<Candidate_resentOtp_login />} />
            <Route path='/Candidate_verify_Otp' element={<VerifyOTP />} />
            <Route path='/hero-search-filter' element={<Herofilter />} />
            <Route path='/feature-filter' element = {<Featurefilter/>}/>
            <Route path='/hr-company-page' element = {<HRCompanyJobListingPage/>}/>
            <Route path='/company-register-form' element = {<Companyinformation/>}/>
            <Route path='/hr-company-page' element={< HRCompanyJobListingPage/>} />
            <Route path='/Recommended_jobs_Dashboard' element = {<RecomendedJobsDashborad/>}></Route>
            <Route path='/HR_companyes' element={<HRCompanyJobListingPage/>}></Route>
            <Route path = '/reccommended_job_list' element={<RecomendedJobsDashborad/>}></Route>
            <Route path = '/CandidatequickProfilePage' element ={<CandidatequickProfilePage/>}></Route>
            <Route path = '/CandidateDashboardMain' element = {<CandidateDashboardMain/>}></Route>
            <Route path = '/jobdescription' element ={<JobDetailsPage/>}></Route>
            <Route path = '/Hr' element ={<HRDashboardMain/>}></Route>            
          </Routes>         
        </div>
      </Router>
    </>
  )
}

export default App
