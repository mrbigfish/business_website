import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Dropdown,
} from 'semantic-ui-react'
import { website, about, mobile } from './menuItems'
import HomepageHeading from './Heading'

/*
TODO: Heads up! 
 * We using React Static to prerender our docs with server side rendering,
 * this is a quite simple solution. For more advanced usage please check
 * Responsive docs under the "Usage" section.
 */ 
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/**
 * *=======================================================
 * *****************DROPDOWN LOOKUP TABLE******************
 * **====================================================**
 * **||              *WEBSITE DROPDOWN*                ||**
 * **||            *VALUES FROM 1 TO 99*  (0 static)   ||**
 * ****==================================================****
 * ****MENU             TEXT                  VALUE****
 * *  philosophy:     'Scalability'             13
 * *                  'Developmental'           15
 * *  development:    'Scalability'             23
 * *                  'Responsive'              25
 * *                  'Tools'                   28
 * *  design:         'Scalability'             33
 * *                  'Theming'                 35
 * *  interface:      'Interoperability'        42
 * *                  'User Interface'          44
 * *                  'User Experience'         46
 * *  examples:       'Login'                   51
 * *                  'Homepage'                52
 * *                  'Navigation'              54
 * *                  'Theme'                   55
 * *                  'Content'                 56
 * *                  'Sticky'                  58
 * *  customization:  'Branding'                71
 * *                  'Internationalization'    73
 * **====================================================**
 * **||             *MOBILE DROPDOWN*                  ||**
 * **||         *VALUES FROM 101 TO 149* (100 static)  ||**
 * ****================================================****
 *  * *               'Development'            110
 *  * *               'Expectations'           120
 *  * *               'Apps'                   130
 *  * *               'Limitations'            140
 * **====================================================**
 * **||              *ABOUT DROPDOWN*                  ||**
 * **||         *VALUES FROM 151 TO 199* (150 static)  ||**
 * ****================================================****
 *  * *               'Reasoning Rock Studios' 110
 *  * *               'Expectations'           120
 *  * *               'Apps'                   130
 *  * *               'Limitations'            140
 */

/* 
TODO: Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, 
 * it can be implemented easily. It can be more complicated, but you can create 
 * really flexible markup.
 */

export default class MobileContainer extends Component {
  state = { value: 0 }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handleChange = (e, { value }) => this.setState({ value })

  render() {

    const { children } = this.props
    const { sidebarOpened } = this.state
    const { value } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item
            name='home'
            color="blue" 
            active={value===0}
            onClick={this.handleChange}  
            as={ Link }
            to="/"
            value={0}
          />
          <Menu.Item
            color="blue"
            active={value>=1&&value<=99}
          >
            <Dropdown text='Website' >
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown 
                    text='Philosophy'
                    floating
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.philosophy} 
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown 
                    text='Development' 
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.development} 
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown 
                    text='Design' 
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.design} 
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown 
                    text='Interface' 
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.interface} 
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown 
                    text='Examples' 
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.examples} 
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown 
                    text='Customization'
                    floating
                    value={value} 
                    onChange={this.handleChange} 
                    options={website.customization} 
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item
            color="blue"
            onClick={this.handleItemClick}
            active={value>=101&&value<=149}
          >
            <Dropdown
              text='Mobile'
              onChange={this.handleChange}
              options={mobile}
              value={value}
            />
          </Menu.Item>
          <Menu.Item
            name='apps'
            as={ Link }
            to="/apps"
            color="blue"
            active={value===100}
            onClick={this.handleChange}
            value={100}
          />
          <Menu.Item
            color="blue"
            active={value>=151&&value<=199}
          >
            <Dropdown
              text='About'
              onChange={this.handleChange}
              options={about}
              value={value}
            />
          </Menu.Item>
          <Menu.Item
            name='contact'
            as={ Link }
            to="/contact"
            color="blue"
            active={value===150}
            onClick={this.handleChange}
            value={150}
          />
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ backgroundColor: '#000000', marginTop: '-1em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='small'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Contact Us
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile/>
          </Segment>
          {children}
        </Sidebar.Pusher>
        
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}