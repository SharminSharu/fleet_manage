import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../Footer'
import Menu from '../Menu'

export default function Booking_view ()
{
    const navigate = useNavigate();
    const p = useParams();
    const [customers, setcustomers] = useState([{ name: '', id: '' }]);
    const [customerid, setcustomerid] = useState('');
    const [vehicles, setvehicles] = useState([{ name: '', id: '' }]);
    const [vehicleid, setvehicleid] = useState('');
    const [drivers, setdrivers] = useState([{ name: '', id: '' }]);
    const [driverid, setdriverid] = useState('');
    const [type, settype] = useState('');
    const [startlocation, setstartlocation] = useState('');
    const [endlocation, setendlocation] = useState('');
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [aproxkm, setaproxkm] = useState('');
    const [amount, setamount] = useState('');
    const [status, setstatus] = useState('');
    useEffect(() =>
    {
        axios.post('http://localhost/fleet_manage/backend/Tauhid/editbooking', {
            id: p.id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(function (response)
        {
            let data = response.data;
            setcustomerid(data.booking.customer_id)
            setvehicleid(data.booking.vehicle_id)
            setdriverid(data.booking.driver_id)
            settype(data.booking.type)
            setstartlocation(data.booking.start_location)
            setendlocation(data.booking.end_location)
            setstartdate(data.booking.start_date)
            setenddate(data.booking.end_date)
            setaproxkm(data.booking.aprox_km)
            setamount(data.booking.amount)
            setstatus(data.booking.status)

        });
        getCustomer();
        getVehicle();
        getDriver();
    }, []);
    const getCustomer = () =>
    {
        axios({
            method: 'get',
            url: 'http://localhost/fleet_manage/backend/Tauhid/getCustomer',
            responseType: 'json'
        }).then(function (response)
        {
            setcustomers(response.data.customer)
        });
    }
    const getVehicle = () =>
    {
        axios({
            method: 'get',
            url: 'http://localhost/fleet_manage/backend/Tauhid/getVehicle',
            responseType: 'json'
        }).then(function (response)
        {
            setvehicles(response.data.vehicle)
        });
    }
    const getDriver = () =>
    {
        axios({
            method: 'get',
            url: 'http://localhost/fleet_manage/backend/Tauhid/getDriver',
            responseType: 'json'
        }).then(function (response)
        {
            setdrivers(response.data.driver)
        });
    }
    const back = () =>
    {
        navigate('/bookinglist')
    }
    return (
        <>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    <Menu />
                    <div className="content-wrapper">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0">Individual Booking Detail</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Starter Page</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Booking Form</h3>
                                            </div>
                                            {/* <!-- /.card-header --> */ }
                                            {/* <!-- form start --> */ }
                                            <div className="card-body">
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Customer</label>
                                                            <select className='form-control' onChange={ (e) => setcustomerid(e.target.value) } value={ customerid } disabled>
                                                                <option value=''>Select Customer</option>

                                                                { customers.map((d, i) =>
                                                                {
                                                                    return (
                                                                        <option value={ d.id } key={ i }>{ d.name }</option>
                                                                    )
                                                                }) }
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Vehicle</label>
                                                            <select className='form-control' onChange={ (e) => setvehicleid(e.target.value) } value={ vehicleid } disabled>
                                                                <option value=''>Select Vehicle</option>

                                                                { vehicles.map((d, i) =>
                                                                {
                                                                    return (
                                                                        <option value={ d.id } key={ i }>{ d.name }</option>
                                                                    )
                                                                }) }
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Driver</label>
                                                            <select className='form-control' onChange={ (e) => setdriverid(e.target.value) } value={ driverid } disabled>
                                                                <option value=''>Select Driver</option>

                                                                { drivers.map((d, i) =>
                                                                {
                                                                    return (
                                                                        <option value={ d.id } key={ i }>{ d.name }</option>
                                                                    )
                                                                }) }
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Type</label><br />
                                                            <div className="form-control" onChange={ (e) => settype(e.target.value) } value={ type } >
                                                                { (type == 'single') ? <input type="radio" value="Single" checked disabled/> : <input type="radio" value="Single" disabled/> }Single

                                                                { (type == 'round') ? <input type="radio" value="Round" checked disabled/> : <input type="radio" value="Round" disabled/> }Round
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Start Location</label>
                                                            <input type="text" className="form-control" onChange={ (e) => setstartlocation(e.target.value) } value={ startlocation } disabled/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>End Location</label>
                                                            <input type="text" className="form-control" onChange={ (e) => setendlocation(e.target.value) } value={ endlocation } disabled/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Start Date</label>
                                                            <input type="datetime-local" className="form-control" onChange={ (e) => setstartdate(e.target.value) } value={ startdate } disabled/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>End Date</label>
                                                            <input type="datetime-local" className="form-control" onChange={ (e) => setenddate(e.target.value) } value={ enddate } disabled/>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Approx. Km</label>
                                                            <input type="text" className="form-control" onChange={ (e) => setaproxkm(e.target.value) } value={ aproxkm } disabled/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Amount</label>
                                                            <input type="text" className="form-control" onChange={ (e) => setamount(e.target.value) } value={ amount } disabled/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Status</label>
                                                            <div className="" onChange={ (e) => setstatus(e.target.value) } value={ status }>
                                                                { (status == 'yet to start') ? <input type="radio" value="yet to start" checked disabled/> : <input type="radio" value="yet to start" disabled/> }Yet to Start
                                                                { (status == 'completed') ? <input type="radio" value="completed" checked disabled/> : <input type="radio" value="completed" disabled/> }Completed
                                                                { (status == 'on going') ? <input type="radio" value="on going" checked disabled/> : <input type="radio" value="on going" disabled/> }On Going
                                                                { (status == 'cancelled') ? <input type="radio" value="cancelled" checked disabled/> : <input type="radio" value="cancelled" disabled/> }Cancelled
                                                            </div>
                                                        </div>
                                                        <div className="card-footer">
                                                            <button type="submit" className="btn btn-primary" onClick={ back }>Go Back</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- /.card-body --> */ }



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}
