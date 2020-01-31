import React, { Component } from "react";
import "./task-item.css";

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card task">
          <div className="card-body">
            <h2 className="card-title">{this.props.task.title}</h2>
            <div className="card-text">
              <ul>
                {this.props.users.map(user => (
                  <li key="{user.id}">{user.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TaskItem;
