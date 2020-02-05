import React, { useState, useEffect } from "react";
import "./tasks.css";
import { columns } from "../../util/data";
import TaskItem from "../task-item/task-item";
import { TASKS_URL } from "../../util/data";

function Tasks() {
  const [list, setTasks] = useState([]);

  const handleDelete = taskId => {
    setTasks(list.filter(task => task.id !== taskId));
  };

  const handleMove = (taskId, taskStatus) => {
    const tasks = [...list];
    const status = taskStatus === 4 ? 1 : (taskStatus += 1);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].status = status;
    setTasks(tasks);
  };

  const getTasks = async () => {
    const response = await fetch(TASKS_URL);
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <React.Fragment>
      <h1 className="pb-2 pt-4 text-white">Tâches</h1>
      <section className="tasks row d-flex my-3">
        {columns.map(column => (
          <div className="col-md-3 mb-2" key={column.id}>
            <div className="list">
              <h3 className="font-weigt-600 col-title">{column.title}</h3>
              {list
                .filter(item => item.status === column.id)
                .map(item => (
                  <TaskItem
                    task={item}
                    key={item.id}
                    onMove={handleMove}
                    onDelete={handleDelete}
                  ></TaskItem>
                ))}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default Tasks;
