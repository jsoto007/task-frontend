import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories, onDelete, onAddTask, onPatch } ) {

    return (
      <div>
        {categories.map((category) => {
            return (
                <CategoryCard 
                    onAddTask={onAddTask}
                    onDelete={onDelete}
                    category={category} 
                    key={category.id}
                    onPatch={onPatch}
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;