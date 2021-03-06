/**
 * Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */

const taskReducer = (state = "TODO", action) => {
  switch (action.type) {
    case "TODO":
      return "Status actuel " + action.payload;
    case "DONE":
      return "DONE";
    case "WIP":
      return "WIP" + action.payload;
    default:
      return state;
  }
};
export default taskReducer;
