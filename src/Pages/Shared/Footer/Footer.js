import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
    const footerStyle = {
        overflow: 'hidden'
    }
  return (
    <div className="bg-dark text-white mt-5" style={footerStyle}>
      <div className="container">
        <div className="row py-5 px-4">
          <div className="col-12 col-lg-6 mb-4">
            <img src={logo} width="200" height="40" alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 col-lg-6 nav flex-column mb-4">
                <NavLink className="text-decoration-none text-white" to="/home">
                  about online food
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  read our blog
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  sign up to deliver
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  add your restraurent
                </NavLink>
              </div>
              <div className="col-12 col-lg-6 nav flex-column">
                <NavLink className="text-decoration-none text-white" to="/home">
                  get help
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  read faqs
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  view all cities
                </NavLink>
                <NavLink className="text-decoration-none text-white" to="/home">
                  restraurent near me
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-4 py-4 text-md-start text-center">
          <div className="col-12 col-lg-6">
            <p>&#xA9; 2021 Company, Inc. All rights reserved.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row ">
              <div className="col-4">
                <p>Privacy policy</p>
              </div>
              <div className="col-4">
                <p>Pricing</p>
              </div>
              <div className="col-4">
                <p>terms of use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
