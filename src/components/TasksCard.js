import React, { useState } from "react";
import EditTask from "./EditTask";

function TasksCard( { task, onDelete } ) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then((deletedTask) => onDelete(deletedTask))
  }

  return (
    <div>
      <ul>
        <li>{task.description} 
        <button onClick={handleDeleteClick} > X </button>
        <EditTask id={task.id}/>
        </li>

      </ul>
    </div>
  )
}


export default TasksCard;