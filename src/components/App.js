import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";

function App() {
const [tasks, setTasks]=useState(TASKS)
const [taskList, setTaskList]=useState(tasks)

function deleteTask(text){
  const filteredTask = taskList.filter((task)=> task.text !== text);
  setTaskList(filteredTask)
}

function filterCategory(theCategory){
  if (theCategory === "All"){
    setTaskList(tasks)
  }
  else{
    const newTask = tasks.filter((task)=> task.category === theCategory)
    setTaskList(newTask)
  }
}

function onTaskFormSubmit(newTask){
 const updatedTaskList = [...taskList, newTask];
 setTaskList(updatedTaskList)
 setTasks(updatedTaskList)
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} filterCategory={filterCategory}/>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} category={CATEGORIES} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
