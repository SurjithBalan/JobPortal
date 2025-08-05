import Cookies from 'js-cookie';
import { Navigate, Outlet } from "react-router-dom";


const isAuthenticated = () => {
  return Cookies.get('XSRF-TOKEN') !== undefined;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
