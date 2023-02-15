import React from "react";


function TasksCard( { task } ) {

  return (
    <div>
      <ul>
        <li>{task.description}</li>
      </ul>
    </div>
  )
}


export default TasksCard;