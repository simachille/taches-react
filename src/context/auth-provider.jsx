import React, { useState, useEffect } from "react";

//  Création et export du contexte
export const AuthContext = React.createContext();

// Hook pour utiliser le contexte
// Stocke le statut de l'utilisateur(connecté ou déconnecté)
const AuthProvider = ({ children }) => {
  // utilisateur connecté
  const [currentUser, setCurrentUser] = useState(null);
  const isLoggedIn = () => {
    return localStorage.getItem("AUTH_KEY") !== null;
  };

  useEffect(() => {
    if (isLoggedIn()) {
      setCurrentUser(localStorage.getItem("AUTH_KEY"));
    } else {
      setCurrentUser(null);
    }
  }, [currentUser]);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
