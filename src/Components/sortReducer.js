function sortReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'sort_km':
      newState = action.payload.sort((a, b) => a.totalRide - b.totalRide);
      break;
    case 'refresh':
      newState = action.payload.map(kolt => ({ ...kolt }));
      break;
    case 'sort_date':
      newState = action.payload.sort((x, y) => {
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
