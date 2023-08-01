import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bookform from './Bookform';

export default function Home() {
    // const [startlocation, setstartlocation] = useState('');
    // const [endlocation, setendlocation] = useState('');
    // const [startdate, setstartdate] = useState('');
    // const [enddate, setenddate] = useState('');
    // const [type, settype] = useState('');
    // const [msg, setmsg] = useState('');
    // const navigate = useNavigate();

    


    return (
        <>
            <html lang="en" />
            <Header />
            <body>

                <div className="sidebar-popup">
                    <div className="sidebar-wrapper">
                        <div className="sidebar-content">
                            <button type="button" className="close-sidebar-popup"><i className="far fa-xmark"></i></button>
                            <div className="sidebar-logo">
                                <img src={'img/logo/logo.png'} alt />
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
                                        <a href="https://live.themewild.com/cdn-cgi/l/email-protection#ec85828a83ac89948d819c8089c28f8381"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="bbd2d5ddd4fbdec3dad6cbd7de95d8d4d6">[email&#160;protected]</span></a>
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

                    <div className="hero-section">
                        <div className="hero-slider ">
                            <div className="hero-single" style={{ backgroundImage: 'url(img/slider/slider-1.jpg)' }}>

                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 col-lg-9 mx-auto">
                                            <div className="hero-content text-center">
                                                <h6 className="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
                                                    Taxica!</h6>
                                                <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                                                    Book <span>Taxi</span> For Your Ride
                                                </h1>
                                                <p data-animation="fadeInLeft" data-delay=".75s">
                                                    There are many variations of passages available the majority have suffered
                                                    alteration in some form generators on the Internet tend to repeat predefined
                                                    chunks injected humour randomised words look even slightly believable.
                                                </p>
                                                <div className="hero-btn justify-content-center" data-animation="fadeInUp" data-delay="1s">
                                                    <a href="#" className="theme-btn">About More<i className="fas fa-arrow-right"></i></a>
                                                    <a href="#" className="theme-btn theme-btn2">Learn More<i className="fas fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        (!(localStorage.getItem('token'))) ? <>
                            <div className="nav-right-btn mt-2">
                                <h1 style={{ fontSize: '500px', color: 'red' }}>
                                    <NavLink to='/login' className="nav-item nav-link theme-btn">Book A Taxi</NavLink>

                                </h1>
                            </div>
                        </> : <>
                            <Bookform />
                        </>
                    }



                    <div className="about-area py-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-left wow fadeInLeft" data-wow-delay=".25s">
                                        <div className="about-img">
                                            <img src={"img/about/01.png"} alt />
                                        </div>
                                        <div className="about-experience">
                                            <div className="about-experience-icon">
                                                <img src={"img/icon/taxi-booking.svg"} alt />
                                            </div>
                                            <b>30 Years Of <br /> Quality Service</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-right wow fadeInRight" data-wow-delay=".25s">
                                        <div className="site-heading mb-3">
                                            <span className="site-title-tagline justify-content-start">
                                                <i className="flaticon-drive"></i> About Us
                                            </span>
                                            <h2 className="site-title">
                                                We Provide Trusted <span>Cab Service</span> In The World
                                            </h2>
                                        </div>
                                        <p className="about-text">
                                            There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form, by injected humour.
                                        </p>
                                        <div className="about-list-wrapper">
                                            <ul className="about-list list-unstyled">
                                                <li>
                                                    At vero eos et accusamus et iusto odio.
                                                </li>
                                                <li>
                                                    Established fact that a reader will be distracted.
                                                </li>
                                                <li>
                                                    Sed ut perspiciatis unde omnis iste natus sit.
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="about.html" className="theme-btn mt-4">Discover More<i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="service-area bg py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline">Services</span>
                                        <h2 className="site-title">Our Best Services For You</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="service-img">
                                            <img src={"img/service/01.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/taxi-booking-1.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">Online Booking</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".50s">
                                        <div className="service-img">
                                            <img src={"img/service/02.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/city-taxi.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">City Transport</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".75s">
                                        <div className="service-img">
                                            <img src={"img/service/03.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/airport.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">Airport Transport</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="service-img">
                                            <img src={"img/service/04.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/business.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">Business Transport</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".50s">
                                        <div className="service-img">
                                            <img src={"img/service/05.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/taxi-2.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">Regular Transport</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="service-item wow fadeInUp" data-wow-delay=".75s">
                                        <div className="service-img">
                                            <img src={"img/service/06.jpg"} alt />
                                        </div>
                                        <div className="service-icon">
                                            <img src={"img/icon/taxi.svg"} alt />
                                        </div>
                                        <div className="service-content">
                                            <h3 className="service-title">
                                                <a href="#">Tour Transport</a>
                                            </h3>
                                            <p className="service-text">
                                                There are many variations of passages orem psum available but the majority have
                                                suffered alteration in some form by injected.
                                            </p>
                                            <div className="service-arrow">
                                                <a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="taxi-area py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline">Our Taxi</span>
                                        <h2 className="site-title">Let's Check Available Taxi</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-controls">
                                <ul className="filter-btns">
                                    <li className="active" data-filter="*">All Taxi</li>
                                    <li data-filter=".cat1">Hybrid Taxi</li>
                                    <li data-filter=".cat2">Town Taxi</li>
                                    <li data-filter=".cat3">Suv Taxi</li>
                                    <li data-filter=".cat4">Limousine Taxi</li>
                                </ul>
                            </div>
                            <div className="row filter-box">
                                <div className="col-md-6 col-lg-4 filter-item cat1 cat2">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 filter-item cat3 cat4">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 filter-item cat1 cat4">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 filter-item cat1 cat3">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 filter-item cat1 cat2 cat3">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 filter-item cat4">
                                    <div className="taxi-item">
                                        <div className="taxi-img">
                                            <img src={"img/taxi/01.png"} alt />
                                        </div>
                                        <div className="taxi-content">
                                            <div className="taxi-head">
                                                <h4>BMW M5 2019 Model</h4>
                                                <span>$1.25/km</span>
                                            </div>
                                            <div className="taxi-feature">
                                                <ul>
                                                    <li><i className="far fa-car-side-bolt"></i> Taxi Doors: <span>4</span></li>
                                                    <li><i className="far fa-person-seat"></i> Passengers: <span>4</span></li>
                                                    <li><i className="far fa-suitcase-rolling"></i> Luggage Carry: <span>2</span></li>
                                                    <li><i className="far fa-heat"></i> Air Condition: <span>Yes</span></li>
                                                    <li><i className="far fa-map-location-dot"></i> GPS Navigation: <span>Yes</span>
                                                    </li>
                                                    <li><i className="far fa-user-pilot"></i> Driver Choosing: <span>Yes</span></li>
                                                </ul>
                                            </div>
                                            <a href="#" className="theme-btn">Book Taxi Now<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="counter-area">
                        <div className="container">
                            <div className="counter-wrapper">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="counter-box">
                                            <div className="icon">
                                                <img src={"img/icon/taxi-1.svg"} alt />
                                            </div>
                                            <div>
                                                <span className="counter" data-count="+" data-to="500" data-speed="3000">500</span>
                                                <h6 className="title">+ Available Taxi </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="counter-box">
                                            <div className="icon">
                                                <img src={"img/icon/happy.svg"} alt />
                                            </div>
                                            <div>
                                                <span className="counter" data-count="+" data-to="900" data-speed="3000">900</span>
                                                <h6 className="title">+ Happy Clients</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="counter-box">
                                            <div className="icon">
                                                <img src={"img/icon/driver.svg"} alt />
                                            </div>
                                            <div>
                                                <span className="counter" data-count="+" data-to="700" data-speed="3000">700</span>
                                                <h6 className="title">+ Our Drivers</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6">
                                        <div className="counter-box">
                                            <div className="icon">
                                                <img src={"img/icon/trip.svg"} alt />
                                            </div>
                                            <div>
                                                <span className="counter" data-count="+" data-to="1800" data-speed="3000">1800</span>
                                                <h6 className="title">+ Road Trip Done</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="feature-area feature-bg py-120">
                        <div className="container mt-150">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline">Feature</span>
                                        <h2 className="site-title text-white">Our Awesome Feature</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="feature-icon">
                                            <img src={"img/icon/taxi-safety.svg"} alt />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Safety Guarantee</h4>
                                            <p>There are many variations of majority have suffered alteration in some form injected
                                                humour randomised words.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item mt-lg-5 wow fadeInDown" data-wow-delay=".25s">
                                        <div className="feature-icon">
                                            <img src={"img/icon/pickup.svg"} alt />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Fast Pickup</h4>
                                            <p>There are many variations of majority have suffered alteration in some form injected
                                                humour randomised words.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="feature-icon">
                                            <img src={"img/icon/money.svg"} alt />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Affordable Rate</h4>
                                            <p>There are many variations of majority have suffered alteration in some form injected
                                                humour randomised words.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="feature-item mt-lg-5 wow fadeInDown" data-wow-delay=".25s">
                                        <div className="feature-icon">
                                            <img src={"img/icon/support.svg"} alt />
                                        </div>
                                        <div className="feature-content">
                                            <h4>24/7 Support</h4>
                                            <p>There are many variations of majority have suffered alteration in some form injected
                                                humour randomised words.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="taxi-rate py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline">Taxi Rate</span>
                                        <h2 className="site-title">Our Taxi Rate For You</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="rate-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="rate-header">
                                            <div className="rate-img">
                                                <img src={"img/rate/01.png"} alt />
                                            </div>
                                        </div>
                                        <div className="rate-header-content">
                                            <h4>Basic Pakage</h4>
                                            <p className="rate-duration">One Time Payment</p>
                                        </div>
                                        <div className="rate-content">
                                            <div className="rate-icon">
                                                <img src={"img/icon/taxi-1.svg"} alt />
                                            </div>
                                            <div className="rate-feature">
                                                <ul>
                                                    <li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
                                                    <li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
                                                    <li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
                                                    <li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
                                                    <li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
                                                </ul>
                                                <a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="rate-item wow fadeInDown" data-wow-delay=".25s">
                                        <div className="rate-header">
                                            <div className="rate-img">
                                                <img src={"img/rate/01.png"} alt />
                                            </div>
                                        </div>
                                        <div className="rate-header-content">
                                            <h4>Standard Pakage</h4>
                                            <p className="rate-duration">One Time Payment</p>
                                        </div>
                                        <div className="rate-content">
                                            <div className="rate-icon">
                                                <img src={"img/icon/taxi-1.svg"} alt />
                                            </div>
                                            <div className="rate-feature">
                                                <ul>
                                                    <li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
                                                    <li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
                                                    <li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
                                                    <li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
                                                    <li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
                                                </ul>
                                                <a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="rate-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="rate-header">
                                            <div className="rate-img">
                                                <img src={"img/rate/01.png"} alt />
                                            </div>
                                        </div>
                                        <div className="rate-header-content">
                                            <h4>Premium Pakage</h4>
                                            <p className="rate-duration">One Time Payment</p>
                                        </div>
                                        <div className="rate-content">
                                            <div className="rate-icon">
                                                <img src={"img/icon/taxi-1.svg"} alt />
                                            </div>
                                            <div className="rate-feature">
                                                <ul>
                                                    <li><i className="far fa-check-double"></i> Base Charge: <span>$2.30</span></li>
                                                    <li><i className="far fa-check-double"></i> Distance Allowance: <span>5000m</span></li>
                                                    <li><i className="far fa-check-double"></i> Up To 50 kms: <span>$1.38/km</span></li>
                                                    <li><i className="far fa-check-double"></i> Booking Fee: <span>$0.99</span></li>
                                                    <li><i className="far fa-check-double"></i> Extra Passangers: <span>$0.45</span></li>
                                                </ul>
                                                <a href="#" className="theme-btn">Choose Plan<i className="fas fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="team-area pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline">Drivers</span>
                                        <h2 className="site-title">Our Expert Drivers</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="team-img">
                                            <img src={"img/team/01.jpg"} alt="thumb" />
                                        </div>
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h5><a href="#">Alma Mcelroy</a></h5>
                                                <span>Expert Driver</span>
                                            </div>
                                        </div>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="team-item wow fadeInDown" data-wow-delay=".25s">
                                        <div className="team-img">
                                            <img src={"img/team/02.jpg"} alt="thumb" />
                                        </div>
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h5><a href="#">Marie Hooks</a></h5>
                                                <span>Expert Driver</span>
                                            </div>
                                        </div>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="team-img">
                                            <img src={"img/team/03.jpg"} alt="thumb" />
                                        </div>
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h5><a href="#">Daniel Nesmith</a></h5>
                                                <span>Expert Driver</span>
                                            </div>
                                        </div>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="team-item wow fadeInDown" data-wow-delay=".25s">
                                        <div className="team-img">
                                            <img src={"img/team/04.jpg"} alt="thumb" />
                                        </div>
                                        <div className="team-content">
                                            <div className="team-bio">
                                                <h5><a href="#">Gertrude Barrow</a></h5>
                                                <span>Expert Driver</span>
                                            </div>
                                        </div>
                                        <div className="team-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="video-area vda-2">
                        <div className="container">
                            <div className="video-content" style={{ backgroundImage: 'url(img/video/01.jpg)' }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="video-wrapper">
                                            <a className="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                                <i className="fas fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="choose-area cha-2 py-120">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="choose-content">
                                        <div className="site-heading wow fadeInDown mb-4" data-wow-delay=".25s">
                                            <span className="site-title-tagline text-white justify-content-start">
                                                <i className="flaticon-drive"></i> Why Choose Us
                                            </span>
                                            <h2 className="site-title text-white mb-10">We are dedicated <span>to provide</span> quality service</h2>
                                            <p className="text-white">
                                                There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="choose-img wow fadeInUp" data-wow-delay=".25s">
                                            <img src={"img/choose/01.png"} alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="choose-content-wrapper wow fadeInRight" data-wow-delay=".25s">
                                        <div className="choose-item">
                                            <span className="choose-count">01</span>
                                            <div className="choose-item-icon">
                                                <img src={"img/icon/taxi-1.svg"} alt />
                                            </div>
                                            <div className="choose-item-info">
                                                <h3>Best Quality Taxi</h3>
                                                <p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.</p>
                                            </div>
                                        </div>
                                        <div className="choose-item ms-lg-5">
                                            <span className="choose-count">02</span>
                                            <div className="choose-item-icon">
                                                <img src={"img/icon/driver.svg"} alt />
                                            </div>
                                            <div className="choose-item-info">
                                                <h3>Expert Drivers</h3>
                                                <p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which even slightly believable. If you are going passage you need there anything.</p>
                                            </div>
                                        </div>
                                        <div className="choose-item mb-lg-0">
                                            <span className="choose-count">03</span>
                                            <div className="choose-item-icon">
                                                <img src={"img/icon/taxi-location.svg"} alt />
                                            </div>
                                            <div className="choose-item-info">
                                                <h3>Many Locations</h3>
                                                <p>There are many variations of passages available but the majority have suffered alteration in form injected humour words which don't look even slightly believable. If you are going passage you need there anything embar.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="faq-area py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-right">
                                        <div className="site-heading mb-3">
                                            <span className="site-title-tagline justify-content-start">Faq's</span>
                                            <h2 className="site-title my-3">General <span>frequently</span> asked questions</h2>
                                        </div>
                                        <p className="about-text">There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even.</p>
                                        <div className="faq-img mt-3">
                                            <img src={"img/faq/01.jpg"} alt />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span><i className="far fa-question"></i></span> How Long Does A Booking Take ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We denounce with righteous indignation and dislike men who
                                                    are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                    blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                                                    eu orci id odio facilisis pharetra.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <span><i className="far fa-question"></i></span> How Can I Become A Member
                                                    ?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We denounce with righteous indignation and dislike men who
                                                    are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                    blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                                                    eu orci id odio facilisis pharetra.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span><i className="far fa-question"></i></span> What Payment Gateway You Support ?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We denounce with righteous indignation and dislike men who
                                                    are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                    blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                                                    eu orci id odio facilisis pharetra.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <span><i className="far fa-question"></i></span> How Can I Cancel My Request ?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We denounce with righteous indignation and dislike men who
                                                    are so beguiled and demoralized by the charms of pleasure of the moment, so
                                                    blinded by desire. Ante odio dignissim quam, vitae pulvinar turpis erat ac elit
                                                    eu orci id odio facilisis pharetra.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="testimonial-area py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline"><i className="flaticon-drive"></i> Testimonials</span>
                                        <h2 className="site-title text-white">What Our Client <span>Say's</span></h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-slider">
                                <div className="testimonial-single">
                                    <div className="testimonial-content">
                                        <div className="testimonial-author-img">
                                            <img src={"img/testimonial/01.jpg"} alt />
                                        </div>
                                        <div className="testimonial-author-info">
                                            <h4>Sylvia Green</h4>
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                                        <p>
                                            There are many variations of words suffered available to the have majority but the majority
                                            suffer to alteration injected hidden the middle text.
                                        </p>
                                    </div>
                                    <div className="testimonial-rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-single">
                                    <div className="testimonial-content">
                                        <div className="testimonial-author-img">
                                            <img src={"img/testimonial/02.jpg"} alt />
                                        </div>
                                        <div className="testimonial-author-info">
                                            <h4>Gordo Novak</h4>
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                                        <p>
                                            There are many variations of words suffered available to the have majority but the majority
                                            suffer to alteration injected hidden the middle text.
                                        </p>
                                    </div>
                                    <div className="testimonial-rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-single">
                                    <div className="testimonial-content">
                                        <div className="testimonial-author-img">
                                            <img src={"img/testimonial/03.jpg"} alt />
                                        </div>
                                        <div className="testimonial-author-info">
                                            <h4>Reid Butt</h4>
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                                        <p>
                                            There are many variations of words suffered available to the have majority but the majority
                                            suffer to alteration injected hidden the middle text.
                                        </p>
                                    </div>
                                    <div className="testimonial-rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-single">
                                    <div className="testimonial-content">
                                        <div className="testimonial-author-img">
                                            <img src={"img/testimonial/04.jpg"} alt />
                                        </div>
                                        <div className="testimonial-author-info">
                                            <h4>Parker Jime</h4>
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                                        <p>
                                            There are many variations of words suffered available to the have majority but the majority
                                            suffer to alteration injected hidden the middle text.
                                        </p>
                                    </div>
                                    <div className="testimonial-rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="testimonial-single">
                                    <div className="testimonial-content">
                                        <div className="testimonial-author-img">
                                            <img src={"img/testimonial/05.jpg"} alt />
                                        </div>
                                        <div className="testimonial-author-info">
                                            <h4>Heruli Nez</h4>
                                            <p>Customer</p>
                                        </div>
                                    </div>
                                    <div className="testimonial-quote">
                                        <span className="testimonial-quote-icon"><i className="far fa-quote-right"></i></span>
                                        <p>
                                            There are many variations of words suffered available to the have majority but the majority
                                            suffer to alteration injected hidden the middle text.
                                        </p>
                                    </div>
                                    <div className="testimonial-rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="cta-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 text-center text-lg-start">
                                    <div className="cta-text cta-divider">
                                        <h1>Book Your Cab It's Simple And Affordable</h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using is that it has normal distribution of letters.</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 text-center text-lg-end">
                                    <div className="mb-20">
                                        <a href="#" className="cta-number"><i className="far fa-headset"></i>+2 123 654 7898</a>
                                    </div>
                                    <div className="cta-btn">
                                        <a href="#" className="theme-btn">Book Your Cab<i className="fas fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="blog-area pt-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 mx-auto">
                                    <div className="site-heading text-center">
                                        <span className="site-title-tagline"><i className="flaticon-drive"></i> Our Blog</span>
                                        <h2 className="site-title">Latest News & Blog</h2>
                                        <div className="heading-divider"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-item wow fadeInUp" data-wow-delay=".25s">
                                        <div className="blog-item-img">
                                            <img src={"img/blog/01.jpg"} alt="Thumb" />
                                        </div>
                                        <div className="blog-item-info">
                                            <div className="blog-item-meta">
                                                <ul>
                                                    <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                                                    <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="blog-title">
                                                <a href="#">There are many variations of passage available.</a>
                                            </h4>
                                            <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-item wow fadeInUp" data-wow-delay=".50s">
                                        <div className="blog-item-img">
                                            <img src={"img/blog/02.jpg"} alt="Thumb" />
                                        </div>
                                        <div className="blog-item-info">
                                            <div className="blog-item-meta">
                                                <ul>
                                                    <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                                                    <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="blog-title">
                                                <a href="#">There are many variations of passage available.</a>
                                            </h4>
                                            <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="blog-item wow fadeInUp" data-wow-delay=".75s">
                                        <div className="blog-item-img">
                                            <img src={"img/blog/03.jpg"} alt="Thumb" />
                                        </div>
                                        <div className="blog-item-info">
                                            <div className="blog-item-meta">
                                                <ul>
                                                    <li><a href="#"><i className="far fa-user-circle"></i> By Alicia Davis</a></li>
                                                    <li><a href="#"><i className="far fa-calendar-alt"></i> February 23, 2023</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="blog-title">
                                                <a href="#">There are many variations of passage available.</a>
                                            </h4>
                                            <a className="theme-btn" href="#">Read More<i className="fas fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="partner pt-80 pb-80">
                        <div className="container">
                            <div className="partner-slider owl-carousel owl-theme">
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src="assets/img/partner/01.png" alt />
                                    </div>
                                </div>
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src={"img/partner/02.png"} alt />
                                    </div>
                                </div>
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src={"img/partner/03.png"} alt />
                                    </div>
                                </div>
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src={"img/partner/01.png"} alt />
                                    </div>
                                </div>
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src={"img/partner/02.png"} alt />
                                    </div>
                                </div>
                                <div className="partner-item">
                                    <div className="partner-img">
                                        <img src={"img/partner/03.png"} alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="download-area mb-120">
                        <div className="container">
                            <div className="download-wrapper">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="download-content">
                                            <div className="site-heading mb-4">
                                                <span className="site-title-tagline justify-content-start">
                                                    <i className="flaticon-drive"></i> Get Our App
                                                </span>
                                                <h2 className="site-title mb-10">Download <span>Our Taxica</span> App For Free</h2>
                                                <p>
                                                    There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
                                                </p>
                                            </div>
                                            <div className="download-btn">
                                                <a href="#">
                                                    <i className="fab fa-google-play"></i>
                                                    <div className="download-btn-content">
                                                        <span>Get It On</span>
                                                        <strong>Google Play</strong>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <i className="fab fa-app-store"></i>
                                                    <div className="download-btn-content">
                                                        <span>Get It On</span>
                                                        <strong>App Store</strong>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="download-img">
                                    <img src={"img/download/01.png"} alt />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <Footer />


                <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>



            </body>



        </>
    )
};