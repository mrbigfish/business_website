import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Menu,
} from 'semantic-ui-react'

class NavContent extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>
      this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu.Item
          name='home'
          color="blue" 
          active={activeItem === 'home'}
          onClick={this.handleItemClick}  
          as={ Link }
          to="/"
        />
        <Menu.Item 
          name='about'
          color="blue"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={ Link }
          to="/resume"
        />
        <Menu.Item 
          name='web_pages'
          as={ Link }
          to="/web_pages"
          color="blue"
          active={activeItem === 'web_pages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='customization'
          as={ Link }
          to="/customization"
          color="blue"
          active={activeItem === 'customization'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='apps'
          as={ Link }
          to="/apps"
          color="blue"
          active={activeItem === 'apps'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          as={ Link }
          to="/contact"
          color="blue"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
        />
      </Container>
    )
  }
}

export default NavContent;