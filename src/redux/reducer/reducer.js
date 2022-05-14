const initial = [];
export const myReducer = (state = initial, action) => {
  const stateCopy = [...state];
  switch (action.type) {
    case "ADD":
      stateCopy.push(action.payload);
      return stateCopy;
case "DELETE":
    stateCopy.splice(action.payload,1)
    return stateCopy
    

    default:
      return state;
  }
};
