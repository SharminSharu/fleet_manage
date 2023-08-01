import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className="footer-area">
                    <div className="footer-widget">
                        <div className="container">
                            <div className="row footer-widget-wrapper pt-120 pb-70">
                                <div className="col-md-6 col-lg-4">
                                    <div className="footer-widget-box about-us">
                                        <a href="#" className="footer-logo">
                                            <img src={"img/logo/logo-light.png"} alt />
                                        </a>
                                        <p className="mb-3">
                                            We are many variations of passages available but the majority have suffered alteration
                                            in some form by injected humour words believable.
                                        </p>
                                        <ul className="footer-contact">
                                            <li><a href="tel:+21236547898"><i className="far fa-phone"></i>+2 123 654 7898</a></li>
                                            <li><i className="far fa-map-marker-alt"></i>25/B Milford Road, New York</li>
                                            <li><a href="https://live.themewild.com/cdn-cgi/l/email-protection#3f565159507f5a475e524f535a115c5052"><i className="far fa-envelope"></i><span className="__cf_email__" data-cfemail="7e171018113e1b061f130e121b501d1113">[email&#160;protected]</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-2">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Quick Links</h4>
                                        <ul className="footer-list">
                                            <li><a href="#"><i className="fas fa-caret-right"></i> About Us</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Update News</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Testimonials</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Terms Of Service</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Privacy policy</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Our Drivers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Support Center</h4>
                                        <ul className="footer-list">
                                            <li><a href="#"><i className="fas fa-caret-right"></i> FAQ's</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Affiliates</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Booking Tips</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Book A Ride</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Contact Us</a></li>
                                            <li><a href="#"><i className="fas fa-caret-right"></i> Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="footer-widget-box list">
                                        <h4 className="footer-widget-title">Newsletter</h4>
                                        <div className="footer-newsletter">
                                            <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                                            <div className="subscribe-form">
                                                <form action="#">
                                                    <input type="email" className="form-control" placeholder="Your Email" />
                                                    <button className="theme-btn" type="submit">
                                                        Subscribe Now <i className="far fa-paper-plane"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p className="copyright-text">
                                        &copy; Copyright <span id="date"></span> <a href="#"> Taxica </a> All Rights Reserved.
                                    </p>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <ul className="footer-social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
   </>
  )
}
