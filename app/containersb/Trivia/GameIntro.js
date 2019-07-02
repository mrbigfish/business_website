import React from 'react';
import { Header, Container } from 'semantic-ui-react';


const text = {
  Title: 'PLAY TRIVIA APP',
  Header: "Instructions for the Trivia Game App",
  Description: "You will be given a series of multiple choice Trivia questions. Questions are randomly selected over multiple categories. You must choose an answer by selecting the answer you believe is correct. If correct, you will be given points, followed by another question. There are a total of 15 questions. The difficulty is as follows: the first 5 are 'easy', the second 5 'medium', and the final 5 'hard'. You will be givin points for each correct answer you provide. Easy are worth 5 points, Medium 10 points, and Hard 20 points. GOODLUCK!",
  Play: "Click NEXT to CONTINUE"
}


const GameIntro = () => (
    <div>
      <Container fluid textAlign="center" >
        <Header as='h1' color="red" >{text.Title}</Header>
        <Header as='h3' color="red" >{text.Header}</Header>
        <p>
          {text.Description}
        </p>
        <Header as='h3' color="red" >{text.Play}</Header>
      </Container>
    </div>
)

export default GameIntro;