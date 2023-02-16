import React, { useState } from "react";


function EditTask() {

  const [patchedTask, setPatchedTask] = useState({
    id: "",
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
      console.log(newPatchedTask)
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

    </div>
  )
}


export default EditTask;
