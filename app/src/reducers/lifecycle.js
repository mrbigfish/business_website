const initialState = {
  count: 1,
  difficulty: 'easy',
  isPlaying: false,
}

const lifecycleReducer = (state = initialState, action) => {
     switch (action.type) {
          case 'START_GAME':
               return { ...state, isPlaying: true }
          case 'UPDATE_COUNT':
               return { ...state, count: state.count + 1 };
          case 'UPDATE_DIFFICULTY':
               if(state.difficulty === 'easy') return { ...state, difficulty: 'medium', isPlaying: true };
               if(state.difficulty === 'medium') return { ...state, difficulty: 'hard', isPlaying: true };
               if(state.difficulty === 'hard') return { ...state, difficulty: 'easy', isPlaying: false };
               return state;
          default: 
               return state;
     }
};

export default lifecycleReducer;