import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Homepage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // No type annotation
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const csrfResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/csrf-token`, { withCredentials: true });
        const csrfToken = csrfResponse.data.csrfToken;
        Cookies.set('XSRF-TOKEN', csrfToken, { sameSite: 'Lax', secure: process.env.NODE_ENV === 'production' });

        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/protected`, {
          withCredentials: true,
          headers: {
            'X-CSRF-TOKEN': csrfToken
          }
        });
        setUserData(response.data.user);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data. Please log in again.');
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('jwtToken');
    Cookies.remove('XSRF-TOKEN');
    setUserData(null);
    navigate('/login');
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading user data...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the Home Page!</h2>
      {userData ? (
        <div>
          <p>Hello, {userData.name}!</p>
          <p>Email: {userData.email}</p>
          {userData.imageUrl && <img src={userData.imageUrl} alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />}
          <br />
          <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      ) : (
        <p>You are not logged in. <button onClick={() => navigate('/login')}>Go to Login</button></p>
      )}
    </div>
  );
};

export default Homepage;