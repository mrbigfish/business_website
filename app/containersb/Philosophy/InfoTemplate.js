import React, { Component } from 'react'
import { 
  Header,
  Grid,
  Segment,
  Container,
  Responsive,
  Button,
} from 'semantic-ui-react'
import info from './infoContent'

export default class InfoTemplate extends Component {
  state = { value: 0 }

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { value } = this.state;

    return (
      <Container textAlign='center' >
        <Segment.Group horizontal>     
          <Responsive as={Segment} maxWidth={Responsive.onlyMobile.maxWidth}>
            <Header as='h3' style={{ margin: '0.5em 0em 1.4em 0em' }} >I am the Header
              <Header.Subheader>I am the Sub-header</Header.Subheader></Header>
            <Grid doubling>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==0 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'150px' }}
                    size='huge' 
                    value={0} 
                    onClick={this.handleChange} 
                    active={value===0}
                  >
                    <Header as='h4'>{info[0].menu.title}
                      <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==1 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'150px' }}
                    size='huge'
                    value={1} 
                    onClick={this.handleChange} 
                    active={value===1}
                  >
                    <Header as='h4'>{info[1].menu.title}
                      <Header.Subheader>{info[1].menu.subtitle}</Header.Subheader>
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==2 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'150px' }}
                    size='huge'
                    value={2} 
                    onClick={this.handleChange} 
                    active={value===2}
                  >
                    <Header as='h4'>{info[2].menu.title}
                      <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==3 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'150px' }}
                    size='huge'
                    value={3} 
                    onClick={this.handleChange} 
                    active={value===3}
                  >
                    <Header as='h4'>{info[3].menu.title}
                      <Header.Subheader>{info[3].menu.subtitle}</Header.Subheader>
                    </Header>
                  </Segment>        
                </Grid.Column>
              </Grid.Row>    
              <Grid.Row>     
                <Grid.Column>
                  <Segment>
                    <Header as='h3'>{info[value].main.title}
                      <Header.Subheader>{info[value].main.content}</Header.Subheader> 
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>     
          <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth} maxWidth={Responsive.onlyTablet.maxWidth} >
            <Header as='h2'>I am the Header
              <Header.Subheader>I am the Sub-header</Header.Subheader></Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'120px' }}
                      size='massive' 
                      value={0} 
                      onClick={this.handleChange} 
                      active={value===0}
                    >
                      <Header as='h3'>{info[0].menu.title}
                        <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==1 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'120px' }}
                      size='massive' 
                      value={1} 
                      onClick={this.handleChange} 
                      active={value===1}
                    >
                      <Header as='h3'>{info[1].menu.title}
                        <Header.Subheader>{info[1].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==2 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'120px' }}
                      size='massive' 
                      value={2} 
                      onClick={this.handleChange} 
                      active={value===2}
                    >
                      <Header as='h3'>{info[2].menu.title}
                        <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==3 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'120px' }}
                      size='massive' 
                      value={3} 
                      onClick={this.handleChange}
                      active={value===3}
                    >
                      <Header as='h3'>{info[3].menu.title}
                        <Header.Subheader>{info[3].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Row>            
                </Grid.Column>            
                <Grid.Column width={12} >
                  <Segment>
                    <Header as='h2'>{info[value].main.title}
                      <Header.Subheader>{info[value].main.content}</Header.Subheader> 
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>        
          <Responsive as={Segment} minWidth={Responsive.onlyTablet.maxWidth+1} maxWidth={Responsive.onlyLargeScreen.minWidth}>
            <Header as='h1'>I am the Header
              <Header.Subheader>I am the Sub-header</Header.Subheader></Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'200px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'200px' }}
                      size='massive' 
                      value={0} 
                      onClick={this.handleChange} 
                      active={value===0}
                    >
                      <Header as='h3'>{info[0].menu.title}
                        <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==1 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'200px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'200px' }}
                      size='massive' 
                      value={1} 
                      onClick={this.handleChange} 
                      active={value===1}
                    >
                      <Header as='h3'>{info[1].menu.title}
                        <Header.Subheader>{info[1].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==2 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'200px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'200px' }}
                      size='massive' 
                      value={2} 
                      onClick={this.handleChange} 
                      active={value===2}
                    >
                      <Header as='h3'>{info[2].menu.title}
                        <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==3 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'200px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'200px' }}
                      size='massive' 
                      value={3} 
                      onClick={this.handleChange}
                      active={value===3}
                    >
                      <Header as='h3'>{info[3].menu.title}
                        <Header.Subheader>{info[3].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Row>            
                </Grid.Column>            
                <Grid.Column width={12} >
                  <Segment>
                    <Header as='h2'>{info[value].main.title}
                      <Header.Subheader>{info[value].main.content}</Header.Subheader> 
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>
          <Responsive as={Segment} minWidth={Responsive.onlyLargeScreen.minWidth+1}>
            <Header as='h1'>I am the Header
              <Header.Subheader>I am the Sub-header</Header.Subheader></Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'250px' }}
                      size='massive' 
                      value={0} 
                      onClick={this.handleChange} 
                      active={value===0}
                    >
                      <Header as='h2'>{info[0].menu.title}
                        <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==1 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'250px' }}
                      size='massive' 
                      value={1} 
                      onClick={this.handleChange} 
                      active={value===1}
                    >
                      <Header as='h2'>{info[1].menu.title}
                        <Header.Subheader>{info[1].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==2 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'250px' }}
                      size='massive' 
                      value={2} 
                      onClick={this.handleChange} 
                      active={value===2}
                    >
                      <Header as='h2'>{info[2].menu.title}
                        <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==3 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px' }
                        : { backgroundColor: 'rgb(0,0,0,0)', minWidth:'250px' }}
                      size='massive' 
                      value={3} 
                      onClick={this.handleChange}
                      active={value===3}
                    >
                      <Header as='h2'>{info[3].menu.title}
                        <Header.Subheader>{info[3].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Row>            
                </Grid.Column>            
                <Grid.Column width={12} >
                  <Segment>
                    <Header as='h1'>{info[value].main.title}
                      <Header.Subheader>{info[value].main.content}</Header.Subheader> 
                    </Header>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>        
        </Segment.Group>
      </Container>
    )
  }
}

/**
 * {...Responsive.onlyMobile}
 * 
 *                   <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth}>
                    <Segment>
                      <Header size='small'>Header</Header>
                      <p>Tablet+ 1</p>
                    </Segment>
                    <Segment>
                      <Header size='small'>Header</Header>
                      <p>Tablet+ 2</p>
                    </Segment>
                    <Segment>
                      <Header size='small'>Header</Header>
                      <p>Tablet+ 3</p>
                    </Segment>
                    <Segment>
                      <Header size='small'>Header</Header>
                      <p>Tablet+ 4</p>
                    </Segment>
                  </Responsive>
 * 
 *                   <Responsive as={Segment} {...Responsive.onlyComputer}>
                  Computer
                  </Responsive>
                  <Responsive as={Segment} {...Responsive.onlyLargeScreen}>
                  Large Screen
                  </Responsive>
                  <Responsive as={Segment} {...Responsive.onlyWidescreen}>
                  Widescreen
                  </Responsive>
 * 
 */