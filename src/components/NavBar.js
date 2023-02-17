import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

  return (
    <nav id="nav-bar">
      <NavLink
        className="nav-link"
        to="/"
        exact 
        >
          Home
        </NavLink>
        <NavLink
          className="nav-bar"
          to="/projects"
          >
            Projects
          </NavLink>
    </nav>
  )
}


export default NavBar;