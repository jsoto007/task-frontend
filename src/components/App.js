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


  return (
    <div className="App">
      <NewTaskForm />
      <CategoryContainer categories={categories} />
    </div>
  );
}

export default App;
