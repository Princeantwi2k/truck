import React from "react";
import about6 from "../Images/about6.jpg";
import about from "../Images/about.jpg";
import about1 from "../Images/about1.jpg";
import about2 from "../Images/about2.jpg";
import about3 from "../Images/about3.jpg";
import about4 from "../Images/about4.jpg";
import about5 from "../Images/about5.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div>
        <img src={about6} alt="pic" className="d-block w-100 about-image " />
        <div className="about-div" data-aos="fade-right">
          <h1 className="about-name">About Us</h1>
          <p className="about-para">
            {" "}
            As a leading automotive brand, we have been offering the best
            solution to meet the needs of the public utility companies and other
            customers
          </p>
        </div>
      </div>
      <div className="about">
        <div className="contianer">
          <div className="row">
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <h1 className="about-topic" data-aos="fade-right">
                  Our Vision
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  Create Value with the Most Efficient Transportation Solutions
                </p>
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <img
                  src={about}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <img
                  src={about1}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <h1 className="about-topic" data-aos="fade-right">
                  Our Mission
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  We are hereto share your load
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <h1 className="about-topic" data-aos="fade-right">
                  Why Pure Trucks
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  We are one of the largest international heavy truck
                  manufacturers in the world. We produce a range of vehicles
                  including tractors, construction trucks and distribution
                  trucks weighing over 16 tons
                </p>
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <img
                  src={about2}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <img
                  src={about3}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <h1 className="about-topic" data-aos="fade-right">
                  Research & Deverlopment
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  Pure commercial vehicles’ proven track record of quality,
                  durability and efficiency underpins Pure Trucks’ international
                  product strategy. At Pure Trucks, we combine more than half a
                  century of design and production experience with expertise in
                  market-specific product development, to engineer the main
                  components of our vehicles, including the all-new engines.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <h1 className="about-topic" data-aos="fade-right">
                  Global Network{" "}
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  We currently operate across Eastern and Central Europe, the
                  Middle East, Africa, Russia and the CIS, and continue to grow
                  our international network in 3 continents. Hundreds of
                  thousands of trucks all around the world set out each and
                  every day with the confidence that Ford provides.
                </p>
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <img
                  src={about4}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 row">
              <div className="col-sm-6 col-md-6">
                <img
                  src={about5}
                  alt="pic"
                  className="d-block w-100  about-pic"
                  data-aos="fade-up"
                />
              </div>
              <div className="col-sm-6 col-md-6" id="tract" data-aos="fade-up">
                <h1 className="about-topic" data-aos="fade-right">
                  {" "}
                  Pure Trucks is spreading its success across Africa
                </h1>
                <p className="about-para1" data-aos="fade-right">
                  Carrying the most demanding loads and building the largest
                  projects across nations and continents, Pure Trucks is
                  continuing to grow its presence in Africa. You too could be
                  one of Pure Trucks' new distributors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
