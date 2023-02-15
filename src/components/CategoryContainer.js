import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories, onDelete } ) {

    return (
      <div>
        {categories.map((category) => {
            return (
                <CategoryCard 
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