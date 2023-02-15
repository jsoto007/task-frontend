import React, { useState } from "react";


function NewTaskForm() {

  const [task, setTask] = useState({
    id: "",
    description: ""
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
    .then((resp) => resp.json())
    .then((newTask) => {
      console.log(newTask)
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
          type="number"
          name="id"
          value={task.id}
          id="id"
          onChange={handleChange}
          placeholder="select category"
        />
      </form>

    </div>
  )
}


export default NewTaskForm;


