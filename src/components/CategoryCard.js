import React from "react";
import { Container } from "./styles/Container.styled";
import { NavLink } from "react-router-dom";
import DeleteCategory from "./DeleteCategory";

function CategoryCard( { category, styleBodyTheme, onDeletedCategory} ) {
    const {name, id} = category

    return (
      <Container styleBodyTheme={styleBodyTheme}>

        <ul id={category.id}>
          <NavLink
            id="category-to-task"
            to={`/projects/${id}`}
          >
          {name}
          </NavLink>
          <DeleteCategory  
            category={category}
            onDeletedCategory={onDeletedCategory}
          />
        </ul>

      </Container>
    )
}


export default CategoryCard;