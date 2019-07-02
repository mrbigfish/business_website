/**
 * 
 * This is the main hook for the Applications Section...
 * 
 * NOTE: ALL Applications developed will be listed Here!
 * 
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import AppsPage from './AppsPage';
import NewsApp from '../NewsApp';
import RefErr from '../RefErr';
import Trivia from '../Trivia';
import ContactMe from '../ContactMe';

const AppWrapper = styled.section`
  margin: 0;
  width: 100%;
`;

const Apps = () => (
    <AppWrapper>
        <Switch>
            <Route exact path='/apps/' component={AppsPage} />
            <Route path='/apps/trivia' component={Trivia} />
            <Route path='/apps/news' component={NewsApp} />
            <Route path='/contact' component={ContactMe} />
            <Route component={RefErr} />
        </Switch>
    </AppWrapper>
);

export default Apps;