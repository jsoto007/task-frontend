import React, { useState } from "react";


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

        </li>

      </ul>
    </div>
  )
}


export default TasksCard;