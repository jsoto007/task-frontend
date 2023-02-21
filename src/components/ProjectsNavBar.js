import React from "react";
import CategoryContainer from "./CategoryContainer";
import { styleBodyTheme } from "./styles/themes"

function ProjectsNavBar( { categories, onAddTask, onPatch, onDeletedCategory, onAddCategory }) {

  return (
    <div className="side-bar-menu">
      <CategoryContainer
        onAddCategory={onAddCategory}
        onDeletedCategory={onDeletedCategory}
        categories={categories} 
        onAddTask={onAddTask} 
        onPatch={onPatch} 
        styleBodyTheme={styleBodyTheme.menu}
      />
    </div>
  )
}


export default ProjectsNavBar;