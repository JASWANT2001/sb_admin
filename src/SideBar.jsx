import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                   
                </div>
                <div className="sidebar-brand-text mx-3">Admin Portal </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    {/* <i className="fas fa-fw fa-tachometer-alt"></i> */}
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/portal/user-list" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    {/* <i className="fas fa-fw fa-cog"></i> */}
                    <span>Students</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">CustomComponents:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/portal/products" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    {/* <i className="fas fa-fw fa-wrench"></i> */}
                    <span>Products</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="utilities-color.html">Colors</a>
                        <a className="collapse-item" href="utilities-border.html">Borders</a>
                        <a className="collapse-item" href="utilities-animation.html">Animations</a>
                        <a className="collapse-item" href="utilities-other.html">Other</a>
                    </div>
                </div>
            </li>


            <hr className="sidebar-divider d-none d-md-block" />
{/* 
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}

            <div className="sidebar-card d-none d-lg-flex">
                {/* <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." /> */}
                <p className="text-center mb-2"><strong>Student Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default SideBar
