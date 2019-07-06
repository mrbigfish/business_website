// Success.jsx
import React from 'react'
import { Message } from 'semantic-ui-react'

const Success = () => (
  <div>
    <Message
      success
      header='Your Contact Information was updated successfully!'
      content='I will get to the message as soon as possible. Thank you!'
    />
  </div>
)

export default Success
