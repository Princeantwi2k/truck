import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <h1 className="footer-name">PURETRAUKS</h1>
      </div>
      <div className="footer-divs">
        <p>
          <Link to="/service" className="link">
            Service
          </Link>
        </p>
        <p>
          <Link to="/about" className="link">
            About us
          </Link>
        </p>
        <p>
          <Link to="/product" className="link">
            product
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
