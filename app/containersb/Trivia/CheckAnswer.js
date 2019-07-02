import React from 'react';
import { Header } from 'semantic-ui-react';
import { answerCorrect, answerWrong } from '../../actions/questionsActions';
import { updateCount } from '../../actions/lifecycleActions';

const CheckAnswer = ({
  answer,
  value,
  correct,
  wrong,
  count,
  onClickA,
}) => {

  onClickA = (e) => {
    if(answer === value) {
      answerCorrect(correct);
      updateCount(count);
      return (
        <div>
          <Header size='medium' color='green' >You got the Correct Answer!</Header>
          <Header size='medium'>{value}</Header>
        </div>
      )
    } else {
      answerWrong(wrong);
      updateCount(count);
      return (
        <div>
          <Header size='medium' color='red' >{value} is Wrong. The Correct Answer is</Header>
          <Header size='medium'>{answer}</Header>
        </div>
      )
    }
  } 
  return null;
}

export default CheckAnswer;