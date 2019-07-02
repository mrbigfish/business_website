import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ListNews from './NewsItem';
import Loading from './Loading';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

const AppWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1%;
    width: 100%;
`;

let NewsApp = () => (
    <AppWrapper>
        <Button />
        <Loading />
        <ListNews />
    </AppWrapper>
);

export default NewsApp;