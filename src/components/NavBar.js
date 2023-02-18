import React from "react";
import { NavLink } from "react-router-dom";
import CategoryContainer from "./CategoryContainer";


function NavBar( { categories, onDelete, onAddTask, onPatch  }) {

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
      Hello
      <CategoryContainer 
        categories={categories} 
        onDelete={onDelete} 
        onAddTask={onAddTask} 
        onPatch={onPatch} 
      />
      
    </div>
  )
}


export default NavBar;