function sortReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'sort_km':
      newState = [...state].sort((a, b) => a.totalRide - b.totalRide);
      break;
    case 'sort_date':
      newState = [...state].sort((x, y) => {
        let a = new Date(x.lastUsed);
        let b = new Date(y.lastUsed);
        return a - b;
      });
      break;
    default:
      newState = [...state];
      break;
  }
  return newState;
}

export default sortReducer;
