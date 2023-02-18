import React from "react";
import TaskCard from './TasksCard'
import { Container } from "./styles/Container.styled";

function CategoryCard( { category, onDelete, onPatch, styleBodyTheme} ) {
    const {name, tasks} = category

    return (
      <Container styleBodyTheme={styleBodyTheme}>

        <ul>
          {name}
          {/* {
            tasks.map((task) => {
              return (

                <TaskCard 
                  onDelete={onDelete}
                  task={task} 
                  key={task.id} 
                  onPatch={onPatch}
                />
              )
            })
          } */}
        </ul>
      </Container>
    )
}


export default CategoryCard;