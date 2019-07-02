import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  Header,
} from 'semantic-ui-react'
import img from '../../src/images/cubes.jpg'

const ImageWrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 120%;
  border-radius: 3px;
  max-width: 1200px;

`
const BackWrapper = styled.section`
  background-color:  #050822;
  margin: auto 0;
  width: 100%;
  height: 100%;
  border-radius: 1px;
`
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */  
// <Image src={img} wrapped />
const HomepageHeading = ({ mobile }) => (
  <BackWrapper
    style={{
      minHeight: mobile ? '100px' : '300px'
    }}
  >
    <ImageWrapper
      style={{
        minHeight: mobile ? '100px' : '300px'
      }}
    >
      <Header
        as='h1'
        content='Web Solutions'
        inverted
        style={{
          fontSize: mobile ? '2.1em' : '4em',
          fontWeight: 'bold',
          margin: mobile ? '0em 0em 0em 6.5em' : '0em 0em 0em 6.5em',
          paddingTop: mobile ? '0.4em' : '0.2em',
        }}
      />
      <Header
        as='h2'
        content='By Reasoning Rock Studios'
        inverted
        color='grey'
        style={{
          fontSize: mobile ? '1.2em' : '1.7em',
          fontWeight: 'normal',
          fontStyle: 'italic',
          margin: mobile ? '0em 0em 2em 11.7em' : '0em 0em 0em 19.5em',
          paddingBottom: mobile ? '2em' : '4em',
        }}
      />
    </ImageWrapper>
  </BackWrapper>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading

/*
      <Segment basic textAlign='right'>
        <Button primary size='huge'>
      Get Started
          <Icon name='right arrow' />
        </Button></Segment>
*/