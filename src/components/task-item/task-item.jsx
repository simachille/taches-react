import React, { Component } from "react";
import "./task-item.css";

class TaskItem extends Component {
  state = {
    task: {
      title: "titre",
      users: [
        { id: 1, name: "Paul" },
        { id: 2, name: "Marc" }
      ]
    }
  };

  render() {
    return (
      <div className="card task">
        <div className="card-body">
          <h2>{this.state.task.title}</h2>
          <ul>
            {this.state.task.users.map(user => (
              <li key="{user.id}">{user.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TaskItem;
