import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { 
  onDeletedCategory,
  categories, 
  onAddTask, 
  styleBodyTheme 
} ) {

    return (
      <div className="category-container">
        {categories.map((category) => {
            return (
                <CategoryCard
                onDeletedCategory={onDeletedCategory}
                onAddTask={onAddTask}
                category={category} 
                key={category.id}
                styleBodyTheme={styleBodyTheme} 
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;