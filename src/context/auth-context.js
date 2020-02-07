import { createContext } from "react";

// Création et export du contexte
const noop = () => {};
const AuthContext = createContext({
  user: null,
  login: noop,
  logout: noop
});

export default AuthContext;
