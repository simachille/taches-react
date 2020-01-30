import React from "react";
import Task from "../task/Task";
import "./Tasks.css";
function Tasks() {
  return (
    <section className="tasks">
      <Task />
      <Task />
      <Task />
      <Task />
    </section>
  );
}

export default Tasks;
