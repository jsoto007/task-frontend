import React from "react";
import { Container } from "./styles/Container.styled";
import { NavLink } from "react-router-dom";

function CategoryCard( { category, styleBodyTheme} ) {
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
        </ul>
      </Container>
    )
}


export default CategoryCard;