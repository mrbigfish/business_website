// UserDetails.jsx
import React, { Component } from 'react';
import { Form, Button, Header, TextArea, Container } from 'semantic-ui-react';

class FormDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
          <Container>
            <Header>CONTACT ME</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Field>
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Company</label>
                    <input
                    placeholder='Company'
                    onChange={this.props.handleChange('company')}
                    defaultValue={values.company}
                    />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='two'>
                <Form.Field
                    control='input'
                    label='Email Adddress'
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                />
                <Form.Field
                    label='Phone Number'
                    type='phone'
                    placeholder='Phone Number'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    control='input'
                />
              </Form.Group>
              <Form.Field 
                control={TextArea}
                defaultValue={values.message}
                onChange={this.props.handleChange('message')}
                label='Request/Suggestion Information' 
                placeholder='Please explain reason for contact...' 
              />
              <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
          </Container>
        )
    }
}

export default FormDetails;