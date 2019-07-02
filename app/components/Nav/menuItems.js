import React from 'react'
import { Link } from 'react-router-dom'
import {
  Header,
  Icon,
  Grid,
} from 'semantic-ui-react'

/**
 * **website dropdown menu items**
 */
export const website = {
  philosophy: [
    {
      key: 13,
      text: 'Scalability',
      value: 13,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/scalability'
        >
          <Header as='h5' color='teal' >
            <Icon name='line graph' color='orange' />Scalability</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 15,
      text: 'Developmental',
      value: 15,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/developmental'
          >
            <Header as='h5' color='teal' >
              <Icon name='cogs' color='orange'/>Developmental</Header>
          </Grid.Column>
        </Grid>
    },
  ],
  development: [
    {
      key: 23,
      text: 'Scalability',
      value: 23,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/development_scalability'
        >
          <Header as='h5' color='teal' >
            <Icon name='line graph' color='orange' />Scalability</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 25,
      text: 'Responsive',
      value: 25,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/responsive_development'
          >
            <Header as='h5' color='teal' >
              <Icon name='refresh' color='orange'/>Responsive</Header>
          </Grid.Column>
        </Grid>
    },
    {
      key: 28,
      text: 'Tools',
      value: 28,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/tools'
        >
          <Header as='h5' color='teal' >
            <Icon name='wrench' color='orange'/>Tools</Header>
        </Grid.Column>
      </Grid>
    },
  ],
  design: [
    {
      key: 33,
      text: 'Scalability',
      value: 33,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/design_scalability'
        >
          <Header as='h5' color='teal' >
            <Icon name='line graph' color='orange' />Scalability</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 35,
      text: 'Theming',
      value: 35,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/custom_theme'
          >
            <Header as='h5' color='teal' >
              <Icon name='theme' color='orange'/>Theming</Header>
          </Grid.Column>
        </Grid>
    },
  ],
  interface: [
    {
      key: 42,
      text: 'Interoperability',
      value: 42,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/interoperability'
        >
          <Header as='h5' color='teal' >
            <Icon name='linkify' color='orange' />Interoperability</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 44,
      text: 'User Interface',
      value: 44,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/user_interface'
          >
            <Header as='h5' color='teal' >
              <Icon name='hand pointer' color='orange'/>User Interface</Header>
          </Grid.Column>
        </Grid>
    },
    {
      key: 46,
      text: 'User Experience',
      value: 46,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/user_experience'
        >
          <Header as='h5' color='teal' >
            <Icon name='smile' color='orange'/>User Experience</Header>
        </Grid.Column>
      </Grid>
    },
  ],
  examples: [
    {
      key: 51,
      text: 'Login',
      value: 51,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/login_example'
        >
          <Header as='h5' color='teal' >
            <Icon name='sign-in' color='orange' />Login</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 52,
      text: 'Homepage',
      value: 52,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/homepage_example'
          >
            <Header as='h5' color='teal' >
              <Icon name='home' color='orange'/>Homepage</Header>
          </Grid.Column>
        </Grid>
    },
    {
      key: 54,
      text: 'Navigation',
      value: 54,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/nav_example'
        >
          <Header as='h5' color='teal' >
            <Icon name='sitemap' color='orange'/>Navigation</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 55,
      text: 'Theme',
      value: 55,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/theme_example'
        >
          <Header as='h5' color='teal' >
            <Icon name='theme' color='orange'/>Theme</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 56,
      text: 'Content',
      value: 56,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/fixed_example'
        >
          <Header as='h5' color='teal' >
            <Icon name='file alternate' color='orange'/>Content</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 58,
      text: 'Sticky',
      value: 58,
      content: 
      <Grid>
        <Grid.Column 
          as={ Link }
          to='/sticky_example'
        >
          <Header as='h5' color='teal' >
            <Icon name='sticky note' color='orange'/>Sticky</Header>
        </Grid.Column>
      </Grid>
    },
  ],
  customization: [
    {
      key: 71,
      text: 'Branding',
      value: 71,
      content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/branding'
        >
          <Header as='h5' color='teal' >
            <Icon name='copyright outline' color='orange' />Branding</Header>
        </Grid.Column>
      </Grid>
    },
    {
      key: 73,
      text: 'Internationalization',
      value: 73,
      content: 
        <Grid>
          <Grid.Column
            as={ Link }
            to='/i18n'
          >
            <Header as='h5' color='teal' >
              <Icon name='language' color='orange'/>Internationalization</Header>
          </Grid.Column>
        </Grid>
    },
  ],
}

/**
 * **mobile dropdown menu items**
 */
export const mobile = [
  {
    key: 110,
    text: 'Development',
    value: 110,
    content: 
    <Grid>
      <Grid.Column
        as={ Link }
        to='/mobile_development'
      >
        <Header as='h5' color='teal' >
          <Icon name='line graph' color='orange' />Development</Header>
      </Grid.Column>
    </Grid>
  },
  {
    key: 120,
    text: 'Expectations',
    value: 120,
    content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/expectations'
        >
          <Header as='h5' color='teal' >
            <Icon name='cogs' color='orange'/>Expectations</Header>
        </Grid.Column>
      </Grid>
  },
  {
    key: 130,
    text: 'mobile_apps',
    value: 130,
    content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/mobile_apps'
        >
          <Header as='h5' color='teal' >
            <Icon name='cogs' color='orange'/>Mobile Apps</Header>
        </Grid.Column>
      </Grid>
  },
]

/**
 * **about dropdown menu items**
 */
export const about = [
  {
    key: 160,
    text: 'reasoning_rock',
    value: 160,
    content: 
    <Grid>
      <Grid.Column
        as={ Link }
        to='/reasoning_rock'
      >
        <Header as='h5' color='teal' >
          <Icon name='quote left' color='orange' />Reasoning Rock&nbsp;&nbsp;&nbsp;
          <Icon name='quote right' color='orange' />
        </Header>
      </Grid.Column>
    </Grid>
  },
  {
    key: 170,
    text: 'project_manager',
    value: 170,
    content: 
    <Grid>
      <Grid.Column
        as={ Link }
        to='/project_manager'
      >
        <Header as='h5' color='teal' >
          <Icon name='address card' color='orange' />Project Manager</Header>
      </Grid.Column>
    </Grid>
  },
  {
    key: 180,
    text: 'questions',
    value: 180,
    content: 
    <Grid>
      <Grid.Column
        as={ Link }
        to='/questions'
      >
        <Header as='h5' color='teal' >
          <Icon name='question circle' color='orange' />Questions?</Header>
      </Grid.Column>
    </Grid>
  },
  {
    key: 190,
    text: 'giving_back',
    value: 190,
    content: 
      <Grid>
        <Grid.Column
          as={ Link }
          to='/giving_back'
        >
          <Header as='h5' color='teal' >
            <Icon name='handshake' color='orange'/>Giving Back</Header>
        </Grid.Column>
      </Grid>
  },
]
