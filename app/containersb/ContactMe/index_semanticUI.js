/**
 * 
 * This is the main hook for the Application...
 * 
 * NOTE: ALL Applications (minus the optional right bar) will stem
 * from this index.js file
 * 
 */
import React, { Component } from 'react';
import { Header, Button, Checkbox, Form, Input, Radio, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';

const AppWrapper = styled.section`
  padding: 1%;
  margin: 5%;
`;
/*
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
];
*/

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
      const { value } = this.state;
      return (
          <AppWrapper>
              <Header as='h1'>Contact Me</Header>
              <Form>
                  <Form.Group widths='equal'>
                      <Form.Field control={Input} label='First name' placeholder='First name' />
                      <Form.Field control={Input} label='Last name' placeholder='Last name' />
                      <Form.Field control={Input} label='Email' placeholder='youremail@email.com' />
                  </Form.Group>
                  <Form.Group inline>
                      <label>Contact Type</label>
                      <Form.Field
                          control={Radio}
                          label='Suggestion Only'
                          value='1'
                          checked={value === '1'}
                          onChange={this.handleChange}
                      />
                      <Form.Field
                          control={Radio}
                          label='Business Related'
                          value='2'
                          checked={value === '2'}
                          onChange={this.handleChange}
                      />
                      <Form.Field
                          control={Radio}
                          label='Request Contact Back'
                          value='3'
                          checked={value === '3'}
                          onChange={this.handleChange}
                      />
                  </Form.Group>
                  <Form.Field control={TextArea} label='Request/Suggestion Information' placeholder='Please explain reason for contact...' />
                  <Form.Field control={Button}>Submit</Form.Field>
              </Form>
          </AppWrapper>
      );
  }
}

export default FormExampleFieldControl;