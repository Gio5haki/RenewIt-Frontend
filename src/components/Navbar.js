import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              <NavLink to="/">Home</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus">
              <NavLink to="/aboutUs">About Us</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/partners">
              <NavLink to="/partners">Partners</NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
