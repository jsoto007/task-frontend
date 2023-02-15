import React from "react";
import CategoryCard from "./CategoryCard";
import { v4 as uuidv4 } from 'uuid';

function CategoryContainer( { categories } ) {

  let uniqKey = uuidv4();

    return (
      <div>
        {categories.map((category) => {
            return (
                <CategoryCard 
                    category={category} 
                    key={category.id}
                />            
            )
        })}
      </div>
    )
}


export default CategoryContainer;