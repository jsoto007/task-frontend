import React from "react";
import CategoryContainer from "./CategoryContainer";
import { styleBodyTheme } from "./styles/themes"

function ProjectsNavBar( { categories, onDelete, onAddTask, onPatch  }) {

  return (
    <div className="side-bar-menu">
      <CategoryContainer 
        categories={categories} 
        onDelete={onDelete} 
        onAddTask={onAddTask} 
        onPatch={onPatch} 
        styleBodyTheme={styleBodyTheme.menu}
      />
    </div>
  )
}


export default ProjectsNavBar;