import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode';
// import jwt from 'jsonwebtoken';

const Login = () => {

    const [mail, SetMail] = useState('');
    const [pass, SetPass] = useState('');
    const [ErrsMail, setErrsMail] = useState('');
    const [ErrPass, setErrPass] = useState('');

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setmsg] = useState('');
    const navigate = useNavigate();


    const login = () => {
        if (!mail || !pass) {
            if (!mail) {
                setErrsMail('E-mail Required');
            } else {
                setErrsMail(' ');
            }

            if (!pass) {
                setErrPass('Password Required');
            } else {
                setErrPass(' ');
            }
        } else {
            if (mail) {
                setErrsMail(' ');
            }

            if (pass) {
                setErrPass(' ');
            }

            axios.post('http://fleet.prantiksoft.com/backend/Login/carLogin', {
                email: mail,
                password: pass
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                let token = response.data.token;
                const user = jwt(token);
                let data = response.data;
                if (data.status == true) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('name', user.data.name);
                    localStorage.setItem('id', user.data.id);
                    navigate("/bookride");
                } else {
                    setmsg('Something went wrong!')
                }
            })


        }






    }


    return (
        <>
            <html lang="en" />
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content />
                <meta name="keywords" content />
                <title>Taxica</title>
            </head>
            <body>

                <header class="header">

                    <div class="header-top">
                        <div class="container">
                            <div class="header-top-wrapper">
                                <div class="header-top-left">
                                    <div class="header-top-contact">
                                        <ul>
                                            <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#c8a1a6aea788adb0a9a5b8a4ade6aba7a5"><i class="far fa-envelopes"></i>
                                                <span class="__cf_email__" data-cfemail="355c5b535a75504d54584559501b565a58">[email&#160;protected]</span></a></li>
                                            <li><a href="tel:+21236547898"><i class="far fa-phone-volume"></i> +2 123 654 7898</a>
                                            </li>
                                            <li><a href="#"><i class="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="header-top-right">
                                    <div class="header-top-link">
                                        <NavLink to='/login'><i className="far fa-arrow-right-to-bracket"></i> Login</NavLink>
                                        <NavLink to='/register'><i className="far fa-user-vneck"></i> Register</NavLink>
                                    </div>
                                    <div class="header-top-social">
                                        <span>Follow Us: </span>
                                        <a href="#"><i class="fab fa-facebook"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-navigation">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container position-relative">
                                <a class="navbar-brand" href="index.html">
                                    <img src="img/logo/logo.png" alt="logo" />
                                </a>
                                <div class="mobile-menu-right">
                                    <div class="search-btn">
                                        <button type="button" class="nav-right-link"><i class="far fa-search"></i></button>
                                    </div>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-mobile-icon"><i class="far fa-bars"></i></span>
                                    </button>
                                </div>
                                <div class="collapse navbar-collapse" id="main_nav">
                                    <ul class="navbar-nav">

                                        <li class="nav-item dropdown">
                                            <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                                        </li>

                                        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Taxi</a>
                                            <ul class="dropdown-menu fade-down">
                                                <li><a class="dropdown-item" href="taxi.html">Taxi</a></li>
                                                <li><a class="dropdown-item" href="taxi-single.html">Taxi Single</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Service</a>
                                            <ul class="dropdown-menu fade-down">
                                                <li><a class="dropdown-item" href="service.html">Service</a></li>
                                                <li><a class="dropdown-item" href="service-single.html">Service Single</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                            <ul class="dropdown-menu fade-down">
                                                <li><a class="dropdown-item" href="about.html">About Us</a></li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item dropdown-toggle" href="#">My Account</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                                        <li><a class="dropdown-item" href="profile.html">My Profile</a></li>
                                                        <li><a class="dropdown-item" href="profile-booking.html">My Booking</a></li>
                                                        <li><a class="dropdown-item" href="profile-cancel-booking.html">Cancel
                                                            Booking</a></li>
                                                        <li><a class="dropdown-item" href="profile-payment.html">Payment History</a>
                                                        </li>
                                                        <li><a class="dropdown-item" href="profile-setting.html">Settings</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="login.html">Login</a></li>
                                                        <li><a class="dropdown-item" href="register.html">Register</a></li>
                                                        <li><a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item dropdown-toggle" href="#">Driver</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="driver.html">Driver</a></li>
                                                        <li><a class="dropdown-item" href="driver-single.html">Driver Single</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a class="dropdown-item" href="team.html">Our Team</a></li>
                                                <li><a class="dropdown-item" href="book-ride.html">Book A Ride</a></li>
                                                <li><a class="dropdown-item" href="taxi-rate.html">Our Taxi Rate</a></li>
                                                <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                                <li><a class="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                                <li><a class="dropdown-item" href="404.html">404 Error</a></li>
                                                <li><a class="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                                <li><a class="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                                <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                                            <ul class="dropdown-menu fade-down">
                                                <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                                <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                                    </ul>
                                    <div class="nav-right">
                                        <div class="search-btn">
                                            <button type="button" class="nav-right-link"><i class="far fa-search"></i></button>
                                        </div>
                                        <div class="nav-right-btn mt-2">
                                            <a href="#" class="theme-btn"><span class="fas fa-taxi"></span>Book A Taxi</a>
                                        </div>
                                        <div class="sidebar-btn">
                                            <button type="button" class="nav-right-link"><i class="far fa-bars-filter"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <div class="search-area">
                                    <form action="#">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Type Keyword..." />
                                            <button type="submit" class="search-icon-btn"><i class="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </nav>
                    </div>
                </header>


                <div class="sidebar-popup">
                    <div class="sidebar-wrapper">
                        <div class="sidebar-content">
                            <button type="button" class="close-sidebar-popup"><i class="far fa-xmark"></i></button>
                            <div class="sidebar-logo">
                                <img src="img/logo/logo.png" alt />
                            </div>
                            <div class="sidebar-about">
                                <h4>About Us</h4>
                                <p>There are many variations of passages available sure there majority have suffered alteration in
                                    some form by injected humour or randomised words which don't look even slightly believable.</p>
                            </div>
                            <div class="sidebar-contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li>
                                        <h6>Email</h6>
                                        <a href="https://live.themewild.com/cdn-cgi/l/email-protection#c2abaca4ad82a7baa3afb2aea7eca1adaf"><i class="far fa-envelope"></i><span class="__cf_email__" data-cfemail="01686f676e416479606c716d642f626e6c">[email&#160;protected]</span></a>
                                    </li>
                                    <li>
                                        <h6>Phone</h6>
                                        <a href="tel:+21236547898"><i class="far fa-phone"></i>+2 123 654 7898</a>
                                    </li>
                                    <li>
                                        <h6>Address</h6>
                                        <a href="#"><i class="far fa-location-dot"></i>25/B Milford Road, New York</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-social">
                                <h4>Follow Us</h4>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <main class="main">

                    <div class="site-breadcrumb" style={{ background: 'url(img/breadcrumb/01.jpg)' }}>
                        <div class="container">
                            <h2 class="breadcrumb-title">Login</h2>
                            <ul class="breadcrumb-menu">
                                <li><a href="index.html">Home</a></li>
                                <li class="active">Login</li>
                            </ul>
                        </div>
                    </div>

                    <div class="login-area py-120">
                        <div class="container">
                            <div class="col-md-5 mx-auto">
                                {/* <form class="login-form" onSubmit={validateForm} > */}
                                <div class="login-form">
                                    <div class="login-header">
                                        <img src="img/logo/logo.png" alt />
                                        <p>Login with your Taxica account</p>
                                        <h5 style={{ color: 'red' }}>
                                            {msg}
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" onChange={(e) => SetMail(e.target.value)} value={mail} name='email' className="form-control" placeholder="Your Email"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <h6 style={{ color: 'red' }}>
                                                {ErrsMail}
                                            </h6>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" onChange={(e) => SetPass(e.target.value)} value={pass} className="form-control" name='password' placeholder="Your Password" />
                                        </div>
                                        <div className='form-group'>
                                            <h6 style={{ color: 'red' }}>
                                                {ErrPass}
                                            </h6>

                                        </div>

                                        <div className="d-flex justify-content-between mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value id="remember" />
                                                <label className="form-check-label" for="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <a href="forgot-password.html" className="forgot-pass">Forgot Password?</a>
                                        </div>
                                        <div className="d-flex align-items-center">

                                            <button type="submit" className="theme-btn" onClick={login}><i className="far fa-paper-plane"  ></i> Login</button>
                                        </div>
                                    </div>

                                    <div class="login-footer">
                                        <p>Don't have an account? <a href="register.html">Register.</a></p>
                                        <div class="social-login">
                                            <p>Continue with social media</p>
                                            <div class="social-login-list">
                                                <NavLink to="#"><i class="fab fa-facebook-f"></i></NavLink>
                                                <NavLink to="#"><i class="fab fa-google"></i></NavLink>
                                                <NavLink to="#"><i class="fab fa-twitter"></i></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>

                </main>

                <footer class="footer-area">
                    <div class="footer-widget">
                        <div class="container">
                            <div class="row footer-widget-wrapper pt-120 pb-70">
                                <div class="col-md-6 col-lg-4">
                                    <div class="footer-widget-box about-us">
                                        <a href="#" class="footer-logo">
                                            <img src="img/logo/logo-light.png" alt />
                                        </a>
                                        <p class="mb-3">
                                            We are many variations of passages available but the majority have suffered alteration
                                            in some form by injected humour words believable.
                                        </p>
                                        <ul class="footer-contact">
                                            <li><a href="tel:+21236547898"><i class="far fa-phone"></i>+2 123 654 7898</a></li>
                                            <li><i class="far fa-map-marker-alt"></i>25/B Milford Road, New York</li>
                                            <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#771e19111837120f161a071b125914181a"><i class="far fa-envelope"></i><span class="__cf_email__" data-cfemail="0c65626a634c69746d617c6069226f6361">[email&#160;protected]</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-2">
                                    <div class="footer-widget-box list">
                                        <h4 class="footer-widget-title">Quick Links</h4>
                                        <ul class="footer-list">
                                            <li><a href="#"><i class="fas fa-caret-right"></i> About Us</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Update News</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Testimonials</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Terms Of Service</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Privacy policy</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Our Drivers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="footer-widget-box list">
                                        <h4 class="footer-widget-title">Support Center</h4>
                                        <ul class="footer-list">
                                            <li><a href="#"><i class="fas fa-caret-right"></i> FAQ's</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Affiliates</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Booking Tips</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Book A Ride</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Contact Us</a></li>
                                            <li><a href="#"><i class="fas fa-caret-right"></i> Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="footer-widget-box list">
                                        <h4 class="footer-widget-title">Newsletter</h4>
                                        <div class="footer-newsletter">
                                            <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                                            <div class="subscribe-form">
                                                <form action="#">
                                                    <input type="email" class="form-control" placeholder="Your Email" />
                                                    <button class="theme-btn" type="submit">
                                                        Subscribe Now <i class="far fa-paper-plane"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 align-self-center">
                                    <p class="copyright-text">
                                        &copy; Copyright <span id="date"></span> <a href="#"> Taxica </a> All Rights Reserved.
                                    </p>
                                </div>
                                <div class="col-md-6 align-self-center">
                                    <ul class="footer-social">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


                <a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>



            </body >



        </>
    )
}

export default Login;
