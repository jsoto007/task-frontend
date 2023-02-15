import React from "react";
import TaskCard from './TasksCard'

function CategoryCard( { category } ) {
    const {name, tasks} = category

    return (
      <div>
        <ul>
          {name}
          {
            tasks.map((task) => {
              return (

                <TaskCard task={task} key={task.id} />
              )
            })
          }
        </ul>

      </div>
    )
}


export default CategoryCard;