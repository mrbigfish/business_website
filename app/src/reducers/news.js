const initialState = {
     loading: false,
     articles: [],
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS':
         return { ...state, loading: true };
    case 'NEWS_RECEIVED':
         return { ...state, articles: action.json, loading: false }
    default: 
         return state;
  }
 };

 export default newsReducer;