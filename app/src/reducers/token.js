const initialState = {
  loading: false,
  error: false,
  data: false,
  token: false,
  errormessage: false,
}

const token = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN':
         return { ...state, loading: true, error: false };
    case 'TOKEN_RECEIVED':
         return { ...state, data: action.data, loading: false, token: action.data.token }
    case 'TOKEN_ERROR':
          return { ...state, loading: false, error: true, errormessage: action.data.response }
    default: 
         return state;
    }
 };
 
 export default token;