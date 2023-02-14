import React from "react";
import CategoryCard from "./CategoryCard";


function CategoryContainer( { categories } ) {

    return (
        <div>
            {categories.map((category) => {
                return (
                    <CategoryCard 
                        key={category.id}
                        category={category} 
                    />            
                )
            })}
        </div>
    )
}


export default CategoryContainer;