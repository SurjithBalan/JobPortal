import React from 'react'
import {  Col} from 'react-bootstrap';
import './login.css'
import UserCrediential from './UserCrediential';
function LoginScreen() {

  return (
    <div className="login-main-container">
        <div className="login-box">
                       
                        <Col md={6} className='login-left-side'>
                            <h2 className="text-white fw-bold mt-4 fs-2">Welcome Back!</h2>
                            <p className="small text-white">To Connect with the Top HR’s</p> 
                        </Col>
    
                        <Col md={6} className='login-right-side'>
                             <UserCrediential/>       
                        </Col>
                    </div>
                </div>
  )
}
export default LoginScreen
