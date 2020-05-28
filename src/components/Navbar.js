import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-sm navbar-right bg-dark navbar-dark fixed-top">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item" title="Home">
            <NavLink to="/">
              <i className="fas fa-home fa-lg"></i>
            </NavLink>
          </li>
          <li className="nav-item" title="About Us">
            <NavLink to="/aboutUs">
              <i className="fas fa-info-circle fa-lg"></i>
            </NavLink>
          </li>
          <li className="nav-item" title="Partners">
            <NavLink to="/partners">
              <i className="fas fa-handshake fa-lg"></i>
            </NavLink>
          </li>
          <li className="nav-item" title="Contact">
            <NavLink to="/contact">
              <i className="fas fa-envelope fa-lg"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
