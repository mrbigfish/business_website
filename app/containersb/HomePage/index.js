import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Responsive,
} from 'semantic-ui-react'
import styled from 'styled-components'
import imgA from '../../src/images/grannyhip.png'

const AppWrapper = styled.section``

const home = () => (
  <AppWrapper>
    <Segment style={{ padding: '2em 0em' }} vertical>
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Hello World!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The World is Digital.&nbsp;&nbsp;Even Nana is
              Digital!&nbsp;&nbsp;Are you?
              <br />
              We can help!&nbsp;&nbsp;Contact Us and your just a step away!
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Insist Modern Development!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Impress Me! That is what users today demand. Let us help you
              impress with the latest UX and UI Development Technologies.
              <br />
              DON&#39;T SETTLE!
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Responsive
              as={Segment}
              basic
              minWidth={Responsive.onlyTablet.minWidth}
            >
              <Image src={imgA} size='medium' />
            </Responsive>
            <Responsive
              as={Segment}
              basic
              textAlign='center'
              maxWidth={Responsive.onlyTablet.minWidth}
            >
              <Image src={imgA} size='small' />
            </Responsive>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' color='orange' inverted>
              Check Us Out
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ padding: '0em 0em 0em 0em' }}>
            <Segment basic padded='very'>
              <Header as='h3' style={{ fontSize: '2em' }}>
                &quot;We Want What You Want&quot;
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Allow us to Earn your continued business! The more we grow your
                business, the better we grow. Word-of-Mouth is the Best form of
                advertisement! &nbsp;&nbsp;<i>(...and flattery)</i>
              </p>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ padding: '5em 11.5em 5em 11.5em' }}>
            <Segment basic>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Create Your Digital Brand With Us
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <i>
                  &quot;Branding is important because not only is it what makes
                  a memorable impression on consumers but it allows your
                  customers and clients to know what to expect from your
                  company. It is a way of distinguishing yourself from the
                  competitors and clarifying what it is you offer that makes you
                  the better choice. Your brand is built to be a true
                  representation of who you are as a business, and how you wish
                  to be perceived.&quot;
                </i>
                <br />
                &nbsp;&nbsp;&ndash;
                <a
                  href='https://www.brandingmag.com/2015/10/14/what-is-branding-and-why-is-it-important-for-your-business/'
                  target='_blank'
                >
                  Elizabeth Smithson
                </a>
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it&apos;s really true. It took years of gene
          splicing and combinatory DNA research, but our bananas can really
          dance.
        </p>
        <Button as='a' size='large'>
          I&apos;m Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <Segment
      inverted
      vertical
      style={{ padding: '5em 0em', backgroundColor: '#000000' }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </AppWrapper>
)
export default home
