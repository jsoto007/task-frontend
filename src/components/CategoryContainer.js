import React from "react";
import CategoryCard from "./CategoryCard";
import NewCategoryForm from "./NewCategoryForm";


function CategoryContainer( { 
  onAddCategory,
  categories, 
  onDelete, 
  onAddTask, 
  onPatch, 
  styleBodyTheme 
} ) {

    return (
      <div className="category-container">
        <NewCategoryForm onAddCategory={onAddCategory} />
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