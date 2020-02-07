import React, { useContext } from "react";
import { Route } from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import AuthContext from "../../context/auth-context";

// Wrapper sur une route
const PrivateRoute = ({ component, ...options }) => {
  const { user } = useContext(AuthContext);
  const finalComponent = user ? component : SignIn;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
