/**
 * 1.
 *  Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */
const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;

    default:
      return state;
  }
};

export default authenticationReducer;
