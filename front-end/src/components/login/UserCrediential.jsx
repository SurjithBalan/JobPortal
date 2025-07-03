import { useEffect, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FcGoogle } from "react-icons/fc";
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';

function UserCrediential() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    /* global google */
    window.google?.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace this with your actual Google Client ID
      callback: handleGoogleLogin,
    });

    window.google?.accounts.id.renderButton(
      document.getElementById('google-login-button'),
      { theme: 'outline', size: 'large', width: '100%' }
    );
  }, []);

  const handleGoogleLogin = async (response) => {
    try {
      const token = response.credential;
      console.log('Google token:', token);

      // Send the token to your backend
      const res = await axios.post(`${BASE_URL}/candidate/google-login`, { token });

      if (res.status === 200) {
        console.log('Login successful:', res.data);
        navigate('/CandidateLogin_otp');
      } else {
        setApiError(res.data.message || 'Google login failed');
      }
    } catch (error) {
      console.error('Google login error:', error);
      setApiError('Google login failed. Please try again.');
    }
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      setApiError('');
      try {
        const data = await axios.post(`${BASE_URL}/candidate/login`, values);
        if (data.status === 200) {
          navigate('/CandidateLogin_otp');
        } else {
          setApiError(data.data.message || 'Invalid credentials. Please try again.');
        }
      } catch (error) {
        setApiError('An error occurred. Please try again later.');
      }
    },
  });

  return (
    <Container className='crediential-conatiner'>
      <div className="crediential-topsection">
        <h5 className='cred-title'>Candidate Login</h5>
        <div id="google-login-button" className="mb-3" />
        <p className="small text-muted">----- Or -----</p>

        {apiError && (
          <div className="alert alert-danger w-70 text-center" role="alert" style={{ fontSize: '0.85rem' }}>
            {apiError}
          </div>
        )}
      </div>

      <Form className="w-70" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <div className="position-relative">
            <span><FaEnvelope className="input-icon-canidate-email" /></span>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              className={`ps-5 ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''} ${apiError ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              aria-describedby="emailHelp"
            />
            <div className="text-danger mt-1 small" style={{ minHeight: '18px' }}>
              {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            </div>
          </div>
        </Form.Group>

        <Button
          type="submit"
          className="rounded-pill text-white w-100"
          style={{ backgroundColor: '#1e88e5' }}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Sending...' : 'Send OTP'}
        </Button>
      </Form>
    </Container>
  );
}

export default UserCrediential;
