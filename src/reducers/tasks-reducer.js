/**
 * Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */

const taskReducer = (state = "TODO", action) => {
  switch (action.type) {
    case "DONE":
      return "DONE";
    case "WIP":
      return "WIP";
    default:
      return state;
  }
};
export default taskReducer;
