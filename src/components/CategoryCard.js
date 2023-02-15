import React from "react";
import TaskCard from './TasksCard'

function CategoryCard( { category } ) {
    const {name, tasks, id} = category

    return (
      <div>
        <ul>
          {name}
          {
            tasks.map((task) => {
              return (
                <TaskCard task={task} key={id} />
              )
            })
          }
        </ul>

      </div>
    )
}


export default CategoryCard;