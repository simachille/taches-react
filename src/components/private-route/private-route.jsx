import React, { useContext } from "react";
import AuthProvider from "../../context/auth-provider";
import { Route } from "react-router-dom";

// Wrapper sur une route
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(AuthProvider);
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        !!currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              to: "/sign-in",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
