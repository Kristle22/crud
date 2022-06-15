function sortReducer(state, action) {
  let newState;

  switch (action.type) {
    case 'sort_km_asc':
      console.log('asc sort reduc')
      newState = action.payload.sort((a, b) => a.totalRide - b.totalRide);
      break;
    case 'sort_km_desc':
      console.log('dsc sort reduc')
      newState = action.payload.sort((a, b) => b.totalRide - a.totalRide);
      break;
    case 'default':
      newState = action.payload.sort((a, b) => a.id - b.id);
      break;
    case 'sort_date_asc':
      console.log('asc date reduc')
      newState = action.payload.sort((x, y) => {
        let a = new Date(x.lastUsed);
        let b = new Date(y.lastUsed);
        return a - b;
      });
      break;
    case 'sort_date_desc':
      console.log('dsc date reduc')
      newState = action.payload.sort((x, y) => {
        let a = new Date(x.lastUsed);
        let b = new Date(y.lastUsed);
        return b - a;
      });
      break;
    default:
      newState = [...state];
      console.log('newState', newState)
      break;
  }
  console.log(newState)
  return newState;
}

export default sortReducer;
