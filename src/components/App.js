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


  return (
    <div className="App">
      <NewTaskForm onAddTask={handleAddTask} />
      <CategoryContainer categories={categories} />
    </div>
  );
}

export default App;
