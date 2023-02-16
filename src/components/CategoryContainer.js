import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories, onDelete, onAddTask } ) {

    return (
      <div>
        {categories.map((category) => {
            return (
                <CategoryCard 
                    onAddTask={onAddTask}
                    onDelete={onDelete}
                    category={category} 
                    key={category.id}
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;