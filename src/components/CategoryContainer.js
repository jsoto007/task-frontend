import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories } ) {

    return (
      <div>
        {categories.map((category) => {
            return (
                <CategoryCard 
                    category={category} 
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;