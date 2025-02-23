import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { DigiContext } from "../../context/DigiContext";
import "./style.css";
const DashboardPart = () => {
  const {
    dashState,
    toggleMainDashDropdown,
    dropdownOpen,
    layoutPosition,
    mainDashboardRef,
  } = useContext(DigiContext);
  const { isMainDropdownOpen } = dashState;
  return (
    <li
      className="sidebar-item open"
      ref={layoutPosition.horizontal ? mainDashboardRef : null}
    >
      {/* <Link
        role="button"
        className={`sidebar-link-group-title has-sub ${isMainDropdownOpen ? 'show' : ''}`}
        onClick={toggleMainDashDropdown}
      >
        Dashboard
      </Link> */}
      <ul
        className={`sidebar-link-group ${
          layoutPosition.horizontal
            ? dropdownOpen.dashboard
              ? "d-block"
              : ""
            : isMainDropdownOpen
            ? "d-none"
            : ""
        }`}
      >
        <li className="sidebars-dropdowns-item">
          <NavLink to="/allprofile" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-user"></i>
            </span>
            <span className="sidebar-txt">Profile</span>
          </NavLink>
        </li>
        <br />
        <li className="sidebars-dropdowns-item">
          <NavLink to="/chat" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-messages"></i>
            </span>{" "}
            <span className="sidebar-txt">Message</span>
          </NavLink>
        </li>
        <br />
        <li className="sidebars-dropdowns-item">
          <NavLink to="/profile" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-user"></i>
            </span>{" "}
            <span className="sidebar-txt">View Your Profile</span>
          </NavLink>
        </li>
        <br />

        {/* <li className="sidebar-dropdown-item">
          <NavLink to="/" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-cart-shopping-fast"></i>
            </span>{' '}
            <span className="sidebar-txt">eCommerce</span>
          </NavLink>
        </li> */}
        {/* <li className="sidebar-dropdown-item">
          <NavLink
            to="/inventorydashboard"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-user-headset"></i>
            </span>{' '}
            <span className="sidebar-txt">Inventory</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink
            to="/hrmDashboard"
            className="sidebar-link"
          >
            <span className="nav-icon">
              <i className="fa-light fa-user-tie"></i>
            </span>{' '}
            <span className="sidebar-txt">HRM</span>
          </NavLink>
        </li> */}
      </ul>
    </li>
  );
};

export default DashboardPart;
