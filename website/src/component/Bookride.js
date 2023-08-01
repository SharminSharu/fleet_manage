import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Bookform from './Bookform';

export default function Bookride() {

    const [msg, setmsg] = useState('');
    const navigate = useNavigate();





    return (
        <>


            <html lang="en" />
            <body>

                <Header />

                <main className="main">

                    <div className="site-breadcrumb" style={{ background: 'url(img/breadcrumb/01.jpg)' }}>
                        <div className="container">
                            <h2 className="breadcrumb-title">Book A Ride</h2>
                            <ul className="breadcrumb-menu">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Book A Ride</li>
                            </ul>
                        </div>
                    </div>
                    <Bookform />
                </main>

                <Footer />
                <a href="#" id="scroll-top"><i className="far fa-arrow-up"></i></a>

            </body >


        </>
    )
}
