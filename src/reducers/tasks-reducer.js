/**
 * Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */
const taskReducer = (state = "TODO", action) => {
  switch (action.type) {
    case "TODO":
      console.log("Task status to ", 1);
      return "TODO";
    case "WIP":
      console.log("Task status to ", 1);
      return "WIP";
    default:
      return state;
  }
};

export default taskReducer;
