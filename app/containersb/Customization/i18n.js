import React from 'react';
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

const i18n = () => {
  return (
    <AppWrapper>
      INTERNATIONALIZATION
    </AppWrapper>
  )
}

export default i18n;