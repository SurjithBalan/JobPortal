
import './App.css'
import CompanyLogin from './components/companylogin/CompanyLogin';
import Companypassword from './components/companylogin/Companypassword';
import Companysentmail from './components/companylogin/Companysentmail';
import Resetpassword from './components/companylogin/Resetpassword';
import UserScreen from './pages/UserScreen'
import { HashRouter  as Router , Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<UserScreen/>} />
            <Route path="/companylogin" element={<CompanyLogin/>} />
            <Route path="/companypassword" element={<Companypassword/>} />
            <Route path="/companysentmail" element={<Companysentmail/>} />
            <Route path="/resetpassword" element={<Resetpassword/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
