import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        navigate('/');
        console.log('kk');
    }


    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content />
                <meta name="keywords" content />
                <title>Taxica</title>
            </head>


            <header className="header">

                <div className="header-top">
                    <div className="container">
                        <div className="header-top-wrapper">
                            <div className="header-top-left">
                                <div className="header-top-contact">
                                    <ul>
                                        <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#167f78707956736e777b667a733875797b"><i className="far fa-envelopes"></i>
                                            <span className="__cf_email__" data-cfemail="">example@gmail.com</span></a></li>
                                        <li><a href="tel:+21236547898"><i className="far fa-phone-volume"></i> +2 123 654 7898</a>
                                        </li>
                                        <li><a href="#"><i className="far fa-alarm-clock"></i> Sun - Fri (08AM - 10PM)</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-top-right">
                                <div className="header-top-link">

                                    {(!(localStorage.getItem('token'))) ? <>
                                        <NavLink to='/login'><i className="far fa-arrow-right-to-bracket"></i> Login</NavLink>
                                        <NavLink to='/register'><i className="far fa-user-vneck"></i> Register</NavLink>
                                    </> : <>
                                        <a href='#' onClick={logoutUser}><i className="far fa-user-vneck"></i> Logout</a>
                                    </>}

                                </div>
                                <div className="header-top-link">

                                    {(!(localStorage.getItem('token'))) ? <>
                                        
                                    </> : <>
                                    <NavLink to='/booking_list'><i className="far fa-user-vneck"></i> My Booking</NavLink>
                                    </>}

                                </div>
                                <div className="header-top-social">
                                    <span>Follow Us: </span>
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-navigation">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container position-relative">
                            <a className="navbar-brand" href="index.html">
                                <img src={'img/logo/logo.png'} alt="logo" />
                            </a>
                            <div className="mobile-menu-right">
                                <div className="search-btn">
                                    <button type="button" className="nav-right-link"><i className="far fa-search"></i></button>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-mobile-icon"><i className="far fa-bars"></i></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="main_nav">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Taxi</a>
                                        <ul className="dropdown-menu fade-down">
                                            <li><a className="dropdown-item" href="taxi.html">Taxi</a></li>
                                            <li><a className="dropdown-item" href="taxi-single.html">Taxi Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Service</NavLink>
                                        <ul className="dropdown-menu fade-down">
                                            <li><NavLink className="dropdown-item" to="/services" >Service</NavLink></li>
                                            <li><NavLink className="dropdown-item" href="service-single.html">Service Single</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                                        <ul className="dropdown-menu fade-down">
                                            <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                            <li className="dropdown-submenu">
                                                <a className="dropdown-item dropdown-toggle" href="#">My Account</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                                    <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                                    <li><a className="dropdown-item" href="profile-booking.html">My Booking</a></li>
                                                    <li><a className="dropdown-item" href="profile-cancel-booking.html">Cancel
                                                        Booking</a></li>
                                                    <li><a className="dropdown-item" href="profile-payment.html">Payment History</a>
                                                    </li>
                                                    <li><a className="dropdown-item" href="profile-setting.html">Settings</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="login.html">Login</a></li>
                                                    <li><a className="dropdown-item" href="register.html">Register</a></li>
                                                    <li><a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown-submenu">
                                                <a className="dropdown-item dropdown-toggle" href="#">Driver</a>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="driver.html">Driver</a></li>
                                                    <li><a className="dropdown-item" href="driver-single.html">Driver Single</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a className="dropdown-item" href="team.html">Our Team</a></li>
                                            <li><a className="dropdown-item" href="book-ride.html">Book A Ride</a></li>
                                            <li><a className="dropdown-item" href="taxi-rate.html">Our Taxi Rate</a></li>
                                            <li><a className="dropdown-item" href="faq.html">Faq</a></li>
                                            <li><a className="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                            <li><a className="dropdown-item" href="404.html">404 Error</a></li>
                                            <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                                            <li><a className="dropdown-item" href="terms.html">Terms Of Service</a></li>
                                            <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                                        <ul className="dropdown-menu fade-down">
                                            <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                            <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                </ul>
                                <div className="nav-right">
                                    <div className="search-btn">
                                        <button type="button" className="nav-right-link"><i className="far fa-search"></i></button>
                                    </div>
                                    {(!(localStorage.getItem('token'))) ? <>
                                        <div className="nav-right-btn mt-2">
                                            <NavLink to='/login' className="theme-btn"><span className="fas fa-taxi"></span>Book A Taxi</NavLink>
                                        </div>
                                    </> : <>
                                        <div className="nav-right-btn mt-2">
                                            <NavLink to='/bookride' className="theme-btn"><span className="fas fa-taxi"></span>Book A Taxi</NavLink>
                                        </div>
                                    </>}

                                    <div className="sidebar-btn">
                                        <button type="button" className="nav-right-link"><i className="far fa-bars-filter"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div className="search-area">
                                <form action="#">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Type Keyword..." />
                                        <button type="submit" className="search-icon-btn"><i className="far fa-search"></i></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
