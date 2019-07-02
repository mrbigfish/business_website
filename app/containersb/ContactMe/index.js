// app.js
import React, { Component } from 'react';
import MainForm from './MainForm';
import { Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const AppWrapper = styled.section`
  display: block;
  padding: 2%;
  background-color: #fafaff;
`

const ContactMe = () => {
  return (
    <AppWrapper>
      <Segment padded>
        <MainForm />
      </Segment>
    </AppWrapper>     
  )
}

export default ContactMe;