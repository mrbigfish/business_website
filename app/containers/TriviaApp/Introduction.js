import React from 'react'
import { Button, Header, Segment } from 'semantic-ui-react'
import GetToken from 'containersb/Trivia/GetToken'

const Introduction = () => (
  <Segment>
    <Header as='h1'>Welcome to the Trivia App!</Header>
    <GetToken />
  </Segment>
)

export default Introduction
