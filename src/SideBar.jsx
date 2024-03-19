import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15"></div>

        <div className="sidebar-brand-text mx-">Admin Zen Portal </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link
          className="nav-link collapsed mt-2 mb-2"
          to="/portal/dashboard"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          
        >
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed mt-2 mb-2"
          to="/portal/user-list"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <span>
            <b>Employee Directory</b>
          </span>
        </Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">CustomComponents:</h6>
            <a className="collapse-item" href="buttons.html">
              Buttons
            </a>
            <a className="collapse-item" href="cards.html">
              Cards
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link collapsed  mb-2"
          to="/portal/JobViewList"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <span>
            <b>Job Vacancy Details</b>
          </span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      {/* <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}
    </ul>
  );
}

export default SideBar;
