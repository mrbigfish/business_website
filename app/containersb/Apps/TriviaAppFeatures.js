import React from 'react';
import { Message, Label, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: top;
  margin: 0;
`;

const appName = 'Trivia';

const appFeatureList = [
    'Random subjects and questions',
    'Never get the same question twice',
    'Scoring based on increasing difficulty levels',
    'ToDo: Add/Store name to keep high score',
];

const AppFeaturesTrivia = () => (
    <Wrapper>
        <Message 
            header={`${appName} App Features`} 
            list={appFeatureList}
            size='tiny'
            attached
        />        
        <Label color="black" as="a" >
            <Icon name="like" />LIKE
        </Label>
    </Wrapper>
);

export default AppFeaturesTrivia;