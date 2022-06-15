function sortReducer(state, action) {
  let newState = [...state];

  switch (action.type) {
    case 'sort_km_asc':
      action.payload.sort((a, b) => a.totalRide - b.totalRide);
      break;
    case 'sort_km_desc':
      action.payload.sort((a, b) => b.totalRide - a.totalRide);
      break;
    case 'default':
      action.payload.sort((a, b) => a.id - b.id);
      break;
    case 'sort_date_asc':
      action.payload.sort((x, y) => {
        let a = new Date(x.lastUsed);
        let b = new Date(y.lastUsed);
        return a - b;
      });
      break;
    case 'sort_date_desc':
      action.payload.sort((x, y) => {
        let a = new Date(x.lastUsed);
        let b = new Date(y.lastUsed);
        return b - a;
      });
      break;
    default:
      newState = [...state];
      break;
  }
  return newState;
}

export default sortReducer;
