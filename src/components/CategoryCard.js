import React from "react";
import TaskCard from './TasksCard'
import { v4 as uuidv4 } from 'uuid';

function CategoryCard( { category } ) {
    const {name, tasks, id} = category

    let myuuid = uuidv4();
    let uniqKey = uuidv4();
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