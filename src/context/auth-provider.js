import React, { useState, useMemo, useEffect } from "react";
import AuthContext from "./auth-context";

// Hook pour utiliser le contexte
// Stocke le statut de l'utilisateur(connecté ou déconnecté)
// Protège les routes
const AuthenticationProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("USER"));
  }, []);

  // Memorise les informations passées aux composants
  const auth = useMemo(() => {
    return {
      user,
      login: user => {
        localStorage.setItem("USER", JSON.stringify(user));
        setUser(user);
      },
      logout: () => setUser(null)
    };
  }, [user]);

  return <AuthContext.Provider value={auth} {...props} />;
};

export default AuthenticationProvider;
