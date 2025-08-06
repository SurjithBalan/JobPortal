import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import apiClient from '../../api/apiClient';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/features/userSlice';

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const dispatch = useDispatch();
  const handleSuccess = async (credentialResponse) => {
    if (credentialResponse.credential) {
      try {
        const csrfResponse = await apiClient.get('/auth/csrf-token');
        const csrfToken = csrfResponse.data.csrfToken;
        Cookies.set('XSRF-TOKEN', csrfToken, { sameSite: 'Lax', secure: import.meta.env.VITE_APP_NODE_ENV === 'production' });

        const response = await apiClient.post('/auth/google', {
          id_token: credentialResponse.credential,
        });
        if (response.status === 200) {
          const filterData = response.data;
          dispatch(setUser(filterData.user))
          onLoginSuccess();
        } 
        
      } catch (error) {
        alert('Login failed. Please try again.');
      }
    }
  };

  const handleError = () => {
    alert('Google login failed. Please try again.');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      useOneTap
    />
  );
};

export default GoogleLoginButton;