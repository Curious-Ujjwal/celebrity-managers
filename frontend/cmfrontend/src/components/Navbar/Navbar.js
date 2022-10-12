import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
    useEffect(() => {
        console.log('Navbar page is running!!')
    }, [])
    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className="brand">
            <div className="brandlogo sky-blue-color">CM</div>
            <div className="brandname">
              Celebrity <br /> Managers
            </div>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Register as Artist</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bookings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Request a Celebrity</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
            </nav>

            <div id="cm-navbar">

            </div>
        </div>
    )
}

export default Navbar;