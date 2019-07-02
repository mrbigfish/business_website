import React from 'react';
import { Link } from 'react-router-dom';
import { Message, Label, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-self: top;
  margin: 0;
`;

const appName = 'Coming Soon';

const appFeatureList = [
    'Still thinking about what to do',
    'I want something a bit more challenging, but doable',
    'If anyone has suggestions, please send a contact message',
    'Goal: Create an advanced-level App to increase my current boundary',
];

const ComingSoonAppFeatures = () => (
    <Wrapper>
        <Message 
            header={`${appName} App Features`} 
            list={appFeatureList}
            size='tiny'
            attached
        />
        <Label as={ Link } to="/contact" color='black' >
            <Icon name='talk' />Have Suggestions?
        </Label>
    </Wrapper>
);

export default ComingSoonAppFeatures;