import React from 'react';
import { Header, Container } from 'semantic-ui-react';


const text = {
  Title: 'PLAY TRIVIA APP',
  Header: 'Welcome to the PLAY TRIVIA App',
  Description: "Welcome to my 'PLAY TRIVIA' App. This App tests your trivia knowledge by downloading random trivia questions from an Open Trivia Database using API fetch calls. The questions get continually harder as the game progresses, but points per correct answer increase.",
  Next: "Click NEXT to CONTINUE"
}


  const Welcome = () => (
    <div>
      <Container fluid textAlign="center" >
        <Header as='h1' color="red" >{text.Title}</Header>
        <Header as='h3' color="red" >{text.Header}</Header>
        <p>
          {text.Description}
        </p>
        <Header as='h3' color="red" >{text.Next}</Header>
      </Container>
    </div>
)

export default Welcome;