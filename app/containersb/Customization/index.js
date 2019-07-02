import React from 'react';
import styled from 'styled-components';
import ThemeEx from './ThemeEx'

const AppWrapper = styled.section`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
  margin: 1%;
`

const customization = () => {
  return (
    <AppWrapper>
      <ThemeEx />
    </AppWrapper>
  )
}

export default customization;