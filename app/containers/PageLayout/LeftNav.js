import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class LeftNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) =>
      this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state;

      return (
          <Segment color='black' >
              <Menu stackable inverted>
                  <Menu.Item 
                      name='home'
                      as={ Link }
                      to="/"
                      color="blue" 
                      active={activeItem === 'home'}
                      onClick={this.handleItemClick}
                  />
                  <Menu.Item
                      name='about'
                      as={ Link }
                      to="/resume"
                      color="blue"
                      active={activeItem === 'about'}
                      onClick={this.handleItemClick}
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
              </Menu>
          </Segment>
      );
  }
}