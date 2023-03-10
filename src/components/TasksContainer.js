import React from "react";
import TasksCard from "./TasksCard";
import NewTaskForm from "./NewTaskForm";
import { useParams } from "react-router-dom";

function TasksContainer( { onPatch, onDelete, categories, onAddTask } ) {

  const parasm = useParams();
  const foundCategory = categories.find((cat) => cat.id === parseInt(parasm.id))
  const { tasks } = foundCategory

  return (
    <div className="tasks-container">
     <ul id="task-form">
      <NewTaskForm 
        onAddTask={onAddTask} 
      />
     </ul>
     <h3 className="title">{foundCategory.name}</h3>
      {tasks.map((task) => {
        return (
          <TasksCard 
            key={task.id}
            task={task}
            onPatch={onPatch}
            onDelete={onDelete}
          />
        )
      })}
    </div>
  )
}


export default TasksContainer;