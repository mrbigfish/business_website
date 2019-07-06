/**
 *
 * This will get the Token for the user
 */
import React from 'react'
import { connect } from 'react-redux'
import { Segment, Header, List } from 'semantic-ui-react'
import styled from 'styled-components'
import { answerCorrect, answerWrong } from '../../containers/TriviaApp/actions'

function shuffle(array) {
  let currentIndex = array.length;
    let temporaryValue;
    let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 2%;
`

const showQuestions = ({
  question,
  answer,
  incorrect,
  count,
  onClickA,
  answerClicked,
  loading,
}) => {
  const decodedAnswer = atob(answer)
  const decodedQuestion = atob(question)

  let answers = [
    atob(incorrect[0]),
    atob(incorrect[1]),
    atob(incorrect[2]),
    decodedAnswer,
  ]
  answers = shuffle(answers)

  if (!loading) {
    if (!answerClicked) {
      return (
        <AppWrapper>
          <Segment raised inverted>
            <Segment attached>
              <Header as='h2'>QUESTION {count + 1}</Header>
              <Header color='violet' size='small'>
                {decodedQuestion}
              </Header>
            </Segment>
            <Segment inverted color='violet' padded raised>
              <List
                size='large'
                selection
                divided
                inverted
                relaxed
                verticalAlign='middle'
              >
                {answers.map(choice => (
                  <List.Item key={choice}>
                    <List.Content>
                      <List.Header onClick={onClickA}>{choice}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Segment>
        </AppWrapper>
      )
    } if (answerClicked) {
      return (
        <AppWrapper>
          <Segment raised inverted disabled>
            <Segment attached>
              <Header as='h2'>QUESTION {count + 1}</Header>
              <Header color='violet' size='small'>
                {decodedQuestion}
              </Header>
            </Segment>
            <Segment inverted color='violet' padded raised>
              <List
                size='large'
                divided
                inverted
                relaxed
                verticalAlign='middle'
              >
                {answers.map(choice => (
                  <List.Item key={choice}>
                    <List.Content>
                      <List.Header>{choice}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Segment>
        </AppWrapper>
      )
    }
    if (loading) {
      return (
        <AppWrapper>
          <Segment raised inverted loading>
            <Segment attached>
              <Header as='h2'>QUESTION {count + 1}</Header>
              <Header color='violet' size='small'>
                {decodedQuestion}
              </Header>
            </Segment>
            <Segment inverted color='violet' padded raised>
              <List
                size='large'
                selection
                divided
                inverted
                relaxed
                verticalAlign='middle'
              >
                {answers.map(choice => (
                  <List.Item key={choice}>
                    <List.Content>
                      <List.Header onClick={onClickA}>{choice}</List.Header>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Segment>
          </Segment>
        </AppWrapper>
      )
    }
  }
  return null
}
//  <List.Header onClick={onClickA} answer={answer} value={onClickA.value}>{choice}</List.Header>
const mapStateToProps = state => ({
  tokeninfo: state.tokeninfo,
  questionsinfo: state.questionsinfo,
  onClickA: state.onClickA,
})

const mapDispatchToProps = (dispatch, answer) => ({
  onClickA: e => {
    const finalAnswer = atob(answer.answer)
    if (e.target.innerHTML === finalAnswer) dispatch(answerCorrect())
    if (e.target.innerHTML !== finalAnswer) dispatch(answerWrong())
  },
})

const ShowQuestions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(showQuestions)

export default ShowQuestions
