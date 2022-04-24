import React, { useEffect } from "react";
import img from "../Images/service.jpg";
import img1 from "../Images/finance.jpg";
import img2 from "../Images/all.jpg";
import img3 from "../Images/drive.jpg";
import img4 from "../Images/about2.jpg";
import img5 from "../Images/main.jpg";
import "./Service.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div>
        <img src={img} alt="pic" className="d-block w-100 service-image " />
        <div className="service-div" data-aos="fade-right">
          <h1 className="service-name">Our services</h1>
          <p className="service-para">
            {" "}
            Pure Truck isn't just there for you while you are on the road.it
            also covers your other needs. we help you in any issue from leasing
            to insurance,warranty and health.we come up with a solution for all
            your needs. customers
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 row">
            <div className="col-sm-6 col-md-6">
              <h1 className="service-topic" data-aos="fade-right">
                Superstructure Solutions
              </h1>
              <p className="service-para1" data-aos="fade-right">
                Public institutions now trust the leading brand in the
                automotive industry for all their needs, thanks to Pure’s 50
                years of experience and efficient superstructure solutions. The
                most suitable, durable and skilled vehicles for utilities
                services are being produced by indigenous engineers and come
                with a domestic goods’ certificate warranty.
              </p>
              <p className="details" data-aos="fade-left">
                DETAILS
              </p>
            </div>
            <div className="col-sm-6 col-md-6" id="tract">
              <img
                src={img2}
                alt="pic"
                className="d-block w-100 "
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 row">
            <div className="col-sm-12 col-md-6">
              <h1 className="service-topic" data-aos="fade-right">
                Finance
              </h1>
              <p className="service-para1" data-aos="fade-right">
                Purchasing cost, operational costs and second hand value… Those
                are the business of Pure Trucks. Both operational and financial
                leasing solutions will keep your business efficient and
                sustainable. Just decide your all including monthly fee and
                don’t exceed your credit limit.
              </p>
            </div>
            <div className="col-sm-12 col-md-6" id="cos" data-aos="fade-up">
              <img
                src={img1}
                alt="pic"
                className="d-block w-100 "
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 row">
            <div className="col-sm-12 col-md-6">
              <h1 className="service-topic" data-aos="fade-right">
                Driving Academy
              </h1>
              <p className="service-para1" data-aos="fade-right">
                Did you know that you can reduce a major part of your expenses
                from maintenance to fuel with Ford Driving Academy? Facilitating
                the lives of companies especially through improved fuel
                consumption, the Pure Driving Academy provides the opportunity
                to learn the secrets for cost-effective driving with its expert
                staff. Safe Driving Training focuses on the principles of safe
                driving under tough working conditions such as hazardous
                material transportation and construction sites.
              </p>
              <p className="details">DETAILS</p>
            </div>
            <div className="col-sm-12 col-md-6" id="cos" data-aos="fade-up">
              <img
                src={img3}
                alt="pic"
                className="d-block w-100 "
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 row">
            <div className="col-sm-12 col-md-6">
              <h1 className="service-topic" data-aos="fade-right">
                Pure Trucks Financial Services
              </h1>
              <p className="service-para1" data-aos="fade-right">
                Pure Trucks Financial Services is here to create options for the
                customers in all markets. Either variety of financing plans for
                purchasing or leasing, Pure Trucks provides wide range financial
                options according to customer expectations and conditions. You
                can check the best fitting solution with the closest
                distributor. Just focus on your business and let Pure Trucks
                handle the rest.
              </p>
              <p className="details" data-aos="fade-left">
                DETAILS
              </p>
            </div>
            <div className="col-sm-12 col-md-6" id="cos" data-aos="fade-up">
              <img
                src={img4}
                alt="pic"
                className="d-block w-100 "
                data-aos="fade-up"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 row">
            <div className="col-sm-12 col-md-6">
              <h1 className="service-topic" data-aos="fade-right">
                Maintenance Packages
              </h1>
              <p className="service-para1" data-aos="fade-right">
                Establish your fleet with Ford Trucks and reap the profits!
                Choose Ford Trucks for your fleet and you will always enjoy high
                profitability. Due to the advantageous maintenance packages
                provided for both individual and fleet sales, customers are
                safeguarded against possible future fluctuations in parts
                pricing and can therefore minimize maintenance costs. Customers
                who choose to purchase a maintenance package at current prices
                are not affected by future price increases. In the meantime,
                they may benefit from package discounts. This package can be
                used at all authorized dealers. There is no end to privileges in
                the world of Ford Trucks. Remember that the maintenance packages
                you purchased from Pure Trucks may be included in your vehicle
                loan.
              </p>
            </div>
            <div className="col-sm-12 col-md-6" id="cos" data-aos="fade-up">
              <img
                src={img5}
                alt="pic"
                className="d-block w-100 "
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
