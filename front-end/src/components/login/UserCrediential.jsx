import { useEffect, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { FcGoogle } from "react-icons/fc";
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';
import GoogleLoginButton from '../google-button/GoogleLoginButton';

function UserCrediential() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState('');

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

   const onLoginSuccess = () => { 
    navigate('/');
   }

  return (
    <Container className='crediential-conatiner'>
      <div className="crediential-topsection">
        <h5 className='cred-title'>Candidate Login</h5>
           <GoogleLoginButton onLoginSuccess={onLoginSuccess}/>
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
