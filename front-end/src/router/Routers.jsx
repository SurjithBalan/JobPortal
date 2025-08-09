import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.json';
import PrivateRoute from './PrivateRoute';
import CompanyLogin from '../components/companylogin/CompanyLogin';
import Companypassword from '../components/companylogin/Companypassword';
import Companysentmail from '../components/companylogin/Companysentmail';
import Resetpassword from '../components/companylogin/Resetpassword';
import CandidateLogin from '../components/CandidateLogin/emailRegister/Candidate_Login_email';
import CandidateLogin_otp from '../components/CandidateLogin/otpEnterPage/Candidate_Login_otp';
import Candidate_resentOtp_login from '../components/CandidateLogin/resentOtp/ResentOtp_candidate';
import VerifyOTP from '../components/CandidateLogin/VerifyOTP/VerifyOTP';
import UserScreen from '../pages/UserScreen';
import Herofilter from '../components/herofilter/Herofilter';
import HRCompanyJobListingPage from '../components/HRcompanyjoblist/HRCompanyJobs';
import Featurefilter from '../components/featurefilter/Featurefilter';
import Companyinformation from '../components/companyloginform/Companyinformation';
import RecomendedJobsDashborad from '../components/recommend jobs/RecomendedJobsDashboard/RecomendedJobsDashborad';
import CandidatequickProfilePage from '../components/CandidateLogin/CandidateProfile/quickProfile';
import Joblisiting from '../components/joblisting/Joblisiting';
import LoginScreen from '../components/login/LoginScreen';

// Optional: fallback page
// import NotFound from '../components/NotFound';

const componentMap = {
  home: UserScreen,
  login: LoginScreen,
  companyLogin: CompanyLogin,
  companyPassword: Companypassword,
  companySentMail: Companysentmail,
  resetPassword: Resetpassword,
  CandidateLogin: CandidateLogin,
  CandidateLogin_otp: CandidateLogin_otp,
  Candidate_resentOtp_login: Candidate_resentOtp_login,
  VerifyOTP: VerifyOTP,
  heroSearchFilter: Herofilter,
  hrCompanyPage: HRCompanyJobListingPage,
  featureFilter: Featurefilter,
  companyRegisterForm: Companyinformation,
  Recommended_jobs_Dashboard: RecomendedJobsDashborad,
  CandidatequickProfilePage: CandidatequickProfilePage,
  Job_listing_page: Joblisiting,
  profile: UserScreen, 
  dashboard: UserScreen,
  // notFound: NotFound, // Optional fallback
};

const authRequiredRoutes = [
  'resetPassword',
  'VerifyOTP',
  'hrCompanyPage',
  'Recommended_jobs_Dashboard',
  'profile',
];

function Routers() {

  return (
    <Router>
      <Routes>
        {Object.entries(routes).map(([key, path]) => {
          const Component = componentMap[key];
          if (!Component) return null;

          const requiresAuth = authRequiredRoutes.includes(key);

          if (requiresAuth) {
            return (
              <Route key={path} path={path} element={<PrivateRoute />}>
                <Route index element={<Component />} />
              </Route>
            );
          }

          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Router>
  );
}

export default Routers;
