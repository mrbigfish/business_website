/**
 * 
 * This will get the Token for the user
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Segment, Grid, Header } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import styled from 'styled-components';
import { 
  getQuestions, 
  updateCount, 
  updateDifficulty, 
  startGame, 
  resetGame 
} from '../../src/actions/questionsActions';
import ShowQuestions from './ShowQuestions';
import GameIntro from './GameIntro';
import QuestionResult from './QuestionResult';
import ScoreBoard from './ScoreBoard';
import QuestionInfo from './QuestionInfo';
import NextSection from './NextSection';

const AppWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`

const getQuestion = ({ 
  tokeninfo, 
  questionsinfo,
  onClickQ,
  onNextQuestion,
  onNextSection,
  onRestart,
  quitGame,
}) => {

  if(tokeninfo.data.token) {
    if(!questionsinfo.isPlaying) {
      return (
        <AppWrapper>
          <Segment raised textAlign='center' padded='very'>
            <GameIntro />
            <Segment basic padded>
              <Button icon 
                labelPosition='right' 
                onClick={onClickQ} 
                color="green"
              >
                PLAY
                <Icon name='right arrow' />
              </Button>
            </Segment>
          </Segment>
        </AppWrapper>
        )
      } 
      else if(!questionsinfo.data.response_code && questionsinfo.isPlaying) {
        if(questionsinfo.count < 5) {
          return (
            <Grid columns={2} centered>
              <Grid.Row>
                <Grid.Column>
                    <ScoreBoard 
                      correct={questionsinfo.correct}
                      wrong={questionsinfo.wrong}
                      score={questionsinfo.score}
                    />
                </Grid.Column>
                <Grid.Column>
                    <QuestionInfo 
                      difficulty={questionsinfo.difficulty}
                      category={questionsinfo.data.results[questionsinfo.count].category}
                    />
                </Grid.Column>
              </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <ShowQuestions
                      question={questionsinfo.data.results[questionsinfo.count].question}
                      answer={questionsinfo.data.results[questionsinfo.count].correct_answer}
                      incorrect={questionsinfo.data.results[questionsinfo.count].incorrect_answers}
                      count={questionsinfo.count}
                      answerClicked={questionsinfo.answerClicked}
                      loading={questionsinfo.loading}
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <QuestionResult 
                      answer={questionsinfo.data.results[questionsinfo.count].correct_answer} 
                      result={questionsinfo.result}
                      count={questionsinfo.count}
                      onNextQuestion={onNextQuestion}
                    />
                  </Grid.Column>
                </Grid.Row>  
            </Grid>
          ) 
        } else if(questionsinfo.count === 5) {
          // Game Over
          if (questionsinfo.difficulty === 'hard' && !questionsinfo.loading) {
            let content = null;
            if(questionsinfo.score >= 500) content=<Header as='h3'>WOW, GREAT GAME!</Header>;
            else content=<Header as='h3'>GOOD GAME!</Header>;
            return (
                <Segment raised textAlign='center' padded='very' centered='true'>
                  <Segment basic padded>
                    <ScoreBoard 
                      correct={questionsinfo.correct}
                      wrong={questionsinfo.wrong}
                      score={questionsinfo.score}
                    />
                  <Segment basic color='violet' >
                    {content}
                  </Segment>
                  </Segment>
                  <Segment basic padded>
                    <Header as='h2' color='violet'>GAME OVER</Header>
                  </Segment>
                  <Segment basic padded>
                    <Button onClick={onRestart} color="green">
                        PLAY AGAIN?
                    </Button>
                    <Button onClick={quitGame} color="green">
                        QUIT
                    </Button>
                  </Segment>
                </Segment>
            )
          } else if (questionsinfo.difficulty !== 'hard') {
            return (
              <AppWrapper>
                <NextSection
                  onNextSection={onNextSection}
                />
              </AppWrapper>
            )
          }
        }  
      }
    } else return <h4>(Developer Comment: Need Token)</h4>;
  return <h3>(Developer Comment: Logic Issue Received!)</h3>;
}

const mapStateToProps = (state) => ({
  tokeninfo: state.tokeninfo,
  questionsinfo: state.questionsinfo,
  onClickQ: state.onClickQ,
  onNextQuestion: state.onNextQuestion,
  correct: state.correct,
  wrong: state.wrong,
  changeDifficulty: state.updateDifficulty,
  result: state.result,
  onNextSection: state.onNextSection,
  onRestart: state.onRestart,
  onDifficultyUpdate: state.onDifficultyUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  onClickQ: () => {
    dispatch(getQuestions());
    dispatch(startGame());
  },
  onNextQuestion: () => dispatch(updateCount()),
  onNextSection: () => {
    dispatch(updateDifficulty());
    dispatch(getQuestions());
  },
  getNextQuestions: () => dispatch(getQuestions()),
  onRestart: () => dispatch(resetGame()),
  onDifficultyUpdate: () => dispatch(updateDifficulty()),
  quitGame: () => {
    dispatch(resetGame());
    dispatch(push('/apps'));
  },
});

const PlayGame = connect(mapStateToProps, mapDispatchToProps)(getQuestion);

export default PlayGame;

/**
 *             <h2>{questionsinfo.results[questionsinfo.count].question}</h2>
            <h3>{questionsinfo.results[questionsinfo.count].correct_answer}</h3>
            <h3>{questionsinfo.results[questionsinfo.count].incorrect_answers}</h3>
 * 
 * 
 */