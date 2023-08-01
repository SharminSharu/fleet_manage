
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

export default function Register() {
  const navigate = useNavigate()
  const p = useParams();
  const [name, setname] = useState('');
  const [role, setRole] = useState('users');
  const [mail, SetMail] = useState('');
  const [pass, SetPass] = useState('');

  const [ErrsName, setErrName] = useState('');
  const [ErrsMail, setErrsMail] = useState('');
  const [ErrPass, setErrPass] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [msg, setmsg] = useState('');

  const saveRegis = () => {

      axios.post('http://fleet.prantiksoft.com/backend/User/saveCustomer', {
        name: name,
        email: mail,
        password: pass,
        role: role
      }).then(function (response) {
        let data = response.data.msg;
        setmsg(data);
        setname('');
        SetMail('');
        SetPass('');
        setEmail('');
        setPassword('');
        navigate('/login');
      })


  }


  return (
    <>

      <html lang="en">

        <body>

          <Header />
          <div className="sidebar-popup">
            <div className="sidebar-wrapper">
              <div className="sidebar-content">
                <button type="button" className="close-sidebar-popup"><i className="far fa-xmark"></i></button>
                <div className="sidebar-logo">
                  <img src="img/logo/logo.png" alt />
                </div>
                <div className="sidebar-about">
                  <h4>About Us</h4>
                  <p>There are many variations of passages available sure there majority have suffered alteration in
                    some form by injected humour or randomised words which don't look even slightly believable.</p>
                </div>
                <div className="sidebar-contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <h6>Email</h6>
                      <a href="https://live.themewild.com/cdn-cgi/l/email-protection#127b7c747d52776a737f627e773c717d7f"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="ef86818980af8a978e829f838ac18c8082">[email&#160;protected]</span></a>
                    </li>
                    <li>
                      <h6>Phone</h6>
                      <a href="tel:+21236547898"><i className="far fa-phone"></i>+2 123 654 7898</a>
                    </li>
                    <li>
                      <h6>Address</h6>
                      <a href="#"><i className="far fa-location-dot"></i>25/B Milford Road, New York</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-social">
                  <h4>Follow Us</h4>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <main className="main">

            <div className="site-breadcrumb" style={{ backgroundImage: 'url(img/breadcrumb/01.jpg)' }}>
              <div className="container">
                <h2 className="breadcrumb-title">Register</h2>
                <ul className="breadcrumb-menu">
                  <li><a href="index.html">Home</a></li>
                  <li className="active">Register</li>
                </ul>
              </div>
            </div>


            <div className="login-area py-120">
              <div className="container">
                <div className="col-md-5 mx-auto">
                  <div className="login-form">
                    <div className="login-header">
                      <img src="img/logo/logo.png" alt />
                      <p>Create your Taxica account</p>
                      <p style={{ color: 'green' }}>{msg}</p>
                    </div>
                    <div>
                      <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" onChange={(e) => setname(e.target.value)} value={name} />
                      </div>
                      <div className='form-group'>
                        <h6 style={{ color: 'red' }}>
                          {ErrsName}
                        </h6>
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" className="form-control" placeholder="Your Email" onChange={(e) => SetMail(e.target.value)} value={mail} />
                      </div>

                      <div className='form-group'>
                        <h6 style={{ color: 'red' }}>
                          {ErrsMail}
                        </h6>
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Your Password" onChange={(e) => SetPass(e.target.value)} value={pass} />
                      </div>

                      <div className='form-group'>
                        <h6 style={{ color: 'red' }}>
                          {ErrPass}
                        </h6>
                      </div>

                      <div className="form-check form-group">
                        <input className="form-check-input" type="checkbox" value id="agree" />
                        <label className="form-check-label" for="agree">
                          I agree with the <NavLink to="#">Terms Of Service.</NavLink>
                        </label>
                      </div>

                      <div className="d-flex align-items-center">
                        <button type="submit" className="theme-btn" onClick={saveRegis}><i className="far fa-paper-plane"  ></i> Register</button>
                      </div>

                    </div>
                    <div className="login-footer">
                      <p>Already have an account? <NavLink to='/login'>Login.</NavLink></p>
                      <div className="social-login">
                        <p>Continue with social media</p>
                        <div className="social-login-list">
                          <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                          <NavLink to="#"><i className="fab fa-google"></i></NavLink>
                          <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>

          <Footer />


          <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>



        </body>


      </html>
    </>
  )
}
