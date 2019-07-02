const initialState = {
  loading: false,
  error: false,
  data: {
    response_code: -1,
    results: false
  },
  correct: 0,
  wrong: 0,
  result: '',
  count: 0,
  difficulty: 'easy',
  isPlaying: false,
  answerClicked: false,
  score: 0,
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS':
     return { ...state, loading: true, error: false };
    case 'QUESTIONS_RECEIVED':
      return { ...state, data: action.data, loading: false };
    case 'QUESTIONS_ERROR':
      return { ...state, loading: false, error: action.error };
    case 'ANSWER_CORRECT':
      let points = 0;
      if(state.difficulty==='easy') points = 25;
      if(state.difficulty==='medium') points = 50;
      if(state.difficulty==='hard') points = 100;
      return { 
        ...state, 
        correct: state.correct + 1, 
        result: 'right', 
        answerClicked: true,
        score: state.score + points,
      };
    case 'ANSWER_WRONG':
      return { ...state, wrong: state.wrong + 1, result: 'missed', answerClicked: true };
    case 'START_GAME':
        return { ...state, isPlaying: true }
    case 'UPDATE_COUNT':
        return { ...state, count: state.count + 1, result: '', answerClicked: false };
    case 'RESET_COUNT':
        return { ...state, count: 0, result: '', answerClicked: false };
    case 'UPDATE_DIFFICULTY':
        if(state.difficulty === 'easy') return { ...state, difficulty: 'medium'};
        if(state.difficulty === 'medium') return { ...state, difficulty: 'hard'};
        if(state.difficulty === 'hard') return { ...state, difficulty: 'easy'};
        return state;
    case 'RESET_GAME':
        return { 
          ...state, 
          count: 0, 
          result: '', 
          difficulty: 'easy', 
          isPlaying: false,
          wrong: 0,
          correct: 0,
          score: 0,
        };
    default: 
         return state;
    }
 };
 
 export default questionsReducer;

 /**
  *    Question Response Format - Array of Objects
  * {
      "category":"Geography",
      "type":"multiple",
      "difficulty": "easy",
      "question":"Which city is the capital of the United States of America?",
      "correct_answer":"Washington D.C",
      "incorrect_answers":["Seattle","Albany","Los Angeles"]
    }
  * 
  */
