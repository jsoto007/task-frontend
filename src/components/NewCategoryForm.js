import React, { useState } from "react";


function NewCategoryForm( { onAddCategory } ) {

  const [categoryForm, setCategoryForm] = useState({
    name: ""
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:9292/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryForm),
    })
    .then((resp) => resp.json())
    .then((newCategory) => {
      onAddCategory(newCategory)
    });
  }

  function handleChange(e) {
    const key = e.target.id
    setCategoryForm({
      ...categoryForm, 
      [key]: e.target.value
    });

  }

  return (
    <div className="category-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={categoryForm.name}
          onChange={handleChange}
          placeholder="Add new category"
        />
        <button type="submit"><span role="img" alt="submit">&#10003;</span></button>
        {/* <input type="submit" value="&#10003;" /> */}
      </form>
    </div>
  )
}

export default NewCategoryForm;