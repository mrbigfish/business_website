// Confirmation.jsx
import React, { Component } from 'react';
import { Button, List, Header, Container, Segment } from 'semantic-ui-react';

class Confirmation extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, phone, company, message }} = this.props;

        return(
            <Container textAlign='center' padded>
                <Header size='large'>Confirm your Details</Header>
                <Header size='medium' >Click Confirm if the following details have been correctly entered</Header>
                <Segment padded textAlign='left'>
                  <List>
                    <List.Item icon='users' content={`First Name: ${firstName}`} />
                    <List.Item icon='users' content={`Last Name: ${lastName}`} />
                    <List.Item icon='company' content={`Company: ${company}`} />
                    <List.Item icon='mail' content={`Email: ${email}`} />
                    <List.Item icon='phone' content={`Phone Number: ${phone}`} />
                    <List.Item icon='file text' content={`Message: ${message}`} />
                  </List>
                </Segment>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </Container>
        )
    }
}

export default Confirmation;