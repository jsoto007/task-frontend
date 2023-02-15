import React from "react";
import { v4 as uuidv4 } from 'uuid';

function TasksCard( { task } ) {
    
  let myuuid = uuidv4();

  return (
    <div>
      <ul>
        <li>{task.description}</li>
      </ul>
    </div>
  )
}


export default TasksCard;