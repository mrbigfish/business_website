import React from 'react';
import styled from 'styled-components';

const RightContainer = styled.section`
display: flex;
overflow: scroll;
max-width: 20%;
max-height: 600px;
flex-direction: column;
border: 1px solid black;
`;

const RightBar = () => (
    <RightContainer>
        What should I put here?
    </RightContainer>
);

export default RightBar;