import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Services() {
  const [service, setservice] = useState([]);

  useEffect(() => {
    axios ({
      method: "get",
      url: "http://fleet.prantiksoft.com/backend/Service/service_list",
      responseType: "json",
    }).then(function (response) {
      setservice(response.data.list);
    });
  }, []);

  return (
    <>
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
            {service.map((ser, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div
                  className="service-item wow fadeInUp"
                  data-wow-delay=".25s"
                >
                  <div className="service-img">
                    {/* <img src={`img/service/${ser.photo}`} alt="" /> */}
                    <img src={`http://fleet.prantiksoft.com/backend/uploads/${ser.photo}`} alt="" />
                   
                  </div>
                  <div className="service-icon">
                    {/* <img src={`img/icon/${ser.icon}`} alt="" /> */}
                    <img src={`http://fleet.prantiksoft.com/backend/uploads/${ser.icon}`} alt="" />
             
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a href="#">{ser.title}</a>
                    </h3>
                    <p className="service-text">{ser.descript}</p>
                    <div className="service-arrow">
                      <a href="#" className="theme-btn">
                        Read More<i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
