import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const HeaderDesign = () => {
  return (
    <div className="white-color">
      <nav className="navbar navbar-adjust-all navbar-expand-lg navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="mr-auto navbar-nav">
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                <NavLink to="/bulk" className="nav-link">Bulk Purchase</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="locate" className="nav-link">FF Store Locator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dial" className="nav-link">08100000000</NavLink>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">Contacts Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/faq" className="nav-link">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/return" className="nav-link">Return Policy</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/sell" className="nav-link">Sell on FF</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
              </li>
            </ul>
            <button className="btn mr-sm-2">Log In</button>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default HeaderDesign;
