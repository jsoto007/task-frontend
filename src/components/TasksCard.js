import React, { useState } from "react";
import EditTask from "./EditTask";

function TasksCard( { task, onDelete, onPatch } ) {
  const [editToggle, setEditToggle] = useState(false)

  const {id, description} = task

  function handleDeleteClick() {
    fetch(`http://localhost:9292/tasks/${task.id}`, {
      method: "DELETE",
    })
    .then(onDelete(task))
  }

  function handleEditToggle() {
    setEditToggle((editToggle) => !editToggle)
  }

  return (
    <div>
      <ul>
        <li>{task.description} 
        <button onClick={handleDeleteClick} > &#10005;</button>
        {editToggle ? (
        <EditTask 
          onEditToggle={handleEditToggle}
          id={id}
          taskDescription={description}
          onPatch={onPatch}
        />
        ) : <button onClick={handleEditToggle} role="img">&#9998;</button>}
        </li>
      </ul>
    </div>
  )
}


export default TasksCard;