import React, { Component } from "react";
import "./task-item.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { TASKS_URL } from "../../util/data";

class TaskItem extends Component {
  componentDidMount() {
    fetch(TASKS_URL + "/" + this.props.task.id)
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
    const { task, onMove, onDelete } = this.props;
    const navDropdownTitle = <FontAwesomeIcon icon={faEllipsisV} />;
    return (
      <div className="card task-item mb-2">
        <div className="card-body p-2">
          <h6 className="card-title d-flex justify-content-between">
            <span className="mr-3">{task.title}</span>
            <NavDropdown
              direction="top"
              title={navDropdownTitle}
              id={"basic-nav-dropdown_" + task.id}
            >
              <NavDropdown.Item href={`/taches/${task.id}`}>
                Modifier
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onMove(task.id, task.status)}>
                Déplacer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => onDelete(task.id)}>
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
