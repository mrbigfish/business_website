// Success.jsx
import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';

class Success extends Component{
  render() {
    return(
      <div>
        <Message
          success
          header='Your Contact Information was updated successfully!'
          content='I will get to the message as soon as possible. Thank you!'
        />
      </div>
    )
  }
}

export default Success;