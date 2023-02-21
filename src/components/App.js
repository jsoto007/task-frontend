import React, { useEffect, useState } from "react";
import {Route, Switch } from "react-router-dom"
import { styleBodyTheme } from "./styles/themes"
import ProjectsNavBar from "./ProjectsNavBar"
import TasksContainer from "./TasksContainer";
import CategoryContainer from './CategoryContainer';
import NavBar from "./NavBar"
import Header from "./Header"




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
          tasks: [newTask, ...cat.tasks]
        }
      } else {
        return cat
      }
    })
    setCategories(updatedCategories);
  }

  function handleAddCategory(newCategory) {
    setCategories([...categories, newCategory])
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

  function handleDeleteCategory(deletedCategory) {
    const updatedCategories = categories.filter((cat) => cat.id !== deletedCategory.id)
    setCategories(updatedCategories)
  }

  function handlePatchTask(newPatchedTask) {
    const updatedCategories = categories.map((cat)=> {
      if (cat.id === newPatchedTask.categorization_id) {
        const filteredTasks = cat.tasks.filter((task) => task.id !== newPatchedTask.id)
        return {
          ...cat, 
          tasks: [newPatchedTask, ...filteredTasks]
        }
      } else {
        return cat
      }
    })
      setCategories(updatedCategories);
  }


  return (
    <div className="App">
        <Header />
        <NavBar />
      <div className="container">
        <ProjectsNavBar 
          onAddCategory={handleAddCategory}
          onDeletedCategory={handleDeleteCategory}
          onPatch={handlePatchTask}
          categories={categories} 
          onDelete={handleDeleteTask} 
        />
        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/projects/:id">
            <TasksContainer 
              onPatch={handlePatchTask}
              onDelete={handleDeleteTask}
              categories={categories}
              onAddTask={handleAddTask} 
            />
          </Route>
          <Route patch="/projects">
            <CategoryContainer
              onDeletedCategory={handleDeleteCategory}
              onAddCategory={handleAddCategory}
              onPatch={handlePatchTask}
              categories={categories} 
              onDelete={handleDeleteTask} 
              styleBodyTheme={styleBodyTheme.body}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

