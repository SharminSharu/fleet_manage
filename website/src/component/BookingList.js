import axios from "axios"
import Footer from "./Footer"
import Header from "./Header"
import { useEffect, useState } from "react"


const BookingList = () => {
    const [booking, Setbooking] = useState([]);
    const [pmnts, Setboog] = useState([]);
    const getBookings = () => {
        axios.post('http://fleet.prantiksoft.com/backend/Customers/getBookings', {
            customer_id: localStorage.getItem('id'),
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(function (response) {
            let data = response.data.bookinglist;
            console.log(data)
            Setbooking(data);

        })

    }

    useEffect(() => {
        getBookings();
    }, []);

    return (<>
        <html lang="en" />
        <body>

            <Header />

            <main className="main">
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

                                          <div className="card-body">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Start Location</th>
                                <th>End Location</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Distance</th>
                                <th>Amount</th>
                                <th>Type</th>
                            </tr>
                        </thead>

                        <tbody>
                            {booking.map((d, i) =>

                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{d.start_location}</td>
                                    <td>{d.end_location}</td>
                                    <td>{d.start_date}</td>
                                    <td>{d.end_date}</td>
                                    <td>{d.amount}</td>
                                    <td>{d.aprox_km}</td>
                                    <td>{d.type}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>  
                                            
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

        </body >

    </>)
}

export default BookingList;