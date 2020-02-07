import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Users from "./components/users/users";
import TaskEdit from "./components/task-edit/task-edit";
import Welcome from "./components/welcome/welcome";
import Tasks from "./components/tasks/tasks";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./components/no-match/no-match";
import SignIn from "./components/sign-in/sign-in";
import AuthProvider from "./context/auth-provider";
import PrivateRoute from "./components/private-route/private-route";

function App() {
  return (
    <AuthProvider>
      {/** Toutes des routes sont dans le AUthProvider
       * Toutes les routres on accès à l'utilisateur connecté
       */}
      <Router>
        <section className="app-wrapper">
          <Header />
          <main className="container-fluid main">
            <Switch>
              <PrivateRoute exact path="/" component={Welcome} />
              <PrivateRoute path="/utilisateurs" component={Users} />
              <PrivateRoute path="/taches/nouvelle" component={TaskEdit} />
              <PrivateRoute exact path="/taches" component={Tasks} />
              <PrivateRoute path="/taches/:id" component={TaskEdit} />
              <PrivateRoute path="*">
                <NoMatch />
              </PrivateRoute>
              <Route exact path="/connexion" component={SignIn} />
            </Switch>
          </main>
        </section>
      </Router>
    </AuthProvider>
  );
}
export default App;
