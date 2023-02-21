import React from "react";
import NewCategoryForm from "./NewCategoryForm";


function Header( { onAddCategory } ) {

  return (
    <div className="headers">
      <img 
        alt="current user"
        src="https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
      />
      <NewCategoryForm onAddCategory={onAddCategory}/>
    </div>
  )
}

export default Header;