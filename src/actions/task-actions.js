// Quand on dispatch une action elle va le reducer
const setWIP = () => {
  return {
    type: "WIP",
    payload: 2
  };
};
export default setWIP;
