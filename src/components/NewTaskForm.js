import React, { useState } from "react";

function NewTaskForm( { onAddTask } ) {


  const [task, setTask] = useState({
    categorization_id: "",
    description: "",
    name: "name"
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/tasks", {
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
          name="description"
          value={task.description}
          id="description"
          onChange={handleChange}
          placeholder="Add Task"
        />
        <input
          type="text"
          name="categorization_id"
          value={task.categorization_id}
          id="categorization_id"
          onChange={handleChange}
          placeholder="select category"
        />
        <button type="submit">Add Task</button>
      </form>

    </div>
  )
}


export default NewTaskForm;


