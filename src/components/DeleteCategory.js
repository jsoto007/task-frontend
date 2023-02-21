import React from "react";


function DeleteCategory( { category, onDeletedCategory } ) {

const { id } = category

  function handleDeleteClick() {
    fetch(`http://localhost:9292/categories/${id}`, {
      method: "DELETE",
    })
    .then(onDeletedCategory(category))
  }

  return (
    <button onClick={handleDeleteClick}> x</button>
  )
}


export default DeleteCategory;