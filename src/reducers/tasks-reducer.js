/**
 * Un reducer est une méthode dans le store
 * qui peut modifier le state en fonction d’une action
 *
 * Gère l'authentification
 */
const taskReducer = (state, action) => {
  switch (action.type) {
    case "TODO":
      console.log("Task status to ", 1);
      break;

    default:
      break;
  }
};

export default taskReducer;
