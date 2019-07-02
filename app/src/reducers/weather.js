const initialState = {};

function weather(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_WEATHER_DONE':
      return action.result;
    default: 
      return state; 
  }
}

export default weather;