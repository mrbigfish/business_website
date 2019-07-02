// MainForm.jsx
import React, { Component } from 'react';
import FormDetails from './FormDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { firstName, lastName, email, phone, company, message } = this.state;
        const values = { firstName, lastName, email, phone, company, message };
        switch(step) {
        case 1:
            return <FormDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 3:
            return <Success />
        default: 
          return (
            <div>
              <h2>You have reached this page due to an Error. Please Email 
              (@bkturner10199@gmail.com) with explanation of how you got to this 
              point and I will be very appreciative.
              </h2>
            </div>
          )
        }
    }
}

export default MainForm;