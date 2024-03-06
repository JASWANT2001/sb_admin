import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

function Portal() {
  return (
    <div id="wrapper">
      <SideBar></SideBar>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar></TopBar>
          <div class="container-fluid">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
