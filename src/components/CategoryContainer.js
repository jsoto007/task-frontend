import React from "react";
import CategoryCard from "./CategoryCard";
import NewCategoryForm from "./NewCategoryForm";


function CategoryContainer( { 
  onDeletedCategory,
  onAddCategory,
  categories, 
  onAddTask, 
  styleBodyTheme 
} ) {

    return (
      <div className="category-container">
        <NewCategoryForm onAddCategory={onAddCategory} />
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