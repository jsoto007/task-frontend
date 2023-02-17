import React, { useState } from "react";
import EditTask from "./EditTask";

function TasksCard( { task, onDelete, onPatch } ) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "DELETE",
    })
    .then(onDelete(task))
    // .then((resp) => resp.json())
    // .then((deletedTask) => onDelete(deletedTask))
  }

  return (
    <div>
      <ul>
        <li>{task.description} 
        <button onClick={handleDeleteClick} > X </button>
        <EditTask 
          id={task.id}
          onPatch={onPatch}
        />
        </li>

      </ul>
    </div>
  )
}


export default TasksCard;