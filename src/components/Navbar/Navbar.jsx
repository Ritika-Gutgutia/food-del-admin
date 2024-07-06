/* eslint-disable no-unused-vars */

import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navbar__logo" alt="logo">
        LOGO
      </p>
      <img className="navbar__profileIcon" src={assets.profileIcon} />
    </div>
  );
};

export default Navbar;
