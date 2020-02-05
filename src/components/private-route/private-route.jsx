import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-provider";
import { Route } from "react-router-dom";
import SignIn from "../sign-in/sign-in";

// Wrapper sur une route
const PrivateRoute = ({ component, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const finalComponent = currentUser ? component : SignIn;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute;
