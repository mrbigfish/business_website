import React from 'react';
import styled from 'styled-components';
import WebFixedEx from './WebFixedEx';

const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
`

const WebPages = () => {
  return (
    <AppWrapper>
      <WebFixedEx />
    </AppWrapper>
  )
}

export default WebPages;