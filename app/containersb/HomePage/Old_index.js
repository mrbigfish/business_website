import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import HomeLayout from './HomeLayout';

const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
`

const HomePage = () => {
  return (
      <AppWrapper>
        <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' component={home} />
              <Route path='/resume' component={Resume} />
              <Route path='/web_pages' component={WebPages} />
              <Route path='/customization' component={customization} />
              <Route path='/apps' component={Apps} />
              <Route path='/contact' component={ContactMe} />
              <Route component={RefErr} />
          </Switch>
        <HomeLayout />
      </ConnectedRouter>
    </AppWrapper>
  )
}

export default HomePage;