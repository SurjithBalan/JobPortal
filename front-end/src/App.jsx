
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
import HRCompanyJobListingPage from'./components/HRcompanyjoblist/HRCompanyJobs';
import BreadcrumbNavbarCompanyList from './components/HRcompanyjoblist/BreadcrumbNavbarCompanyList'
function App() {


  return (
    <>
      <Router>
        <div>
        <BreadcrumbNavbarCompanyList />
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
            <Route path='/hr-company-page' element = {<HRCompanyJobListingPage/>}/>
          </Routes>
          
        </div>
      </Router>
    </>
  )
}

export default App
