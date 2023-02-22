import React, { useState } from "react";
import { useParams } from "react-router-dom";


function NewTaskForm( { onAddTask } ) {

  const { id: category_id } = useParams();

  const [task, setTask] = useState({
    description: "",
    name: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    // (`http://localhost:9292/categories/tasks/${id}`
// "/categories/:category_id/tasks"
    fetch(`http://localhost:9292/categories/${category_id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
    .then((resp) => resp.json())
    .then((newTask) => {
      onAddTask(newTask)
    });
  }

  function handleChange(e) {
    const key = e.target.id
    setTask({
      ...task,
      [key]: e.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={task.name}
          id="name"
          onChange={handleChange}
          placeholder="Add Task Name"
        />
        <input
          type="text"
          name="description"
          value={task.description}
          id="description"
          onChange={handleChange}
          placeholder="Add Task Description"
        />
        <button type="submit">Add Task</button>
      </form>

    </div>
  )
}


export default NewTaskForm;


