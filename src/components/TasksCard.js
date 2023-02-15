import React from "react";


function TasksCard( { task, onDelete } ) {

  const {id} = task;

  function handleDeleteClick() {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then((deletedTask) => onDelete(deletedTask))
  }

  return (
    <div>
      <ul>
        <li>{task.description}</li>
        <button onClick={handleDeleteClick} > X </button>
      </ul>
    </div>
  )
}


export default TasksCard;