import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Users from "./components/users/users";
import TaskEdit from "./components/task-edit/task-edit";
import Welcome from "./components/welcome/welcome";
import Tasks from "./components/tasks/tasks";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMath from "./components/404/no-match";

function App() {
  return (
    <Router>
      <section className="app-wrapper">
        <Header />
        <main className="container-fluid main">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/utilisateurs" component={Users} />
            <Route path="/taches/nouvelle" component={TaskEdit} />
            <Route exact path="/taches" component={Tasks} />
            <Route path="/taches/:id" component={TaskEdit} />
            <Route path="*">
              <NoMath />
            </Route>
          </Switch>
        </main>
      </section>
    </Router>
  );
}
export default App;
