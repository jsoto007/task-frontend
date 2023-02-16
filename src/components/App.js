import React, { useEffect, useState } from "react";
import CategoryContainer from './CategoryContainer';
import NewTaskForm from "./NewTaskForm";


function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/categories')
    .then(resp => resp.json())
    .then(categories => setCategories(categories))
  }, [])

  function handleAddTask(newTask) {
   const updatedCategories = categories.map((cat)=> {
    if (cat.id === newTask.categorization_id) {
      return {
        ...cat, 
        tasks: [...cat.tasks, newTask]
      }
    } else {
      return cat
    }
    
  })
    setCategories(updatedCategories);
  }



  // function handleDeleteTask(deletedTask) {
  //   console.log(deletedTask)
  //   const updatedCategory = categories.map((cat) => {
  //     if ( cat.id === deletedTask.categorization_id) {
  //       const filteredTasks = cat.tasks.filter((task) => task.id !== deletedTask.id)
  //       return {
  //         ...cat, 
  //         tasks: [filteredTasks]
  //       }
  //     } else {
  //       return cat
  //     }
  //   })
  //   console.log(updatedCategory)
  // }




  function handleDeleteTask(deletedTask) {
    console.log(deletedTask)
    const foundCatagory = categories.find((cat) => cat.id === deletedTask.categorization_id)
    const filteredTasks = foundCatagory.tasks.filter((task) => task.id !== deletedTask.id)

    const updatedCategory = {
      ...foundCatagory, 
        tasks: filteredTasks
    }

    setCategories((categories) => (updatedCategory))
    
  }
  /*

  find the category
  make a copy of the category with the updated tasks
  update state with the updated category

  */


  return (
    <div className="App">
      <NewTaskForm onAddTask={handleAddTask} />
      <CategoryContainer 
        categories={categories} 
        onDelete={handleDeleteTask} 
      />
    </div>
  );
}

export default App;


