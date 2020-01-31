import React from "react";
import "./tasks.css";
import TaskItem from "../task-item/task-item";
function Tasks() {
  return (
    <section className="tasks row">
      <TaskItem />
    </section>
  );
}

export default Tasks;
