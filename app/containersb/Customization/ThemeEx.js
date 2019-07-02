import React, { } from 'react'
import { 
  Container, 
  Header, 
  Grid, 
  Segment, 
  Image, 
  Icon, 
  List, 
  Divider, 
  Button, 
  Flag,
 } from 'semantic-ui-react'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import pinwheel from '../../src/images/pinwheel.gif'

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 12s linear infinite;
  &:hover {
    animation: ${rotate} infinite 2s linear;
  }
`;

/*
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");
  font-family: ${props => props.oswald ? 'Oswald' : 'serif'};
`
*/

const PageWrapper = styled.div`
    overflow-y: scroll;
    max-height: 700px;
`
var date1 = new Date('March 17, 2018 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('2019-06-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date3 = new Date('May 23, 2019 06:48:00');
// Sun Dec 17 1995 03:24:00 GMT...

var options = { month: 'long' }

const ThemeEx = () => (
  <Container style={{ marginTop: '2em' }}>
    <Header as='h1' dividing>
    Theming Example
    </Header>
    <Grid stackable verticalAlign='middle'>
      <Grid.Column width={8}>
        <Grid
          columns={2}
          stackable
          style={{ margin: '0em', width: 340 }}
          textAlign='center'
          verticalAlign='middle'
        >
          <Segment basic textAlign='center'>
            <Header
              as='h2'
              content='Brand Theme Color Example'
              subheader='Split Complementary Color Method Used'
            />
          </Segment>
          <Grid.Column color='teal' style={{ margin: '0.3em', height: 50 }}>
            <Header size='medium' inverted>Brand Primary</Header>
          </Grid.Column>
          <Grid.Column color='orange' style={{ margin: '0.3em', height: 50 }}>
            <Header size='medium'>Brand Secondary</Header>
          </Grid.Column>
          <Grid.Column color='blue' style={{ margin: '0.3em', height: 50 }}>
            <Header size='medium' inverted>Brand Tertiary</Header>
          </Grid.Column>
          <Grid.Column color='grey' style={{ margin: '0.3em', height: 50 }}>
            <Header size='medium'>Brand Light</Header>
          </Grid.Column>
          <Grid.Column color='black' style={{ margin: '0.3em', height: 50 }}>
            <Header size='medium' inverted>Brand Dark</Header>
          </Grid.Column>
          <Segment basic textAlign='center'>
            <Header size='tiny'>Note: Colors can be in any arrangement desired, 
              and can vary on any webpage as seen fit.
            </Header>
          </Segment>
        </Grid>
      </Grid.Column>
      <Grid.Column width={8}>
          <Segment basic></Segment>
          <PageWrapper>
            <div style={{ position: 'sticky', top: '0', zIndex: '2' }} >
              <Segment basic floated='right' textAlign='right' vertical stackable>
                <Segment basic style={{ margin: '-1.5rem' }} >
                <Button circular size='tiny' color='facebook' icon='facebook' /></Segment>
                <Segment basic style={{ margin: '-1.5rem' }} >
                <Button circular size='tiny' color='twitter' icon='twitter' /></Segment>
                <Segment basic style={{ margin: '-1.5rem' }} >
                <Button circular size='tiny' color='linkedin' icon='linkedin' /></Segment>
                <Segment basic style={{ margin: '-1.5rem' }} >
                <Button circular size='tiny' color='google plus' icon='google plus' /></Segment>
              </Segment>
            </div>
          <Segment attached color='teal' inverted>
            <Grid columns={1}>
                <Segment basic>
                  <Header as='h4' color='orange'>
                    <Icon name='world' color='orange'/>
                    <Header.Content>www.mysite.com&nbsp;&nbsp;
                      <Flag name='us' />
                      <Flag name='ca' />
                      <Flag name='mx' />
                    </Header.Content>
                  </Header>
                </Segment>
                <Divider hidden />
                <Segment basic textAlign='center' >
                  <Header 
                    color='black'
                    style={{
                      font: 'bold 12px/30px Times New Roman, serif',
                      fontSize: '400%',
                      fontWeight: 700,
                    }}
                  >THEME</Header>
                  <Header 
                    color='blue'
                    style={{
                      font: 'bold 12px/30px Impact, serif',
                      fontSize: '360%',
                    }}
                  >BRANDING
                  </Header>
                </Segment>
                <Divider hidden />
            </Grid>
          </Segment>
          <Segment attached color='grey' inverted>
            <Segment basic textAlign='center'>
              <Rotate>
                <Image src={pinwheel} size='tiny'/>
              </Rotate>
              <Header 
                as='h1' 
                color='blue' 
                style={{
                  fontFamily: 'Times New Roman, serif',
                  fontStyle: 'normal', 
                  fontWeight: 'bolder',
                  fontStretch: 'expanded',
                  fontSize: 40,
                }} >Our Company</Header>
                <Button animated='fade' color='orange' >
                  <Button.Content visible>See More</Button.Content>
                  <Button.Content hidden icon labelPosition='left'>
                      <Icon color='teal' inverted name='arrow circle right' size='Medium' />Click Me
                  </Button.Content>
                </Button>
            </Segment>
            <Segment basic>
              <Segment color='teal' inverted>
                <Divider horizontal color='grey'>
                <Header as='h4' color='grey' >
                  <Icon name='comment' color='orange' />
                  A Message from the CEO
                </Header>
              </Divider>
              <Header as='h3' color='black'> </Header>
              <p style={{ fontStyle: 'italic' }} >"Lorum Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </Segment>
              <Divider hidden />
              <Divider horizontal color='blue'>
                <Header as='h4' color='black' >
                  <Icon name='comments' color='orange' />
                  Comments
                </Header>
              </Divider>
              <p><Icon name='user circle' />Susan G. ~{new Intl.DateTimeFormat('en-US', options).format(date3)} {date3.getUTCFullYear()}</p>
              <p>"...absolutely amazing...5 Stars! "</p>
                <Icon size='small' name='star' />
                <Icon size='small' name='star' />
                <Icon size='small' name='star' />
                <Icon size='small' name='star' />
                <Icon size='small' name='star' />
              <p>__________________________</p>
              <p><Icon name='user circle outline' />Mary M.  ~{new Intl.DateTimeFormat('en-US', options).format(date2)} {date2.getUTCFullYear()}</p>
              <p>"You hit the nail on the head with your incredible services and products! Thank you from the bottom of my <Icon name='heart' color='orange' />"</p>
              <p>__________________________</p>
              <p><Icon name='user circle' />John O. ~{new Intl.DateTimeFormat('en-US', options).format(date1)} {date1.getUTCFullYear()}</p>
              <p>"The most spectacular fireworks sometimes burn out a little too soon 
                <Icon name='hand pointing up outline' color='blue' /> 
                <Icon name='cloud upload' color='blue' />"
              </p>
            </Segment>
          </Segment>
          <Segment attached color='black' inverted textAlign='right'>
            <List>
              <List.Item as='a' inverted color='grey'>ABOUT</List.Item>
              <List.Item as='a' inverted color='grey'>CONTACT</List.Item>
            </List>
          </Segment>
          </PageWrapper>
          <Segment basic></Segment>
      </Grid.Column>
    </Grid>
  </Container>
)

export default ThemeEx;