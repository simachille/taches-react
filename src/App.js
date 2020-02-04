import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Users from "./components/users/users";
import TaskEdit from "./components/task-edit/task-edit";
import Welcome from "./components/welcome/welcome";
import Tasks from "./components/tasks/tasks";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import NoMatch from "./components/no-match/no-match";
import SignIn from "./components/sign-in/sign-in";
import AuthProvider from "./context/auth-provider";

function App() {
  return (
    <Router>
      <section className="app-wrapper">
        <Header />
        <main className="container-fluid main">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Welcome} />
            <Route path="/utilisateurs" component={Users} />
            <Route path="/taches/nouvelle" component={TaskEdit} />
            <Route exact path="/taches" component={Tasks} />
            <Route path="/taches/:id" component={TaskEdit} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </section>
    </Router>
  );
}
export default App;
