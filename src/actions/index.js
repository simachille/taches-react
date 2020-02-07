export const setWIP = () => {
  return {
    type: "WIP",
    payload: 2
  };
};
export const setTODO = () => {
  return {
    type: "TODO",
    payload: 2
  };
};

export const updateStatus = status => {
  return {
    type: "TODO",
    payload: status
  };
};
