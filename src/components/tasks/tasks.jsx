import React from "react";
import "./tasks.css";
import { columns } from "../../util/tasks";
import TaskItem from "../task-item/task-item";
function Tasks({ tasks }) {
  return (
    <React.Fragment>
      <section className="tasks row d-flex my-3">
        {columns.map(column => (
          <div className="col-md-3">
            <div className="col py-3">
              <h3 className="text-center font-weigt-900">{column.title}</h3>
              {tasks
                .filter(task => task.statut === column.id)
                .map(task => (
                  <TaskItem task={task} key={task.id} status={task.status} />
                ))}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default Tasks;
