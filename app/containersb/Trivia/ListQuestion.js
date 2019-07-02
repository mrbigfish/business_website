/**
 * 
 * This will get the Token for the user
 */
import React from 'react';
import { connect } from 'react-redux';
import { Segment, Header, List, Divider, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import CheckAnswer from './CheckAnswer';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 2%;
`

const ChildWrapper = styled.section`
  margin: 10%;
`

const ListQuestion = ({ 
  onClick,
  incorrect,
  answer,
  count,
  question,
  value,
}) => {

  let answers = [incorrect[0], incorrect[1], incorrect[2], answer];
  answers = shuffle(answers);
  return (
      <AppWrapper>
          <Segment raised inverted>
            <Segment attached>
              <Header as='h2'>QUESTION {count+1}</Header>
              <Header color='violet' size='small'>{question}</Header>
            </Segment>
            <Segment inverted color='violet' padded raised>
              <List size='large' selection divided inverted relaxed verticalAlign='middle'>
              {answers.map(choice => 
                <List.Item key={choice} value={choice}>
                    <List.Content>
                      <List.Header
                        onClick={onClick}
                        answer={answer}
                      >{choice}
                      </List.Header> 
                    </List.Content>
                </List.Item>)}
              </List>
          </Segment>
        </Segment>
      </AppWrapper>
    )
}

export default ListQuestion;

/* 
            <ListQuestion
              onClick={onClickA}
              question={question}
              answer={answer}
              incorrect={incorrect}
              category={category}
              difficulty={difficulty}
              count={count}
            />
            */