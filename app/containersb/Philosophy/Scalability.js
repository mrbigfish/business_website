import React from 'react'
import { 
  Header,
  Grid,
  Segment,
  Container,
} from 'semantic-ui-react'

const Scalability = ({ mobile }) => {
  return (
    <Container textAlign='center' >
      <Header as='h1'>I am the Header
        <Header.Subheader>I am the Sub-header</Header.Subheader></Header>
      <Grid columns={2} divided stackable >
        <Grid.Row stretched>
          <Grid.Column width={4} >
            <Grid.Row >
              <Grid columns={2} stackable>
                <Grid.Column>
                  <Segment>
                    <Header size='small'>Scalable Development?</Header>
                    <p>What is Scalable Development and how will it benefit you?</p>
                  </Segment>
                  <Segment>
                    <Header size='small'>2nd</Header>
                    <p>2nd Text</p>
                  </Segment>
                  <Segment>
                    <Header size='small'>3rd</Header>
                    <p>3rd Text</p>
                  </Segment>
                  <Segment>
                    <Header size='small'>4th</Header>
                    <p>4th Text</p>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={12} >
            <Segment>
              Main
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Scalability