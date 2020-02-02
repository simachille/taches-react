import React from "react";
import "./tasks.css";
import { columns } from "../../util/data";
import TaskItem from "../task-item/task-item";

function Tasks(props) {
  const handleMove = (taskId, taskStatus) => {
    props.onMove(taskId, taskStatus);
  };

  const handleDelete = taskId => {
    props.onDelete(taskId);
  };

  return (
    <React.Fragment>
      <section className="tasks row d-flex my-3">
        {columns.map(column => (
          <div className="col-md-3" key={column.id}>
            <div className="list">
              <h3 className="font-weigt-600 col-title">{column.title}</h3>
              {props.tasks
                .filter(task => task.status === column.id)
                .map(task => (
                  <TaskItem
                    task={task}
                    key={task.id}
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
