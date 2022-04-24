import React, { useEffect } from "react";
import pic from "../Images/image.jpg";
import pic1 from "../Images/pic.jpg";
import pic2 from "../Images/pics.jpg";
import pic3 from "../Images/pic1.jpg";
import small from "../Images/name.png";
import name from "../Images/name1.png";
import name2 from "../Images/name2.png";
import finance from "../Images/F.jpg";
import drive from "../Images/d.jpg";
import main from "../Images/m.jpg";
import all from "../Images/a.jpg";
import Aos from "aos";
import { HashLink } from "react-router-hash-link";

import "./Home.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic} class="d-block w-100 pic" alt="pic" />
            <div className="caro-text" data-aos="fade-up">
              <h1 className="caro-h1">
                We are with you all the way along in line
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic1} class="d-block w-100 pic" alt="pic" />
            <div className="caro-text2">
              <h1 className="caro-h1">the New Big:Pure Trucks F-MAX</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100 pic" alt="pic" />
            <div className="caro-text3">
              <h1 className="caro-h1">
                We have all the neccessary precaution against Covid 19
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100 pic" alt="pic" />
            <div className="caro-text">
              <h1 className="caro-h1">
                Stay home and colorful with your children
              </h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="trucks">
        <h1 className="type-topic">Pure Truck Series</h1>
        <div className="container type">
          <div className="row">
            <div className="col-sm-3 col-md-4 type-details">
              <HashLink to="#cos">
                <img src={small} alt="pic" className="image" />
              </HashLink>
              <h2 className="type-text">Construction Series</h2>
            </div>
            <div className="col-sm-3 col-md-4 type-details">
              <Link to="/tract">
                {" "}
                <img src={name} alt="pic" className="image" />
              </Link>
              <h2 className="type-text">Tractor Series</h2>
            </div>
            <div className="col-sm-3 col-md-4 type-details">
              <img src={name2} alt="pic" className="image" />
              <h2 className="type-text">Road Series</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="main-ser">
        <h1 className="ser-topic"> Our Services</h1>
        <div className="container  ">
          <div className="row">
            <div className="col-sm-12 col-md-12 ser">
              <div className="col-sm-12 col-md-3 ser-div" data-aos="fade-up">
                <Link to="">
                  {" "}
                  <img src={finance} alt="pic" className="ser-pic" />
                </Link>
              </div>
              <div className="col-sm-12 col-md-3 ser-div" data-aos="flip-left">
                <Link to="">
                  {" "}
                  <img src={drive} alt="pic" className="ser-pic" />
                </Link>
              </div>
              <div className="col-sm-12 col-md-3 ser-div" data-aos="flip-left">
                <Link to="">
                  {" "}
                  <img src={main} alt="pic" className="ser-pic" />
                </Link>
              </div>
              <div className="col-sm-12 col-md-3 ser-div" data-aos="fade-up">
                <Link to="">
                  {" "}
                  <img src={all} alt="pic" className="ser-pic" />
                </Link>
              </div>
            </div>
            <div className="technology">
              <h1 className="tech">Pure Trucks</h1>
              <h4 className="techs">Future Technology</h4>
              <p className="tech-p">
                You can follow tectnologies that make you life easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1 className="contact-us">Contact us</h1>
              <div className="circle"></div>
              <h3>PURE TRUCK INTERNATIONAL CO., LIMITED</h3>
              <p className="contact-para">
                add :<span className="span">Jinwei Road, Beichen District</span>
              </p>
              <p className="contact-para">
                Contact :<span className="span">Prince Antwi</span>
              </p>
              <p className="contact-para">
                Tel :<span className="span">+233550300103</span>
              </p>
              <p className="contact-para">
                Moblie :<span className="span">+233572211378</span>
              </p>
              <p className="contact-para">
                E-mail :<span className="span">antwi2k@gmail.com</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h1 className="contact-us">ONLINE MESSAGE</h1>
              <form>
                <label htmlFor="" className="online-label">
                  {" "}
                  <span className="online">*</span> Contents
                </label>
                <input
                  type="textarea"
                  placeholder="please enter your message content"
                  className="content"
                />
                <br />
                <label htmlFor="" className="online-label">
                  {" "}
                  <span className="online">*</span> Name
                </label>
                <input
                  type="text"
                  placeholder="please enter your name"
                  className="name"
                />{" "}
                <br />
                <label htmlFor="" className="online-label">
                  {" "}
                  <span className="online">*</span> Phone number
                </label>
                <input
                  type="text"
                  placeholder="please enter your phone number"
                  className="number"
                />{" "}
                <br />
                <label htmlFor="" className="online-label">
                  {" "}
                  <span className="online">*</span> Email
                </label>
                <input
                  type="text"
                  placeholder="please enter your Email"
                  className="email"
                />{" "}
                <br />
                <button className="buttom">Submission</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
