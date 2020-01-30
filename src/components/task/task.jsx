import React, { Component } from "react";
import "./task.css";

class Task extends Component {
  state = {
    content: "contenu de test"
  };

  render() {
    return <div className="card task">{this.state.content}</div>;
  }
}
export default Task;
