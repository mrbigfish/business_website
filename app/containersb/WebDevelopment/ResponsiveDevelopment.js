import React, { Component } from 'react'
import { 
  Header,
  Grid,
  Segment,
  Container,
  Responsive,
  Button,
  Divider,
  Icon,
} from 'semantic-ui-react'
import info from './reactiveContent'

// #994d33
// #802000

export default class InfoTemplate extends Component {
  state = { value: 0 }

  handleChange = (e, { value }) => {
    this.setState({ value })
  }

  render() {

    const { value } = this.state

    return (
      <Container textAlign='center' >
        <Segment.Group horizontal style={{ backgroundColor: '#cc3300'}}>     
          <Responsive as={Segment} raised maxWidth={Responsive.onlyMobile.maxWidth} >
            <Segment basic>
              <Header as='h3' style={{ margin: '0em 0em 0em 0em', color: '#ffffff' }} >
                DEVELOPMENT WITH REACT
              </Header>
            </Segment>
            <Grid doubling>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==0 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: '#fff5e6', minWidth:'150px' }}
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
                      : { backgroundColor: '#fff5e6', minWidth:'150px' }}
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
                      : { backgroundColor: '#fff5e6', minWidth:'150px' }}
                    size='huge'
                    value={2} 
                    onClick={this.handleChange} 
                    active={value===2}
                  >
                    <Header as='h4'
                      style={{ color: '#050822'}}
                    >{info[2].menu.title}
                      <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                    </Header>
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment 
                    as={Button}
                    style={ value!==3 ? 
                      { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'150px' }
                      : { backgroundColor: '#fff5e6', minWidth:'150px' }}
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
                  <Container 
                    textAlign='justified'  
                    style={{ 
                      overflow: 'auto', 
                      maxHeight: '300px', 
                      color: '#19226f', 
                      backgroundColor: '#fff5e6',
                      padding: '0.8em'
                    }}>
                    <Header textAlign='center' as='h3'>{info[value].main.title}</Header>
                    {info[value].main.content1}
                    {info[value].main.content2}
                    {info[value].main.content3}
                    {info[value].main.content4}
                    {info[value].main.content5}
                  </Container>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>     
          <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth} maxWidth={Responsive.onlyTablet.maxWidth} >
            <Header as='h2' style={{color: '#ffffff'}}>DEVELOPMENT WITH REACT</Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px', margin: '0.5em -0.3em' }
                        : { backgroundColor: '#fff5e6', minWidth:'120px', margin: '0.5em -0.3em' }}
                      size='huge' 
                      value={0} 
                      onClick={this.handleChange} 
                      active={value===0}
                      compact
                    >
                      <Header as='h3'>{info[0].menu.title}
                        <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==1 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px', margin: '0.5em -0.3em' }
                        : { backgroundColor: '#fff5e6', minWidth:'120px', margin: '0.5em -0.3em' }}
                      size='huge' 
                      value={1} 
                      onClick={this.handleChange} 
                      active={value===1}
                      compact
                    >
                      <Header as='h3'>{info[1].menu.title}
                        <Header.Subheader>{info[1].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==2 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px', margin: '0.5em -0.3em' }
                        : { backgroundColor: '#fff5e6', minWidth:'120px', margin: '0.5em -0.3em' }}
                      size='huge' 
                      value={2} 
                      onClick={this.handleChange} 
                      active={value===2}
                      compact
                    >
                      <Header as='h3'>{info[2].menu.title}
                        <Header.Subheader>{info[2].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==3 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'120px', margin: '0.5em -0.3em' }
                        : { backgroundColor: '#fff5e6', minWidth:'120px', margin: '0.5em -0.3em' }}
                      size='huge' 
                      value={3} 
                      onClick={this.handleChange}
                      active={value===3}
                      compact
                    >
                      <Header as='h3'>{info[3].menu.title}
                        <Header.Subheader>{info[3].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                  </Grid.Row>            
                </Grid.Column>            
                <Grid.Column width={12} >
                  <Segment style={{ backgroundColor: '#fff5e6' }}>
                    <Header as='h2'>{info[value].main.title}</Header>
                    <Container textAlign='justified' style={{ color: '#19226f' }}>
                      {info[value].main.content1}
                      {info[value].main.content2}
                      {info[value].main.content3}
                      {info[value].main.content4}
                      {info[value].main.content5}
                    </Container>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>        
          <Responsive as={Segment} minWidth={Responsive.onlyTablet.maxWidth+1} maxWidth={Responsive.onlyLargeScreen.minWidth}>
            <Header as='h1' style={{color: '#ffffff'}}>DEVELOPMENT WITH REACT</Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'200px' }
                        : { backgroundColor: '#fff5e6', minWidth:'200px' }}
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
                        : { backgroundColor: '#fff5e6', minWidth:'200px' }}
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
                        : { backgroundColor: '#fff5e6', minWidth:'200px' }}
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
                        : { backgroundColor: '#fff5e6', minWidth:'200px' }}
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
                  <Segment style={{ backgroundColor: '#fff5e6' }}>
                    <Header as='h2'>{info[value].main.title}</Header>
                    <Container textAlign='justified' style={{ color: '#19226f' }}>
                      {info[value].main.content1}
                      {info[value].main.content2}
                      {info[value].main.content3}
                      {info[value].main.content4}
                      {info[value].main.content5}
                    </Container>
                  </Segment>
                </Grid.Column>
              </Grid.Row>   
            </Grid>
          </Responsive>
          <Responsive as={Segment} minWidth={Responsive.onlyLargeScreen.minWidth+1}>
            <Header as='h1' style={{color: '#ffffff'}}>DEVELOPMENT WITH REACT</Header>
            <Grid columns={2} divided stretched>
              <Grid.Row >
                <Grid.Column width={4}>
                  <Grid.Row >
                    <Segment 
                      as={Button}
                      style={ value!==0 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(256,196,116,0.8)' }
                        : { backgroundColor: '#fff5e6', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(216,216,256,0.5)' }}
                      size='massive' 
                      value={0} 
                      onClick={this.handleChange}
                      active={value===0}
                      
                    >
                      <Header as='h2' style={{ color: '#050822' }} >{info[0].menu.title}
                        <Header.Subheader>{info[0].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==1 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(256,196,116,0.8)' }
                        : { backgroundColor: '#fff5e6', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(216,216,256,0.4)' }}
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
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(256,196,116,0.8)' }
                        : { backgroundColor: '#fff5e6', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(216,216,256,0.4)' }}
                      size='massive' 
                      value={2} 
                      onClick={this.handleChange}
                      active={value===2}
                    >
                      <Header as='h2' style={{ color: '#000000' }}>{info[2].menu.title}
                        <Header.Subheader style={{ color: '#000000' }}>{info[2].menu.subtitle}</Header.Subheader>
                      </Header>
                    </Segment>
                    <Segment 
                      as={Button}
                      style={ value!==3 ? 
                        { backgroundColor: 'rgb(0,0,0,0.2)', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(256,196,116,0.8)' }
                        : { backgroundColor: '#fff5e6', minWidth:'250px', boxShadow: '1px 1px 7px 9px rgba(216,216,256,0.4)' }}
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
                  <Segment style={{ backgroundColor: '#fff5e6' }}>
                    <Header as='h1' style={{ color: '#19226f' }}>{info[value].main.title}
                      <Header.Subheader></Header.Subheader> 
                    </Header>
                    <Divider horizontal><Icon name='react' size='huge' />React </Divider>
                    <Container text textAlign='justified' style={{ color: '#19226f' }}>
                      {info[value].main.content1}
                      {info[value].main.content2}
                      {info[value].main.content3}
                      {info[value].main.content4}
                      {info[value].main.content5}
                    </Container>
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