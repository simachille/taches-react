import React, { Component } from "react";
import "./task-item.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class TaskItem extends Component {
  componentDidMount() {
    fetch("SERVICE_URL")
      .then(response => response.json())
      .then(result => {
        this.setState({ task: result, isFetching: false });
      })
      .catch(e => {
        console.log(e);
        this.setState({ ...this.state, isFetching: false });
      });
  }

  render() {
    const navDropdownTitle = <FontAwesomeIcon icon={faEllipsisV} />;
    return (
      <div className="card task-item mb-2">
        <div className="card-body p-2">
          <h6 className="card-title d-flex justify-content-between">
            <span className="mr-3">{this.props.task.title}</span>
            <NavDropdown
              direction="top"
              title={navDropdownTitle}
              id={"basic-nav-dropdown_" + this.props.task.id}
            >
              <NavDropdown.Item
                onClick={() =>
                  this.props.onMove(this.props.task.id, this.props.task.status)
                }
              >
                déplacer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => this.props.onDelete(this.props.task.id)}
              >
                Supprimer
              </NavDropdown.Item>
            </NavDropdown>
          </h6>
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
