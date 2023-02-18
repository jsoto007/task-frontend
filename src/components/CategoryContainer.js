import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories, onDelete, onAddTask, onPatch, styleBodyTheme } ) {

    return (
      <div className="category-container">
        {categories.map((category) => {
            return (
                <CategoryCard
                onAddTask={onAddTask}
                onDelete={onDelete}
                category={category} 
                key={category.id}
                onPatch={onPatch}
                styleBodyTheme={styleBodyTheme} 
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;