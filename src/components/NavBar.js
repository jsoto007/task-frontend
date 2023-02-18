import React from "react";
import { NavLink } from "react-router-dom";
import CategoryContainer from "./CategoryContainer";


function NavBar() {

  return (
    <div className="side-bar-menu">
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
    </div>
  )
}


export default NavBar;