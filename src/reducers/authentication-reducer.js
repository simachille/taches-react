/**
 * Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */
const authenticationReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("login user ", 1);
      return !state;
      break;

    default:
      break;
  }
};

export default authenticationReducer;
