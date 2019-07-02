/**
 * 
 * Top Level Page Home. Only Center Section changes when page
 * changes.
 * 
 */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

// Children .js files
import TopSection from './TopSection';
// import RightBar from './RightBar';
import Footer from './Footer';
import home from '../HomePage';
import Resume from '../Info/index';
import Apps from '../Apps';
import RefErr from '../RefErr';
import ContactMe from '../ContactMe';
import WebPages from '../WebPages';
import customization from '../Customization';

const MidSectionContainer = styled.section`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 93%;
    min-height: 150px;
`;

const AppContainer = styled.section`
    display: block;
    margin: auto;
    border: 1px solid gray;
`;

const PageContainer = styled.section`
    display: block;
    width: auto;
    margin: auto;
`;

const PageLayout = ({ history }) => (
    <PageContainer>
        <ConnectedRouter history={history}>
            <TopSection />
                <MidSectionContainer>
                    <AppContainer>
                            <Switch>
                                <Route exact path='/' component={home} />
                                <Route path='/resume' component={Resume} />
                                <Route path='/web_pages' component={WebPages} />
                                <Route path='/customization' component={customization} />
                                <Route path='/apps' component={Apps} />
                                <Route path='/contact' component={ContactMe} />
                                <Route component={RefErr} />
                            </Switch>
                    </AppContainer>
                </MidSectionContainer>
                <Footer />
        </ConnectedRouter>
    </PageContainer>
);

export default PageLayout;