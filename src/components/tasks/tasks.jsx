import React from "react";
import "./tasks.css";
import TaskItem from "../task-item/task-item";
function Tasks({ tasks }) {
  return (
    <section className="tasks row d-flex">
      {tasks.map(task => (
        <TaskItem task={task} key={task.id} />
      ))}
    </section>
  );
}

export default Tasks;
