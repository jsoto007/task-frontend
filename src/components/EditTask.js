import React, { useState } from "react";


function EditTask( { id, onPatch } ) {

  const [patchedTask, setPatchedTask] = useState({
    description: ""
  })

  function handlePatchSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchedTask), 
    })
    .then((resp) => resp.json())
    .then((newPatchedTask) => {
      onPatch(newPatchedTask)
    });
  }


  function handleChange(e) {
    const key = e.target.id
    setPatchedTask({
      ...patchedTask, 
      [key]: e.target.value
    });
  }

  return (
    <div>
      <form onSubmit={handlePatchSubmit} >
        <input
          type="text"
          name="description"
          value={patchedTask.description}
          id="description"
          onChange={handleChange}
        />
        <input type="submit" value="save" />
      </form>

    </div>
  )
}


export default EditTask;
