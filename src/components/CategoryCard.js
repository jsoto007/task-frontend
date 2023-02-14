import React from "react";

function CategoryCard( { category } ) {
    const {name, tasks} = category

    return (
        <div>
            <ul>
                {name}
        
            </ul>

        </div>
    )
}


export default CategoryCard;