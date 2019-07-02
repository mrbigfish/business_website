/**
 * 
 * This is the main hook for the Application...
 * 
 * NOTE: ALL Applications (minus the optional right bar) will stem
 * from this index.js file
 * 
 */
import React from 'react';
import styled from 'styled-components';
import GetToken from './GetToken';
import PlayGame from './PlayGame';

const AppWrapper = styled.section`
  background-color: #f8f8ff;
  justify-content: center;
  align-items: center;
  padding: 1%;
`

const Trivia = () => (
    <AppWrapper>
        <GetToken />
        <PlayGame />
    </AppWrapper>
)

export default Trivia;