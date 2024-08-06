/* eslint-disable no-unused-vars */

import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">FoodMato</h1>
      <img className="navbar__profileIcon" src={assets.profileIcon} />
    </div>
  );
};

export default Navbar;
