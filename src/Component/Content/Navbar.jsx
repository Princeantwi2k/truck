import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav">
        <h1 className="logo">
          <Link to="/" className="links">
            PureTracks
          </Link>
        </h1>
        <ul className="ul">
          <li>
            {" "}
            <Link to="/about" className="links">
              About us
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/service" className="links">
              Service
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/product" className="links">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
