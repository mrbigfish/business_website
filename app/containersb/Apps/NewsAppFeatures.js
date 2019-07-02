import React from 'react';
import { Message, Label, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: top;
  margin-right: auto;
  margin-left: auto;
  width: auto;
`;

const appName = 'Get Top News';

const appFeatureList = [
    'Simple Fetch API to retrieve News Stories',
    'React Redux Saga complementary libs for State control',
    'Great adopted learning Tutorial Medium Post from Ron Lavit',
    "NewsAPI is a Great & Recommended Source for All of Your Website News!",
    "ToDo's: None planned for this App",
];

const NewsAppFeatures = () => (
    <Wrapper>
        <Message 
            header={`${appName} App Features`} 
            list={appFeatureList}
            size='tiny'
            attached 
        />
        <Label as='a' color="black" href='https://newsapi.org'>
            <Icon name='like' color="red" />Powered by NewsAPI.org
        </Label>
        <Label as='a'  
            href='https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6'
            color="black"
        >
            <Icon name='linkify'/>Link to Saga Tutorial
        </Label>
    </Wrapper>
);

export default NewsAppFeatures;