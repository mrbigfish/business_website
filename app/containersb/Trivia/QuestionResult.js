import React from 'react';
import { connect } from 'react-redux';
import { Icon, Button, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 2%;
`

const QuestionResult = ({ 
  result,
  answer,
  onNextQuestion,
}) => {

  const decodedAnswer = atob(answer);

  if(result === 'right') {
    return (
      <AppWrapper>
        <Header size='medium' color='green'>
          {decodedAnswer} IS CORRECT!
        </Header>
        <Button icon labelPosition='right' onClick={onNextQuestion} color="green" >
            NEXT
          <Icon name='right arrow' />
        </Button>
      </AppWrapper>
    )
  }
  else if(result === 'missed') {
    return (
      <AppWrapper>
        <Header size='medium' color='red'>
          SORRY, THE CORRECT ANSWER WAS {decodedAnswer}!
        </Header>
        <Button icon labelPosition='right' onClick={onNextQuestion} color="green" >
            NEXT
          <Icon name='right arrow' />
        </Button>
      </AppWrapper>
    )
  }
  else return <AppWrapper><Header size='medium'> </Header><Header size='medium'> </Header></AppWrapper>;
}

  const mapStateToProps = (state) => ({
    result: state.result,
    answer: state.answer,
    onNextQuestion: state.onNextQuestion,
  })
  

connect(mapStateToProps, null)(QuestionResult);

  export default QuestionResult;