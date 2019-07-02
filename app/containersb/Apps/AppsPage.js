import React from 'react';
import styled from 'styled-components';
import AppsHeader from './AppsHeader';
import ListApps from './ListApps';
import ListAppInfo from './ListAppInfo';

const AppWrapper = styled.section`
  margin: 0;
  width: 100%;
`;

const AppsPage = () => (
    <AppWrapper>
        <AppsHeader />
        <ListApps />
        <ListAppInfo />
    </AppWrapper>
);

export default AppsPage;