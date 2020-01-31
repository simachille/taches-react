import React, { Component } from "react";
import "./task-item.css";
class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card task-item mb-2">
        <div className="card-body p-2">
          <h5 className="card-title">{this.props.task.title}</h5>
          <div className="card-text">{this.renderUsers()}</div>
        </div>
      </div>
    );
  }

  renderUsers() {
    if (
      !this.props ||
      !this.props.task.users ||
      this.props.task.users.length === 0
    ) {
      return <p>Aucun utilisateur n'est affecté à cette tache</p>;
    }

    return (
      <ul>
        {this.props.task.users.map(user => (
          <li key={user.id}>
            <span className="text-capitalize mr-1">{user.firstName}</span>
            <span className="text-uppercase">{user.lastName}</span>
          </li>
        ))}
      </ul>
    );
  }
}
export default TaskItem;
