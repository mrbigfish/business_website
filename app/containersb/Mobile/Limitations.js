import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';


const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
  min-height: 600px;
`

const Limitations = () => {
  return (
    <AppWrapper>
      <Header as='h1'>Mobile Device Limitations</Header>
    </AppWrapper>
  )
}

export default Limitations