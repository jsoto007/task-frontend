import React from "react";
import TaskCard from './TasksCard'

function CategoryCard( { category, onDelete, onPatch } ) {
    const {name, tasks} = category

    return (
      <div>
        <ul>
          {name}
          {
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
          }
        </ul>

      </div>
    )
}


export default CategoryCard;