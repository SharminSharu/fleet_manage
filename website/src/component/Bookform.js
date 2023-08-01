
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const Bookform = () => {
    const [msg, setmsg] = useState('');
    const navigate = useNavigate();
    const [startlocation, setstartlocation] = useState('');
    const [endlocation, setendlocation] = useState('');
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [type, settype] = useState('');

    const save = () => {
        axios.post('http://fleet.prantiksoft.com/backend/Customers/add_booking', {
            customer_id: localStorage.getItem('id'),
            type: type,
            start_location: startlocation,
            end_location: endlocation,
            start_date: startdate,
            end_date: enddate,
        }, {
        }).then(function (response) {
            navigate("/booking_list");

        })
    }


    return (
        <>
            <div className="book-ride py-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="booking-form">
                                <div className="book-ride-head">
                                    <h4 className="booking-title">Make Your Booking Today</h4>

                                </div>
                                {/* Booking form */}
                                <div>
                                    <div className="row">
                                        <div>
                                            <h4 style={{ color: 'Green' }}>{msg} </h4>
                                        </div>
                                        <div className="col-6">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" className="form-control" placeholder="Your Name" value={localStorage.getItem('name')} />
                                                    <i className="far fa-user"></i>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Start Location</label>
                                                    <input type="text" className="form-control" placeholder="Type Location" name='startlocation' onChange={(e) => setstartlocation(e.target.value)} />
                                                    <i className="far fa-location-dot"></i>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Start Date</label>
                                                    <input type="datetime" className="form-control date-picker" placeholder="MM/DD/YY" name='startdate' onChange={(e) => setstartdate(e.target.value)} />
                                                    <i className="far fa-calendar-days"></i>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-6 row">
                                            <div className="form-group col-12">
                                                <label>Type</label><br />
                                                <div className="form-control" onChange={(e) => settype(e.target.value)} value={type}>
                                                    <input type="radio" value="Single" name="type" defaultChecked/> Single
                                                    <input type="radio" value="Round" name="type" /> Round
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>End Location</label>
                                                    <input type="text" className="form-control" placeholder="Type Location" name='endtlocation' onChange={(e) => setendlocation(e.target.value)} />
                                                    <i className="far fa-location-dot"></i>
                                                </div>
                                            </div>


                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>End Date</label>
                                                    <input type="datetime" className="form-control date-picker" placeholder="MM/DD/YY" name='enddate' onChange={(e) => setenddate(e.target.value)} />
                                                    <i className="far fa-calendar-days"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="condition" />
                                            <label className="form-check-label" for="condition">
                                                By using this form you agree to our terms & conditions.
                                            </label>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 mx-auto">
                                        <button className="theme-btn" type="submit" onClick={save}>Book Your Taxi<i className="fas fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Bookform;