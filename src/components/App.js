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



  function handleDeleteTask(deletedTask) {
    const updatedCategory = categories.map((cat) => {
      if ( cat.id === deletedTask.categorization_id) {
        const filteredTasks = cat.tasks.filter((task) => task.id !== deletedTask.id)
        return {
          ...cat, 
          tasks: filteredTasks
        }
      } else {
        return cat
      }
    })
    setCategories(updatedCategory)
  }



  function handlePatchTask(newPatchedTask) {
    console.log("newPATCHEDtask", newPatchedTask)
    const updatedCategories = categories.map((cat)=> {
      if (cat.id === newPatchedTask.categorization_id) {
        const filteredTasks = cat.tasks.filter((task) => task.id !== newPatchedTask.id)
        return {
          ...cat, 
          tasks: [...filteredTasks, newPatchedTask]

        }
      } else {
        return cat
      }
      
    })
      setCategories(updatedCategories);

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
        onPatch={handlePatchTask}
        categories={categories} 
        onDelete={handleDeleteTask} 
      />
    </div>
  );
}

export default App;

