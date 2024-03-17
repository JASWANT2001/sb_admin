import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  let handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <div className="topbar-divider d-none d-sm-block mr-5"></div>

        <div className="row mr-2">
          <b>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={`Hi, ${localStorage.getItem("name")}!`}
              menuVariant="dark"
            >
              <Dropdown.Item className="" to="">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                <Link className="">My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item className="" onClick={handlelogout}>
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </Dropdown.Item>
            </NavDropdown>
          </b>
        </div>
      </nav>
    </>
  );
}

export default TopBar;
