import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import InfoTemplate from './InfoTemplate';


const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
  min-height: 600px;
`

const Developmental = () => {
  return (
    <AppWrapper>
      <InfoTemplate>Developmental</InfoTemplate>
    </AppWrapper>
  )
}

export default Developmental;