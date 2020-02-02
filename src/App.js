import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import "./App.css";
import Tasks from "./components/tasks/tasks";
import { TASKS_URL } from "./util/data";
function App() {
  const [taskList, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await fetch(TASKS_URL);
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = taskId => {
    setTasks(taskList.filter(task => task.id !== taskId));
  };

  const handleMove = (taskId, taskStatus) => {
    const tasks = [...taskList];

    const status = taskStatus === 4 ? 1 : (taskStatus += 1);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].status = status;

    setTasks(tasks);
  };

  return (
    <section className="app-wrapper">
      <Header />
      <main className="container-fluid main">
        <Tasks tasks={taskList} onMove={handleMove} onDelete={handleDelete} />
      </main>
    </section>
  );
}
export default App;
