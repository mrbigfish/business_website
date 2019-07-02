import React from 'react';
import styled from 'styled-components';
import { Transition, Button } from 'semantic-ui-react';
// import imgScary from '../../images/tv.png';

const AppWrapper = styled.div`
  display: flex;
  margin: 0;
  color: #515151;
  background-color: #FFF9F2;
  overflow: hidden;
`
const Right = styled.section`
  left: 0;
  background-color: #0000ff;
  height: 100%;
  min-height: 100px;
  width: 50%;
`

const Left = styled.section`
  left: 50%;
  background-color: #ff00ff;
  height: 100%;
  min-height: 100px;
  width: 50%;
`
// background-color: rgba(248, 247, 216, 0.7);
export default class Content extends React.Component {
  state = { visible: true }

  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state

    return (
      <AppWrapper ><Button content={visible ? 'Unmount' : 'Mount'} onClick={this.toggleVisibility} ></Button>
        <Transition.Group animation='slide right' duration='1500'>
          {visible && <Right />}
        </Transition.Group>
        <Transition.Group animation='slide left' duration='1500'>
          {visible && <Left />}
        </Transition.Group>
      </AppWrapper>
    )
  }
}