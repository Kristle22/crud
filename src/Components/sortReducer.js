function sortReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'sort_km':
      newState = action.payload.sort((a, b) => a.totalRide - b.totalRide);
      break;
    case 'sort_date':
      newState = action.payload.sort((a, b) => new Date(a.lastUsed).getTime() - new Date(b.lastUsed).getTime());
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}

export default sortReducer;
