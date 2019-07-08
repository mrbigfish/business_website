/**
 *
 * This will get the Token for the user
 */
import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Segment, Grid, Header } from 'semantic-ui-react'
import { push } from 'connected-react-router'
import styled from 'styled-components'
import { endGame } from 'containers/LocalApps/actions'
import {
  getQuestions,
  updateCount,
  updateDifficulty,
  resetGame,
} from '../../containers/TriviaApp/actions'
/*
import {
  getQuestions,
  updateCount,
  updateDifficulty,
  startGame,
  resetGame,
} from '../../containers/TriviaApp/actions' */
import ShowQuestions from './ShowQuestions'
import GameIntro from './GameIntro'
import QuestionResult from './QuestionResult'
import ScoreBoard from './ScoreBoard'
import QuestionInfo from './QuestionInfo'
import NextSection from './NextSection'

const AppWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`

const getQuestion = ({
  trivia,
  onClickQ,
  onNextQuestion,
  onNextSection,
  onRestart,
  quitGame,
  isPlaying,
}) => {
  if (isPlaying) {
    if (!trivia.questions) {
      return (
        <AppWrapper>
          <Segment raised textAlign='center' padded='very'>
            <GameIntro />
            <Segment basic padded>
              <Button
                icon
                labelPosition='right'
                onClick={onClickQ}
                color='green'
              >
                PLAY
                <Icon name='right arrow' />
              </Button>
            </Segment>
          </Segment>
        </AppWrapper>
      )
    }
    if (trivia.questions) {
      if (trivia.count < 5) {
        return (
          <Grid columns={2} centered>
            <Grid.Row>
              <Grid.Column>
                <ScoreBoard
                  correct={trivia.correct}
                  wrong={trivia.wrong}
                  score={trivia.score}
                />
              </Grid.Column>
              <Grid.Column>
                <QuestionInfo
                  difficulty={trivia.difficulty}
                  category={trivia.questions.results[trivia.count].category}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <ShowQuestions
                  question={trivia.questions.results[trivia.count].question}
                  answer={trivia.questions.results[trivia.count].correct_answer}
                  incorrect={
                    trivia.questions.results[trivia.count].incorrect_answers
                  }
                  count={trivia.count}
                  answerClicked={trivia.answerClicked}
                  loading={trivia.loading}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <QuestionResult
                  answer={trivia.questions.results[trivia.count].correct_answer}
                  result={trivia.result}
                  count={trivia.count}
                  onNextQuestion={onNextQuestion}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
      }
      if (trivia.count === 5) {
        // Game Over
        if (trivia.difficulty === 'hard' && !trivia.loading) {
          let content = null
          if (trivia.score >= 500)
            content = <Header as='h3'>WOW, GREAT GAME!</Header>
          else content = <Header as='h3'>GOOD GAME!</Header>
          return (
            <Segment raised textAlign='center' padded='very' centered='true'>
              <Segment basic padded>
                <ScoreBoard
                  correct={trivia.correct}
                  wrong={trivia.wrong}
                  score={trivia.score}
                />
                <Segment basic color='violet'>
                  {content}
                </Segment>
              </Segment>
              <Segment basic padded>
                <Header as='h2' color='violet'>
                  GAME OVER
                </Header>
              </Segment>
              <Segment basic padded>
                <Button onClick={onRestart} color='green'>
                  PLAY AGAIN?
                </Button>
                <Button onClick={quitGame} color='green'>
                  QUIT
                </Button>
              </Segment>
            </Segment>
          )
        }
        if (trivia.difficulty !== 'hard') {
          return (
            <AppWrapper>
              <NextSection onNextSection={onNextSection} />
            </AppWrapper>
          )
        }
      }
    }
  }
  return <h4> </h4>
}

const mapStateToProps = state => ({
  trivia: state.trivia,
  onClickQ: state.onClickQ,
  onNextQuestion: state.onNextQuestion,
  correct: state.correct,
  wrong: state.wrong,
  changeDifficulty: state.updateDifficulty,
  result: state.result,
  onNextSection: state.onNextSection,
  onRestart: state.onRestart,
  onDifficultyUpdate: state.onDifficultyUpdate,
})

const mapDispatchToProps = dispatch => ({
  onClickQ: () => {
    dispatch(getQuestions())
  },
  onNextQuestion: () => dispatch(updateCount()),
  onNextSection: () => {
    dispatch(updateDifficulty())
    dispatch(getQuestions())
  },
  getNextQuestions: () => dispatch(getQuestions()),
  onRestart: () => {
    dispatch(resetGame())
    dispatch(getQuestions())
  },
  onDifficultyUpdate: () => dispatch(updateDifficulty()),
  quitGame: () => {
    dispatch(resetGame())
    dispatch(endGame())
    dispatch(push('/apps'))
  },
})

const PlayGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(getQuestion)

export default PlayGame

/**
 *             <h2>{trivia.results[trivia.count].question}</h2>
            <h3>{trivia.results[trivia.count].correct_answer}</h3>
            <h3>{trivia.results[trivia.count].incorrect_answers}</h3>
 * 
 * 
 */
