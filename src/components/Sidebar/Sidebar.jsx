/* eslint-disable no-unused-vars */

import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <NavLink to="/add" className="sidebar__option">
          <img src={assets.addIcon} className="sidebar__option_icon" alt="" />
          <p className="sidebar__option__content">Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar__option">
          <img src={assets.orderIcon} className="sidebar__option_icon" alt="" />
          <p className="sidebar__option__content">List Items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar__option">
          <img src={assets.orderIcon} className="sidebar__option_icon" alt="" />
          <p className="sidebar__option__content">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
