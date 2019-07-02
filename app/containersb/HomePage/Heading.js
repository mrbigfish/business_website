import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Header,
  Icon,
  Container,
} from 'semantic-ui-react'
import img from '../../images/stonehenge.jpg'

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const ImageWrapper = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: left;
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
`

//   style={{ width: '100%', minHeight: 700, padding: '1em 0em' }}
//                 marginTop: mobile ? '0.5em' : '1em',
const HomepageHeading = ({ mobile }) => (
  <Container>
    <ImageWrapper>
      <Header
        as='h1'
        content='Web Development'
        color='grey'
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          margin: mobile ? '15%' : '0em 0em 1em 0.7em',
          font: mobile ? 'bold 12px/24px Times New Roman, serif' : 'bold 52px/90px Times New Roman, serif',
        }}
      />
      <Header
        as='h2'
        content='by Reasoning Rock Studios'
        color='grey'
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          margin: mobile ? '6.5em' : '-2.4em 0em 6em 2.9em',
          font: mobile ? 'italic 12px/24px Times New Roman, serif' : 'italic 32px/60px Times New Roman, serif',
        }}
      />
            
      <Container textAlign='center' >
        <Header
          color='grey'
          as='h1'
          style={{ margin: '1em 0em -0.2em 18em', paddingTop: '-1em' }}
          content='Make Your Company Happen!'
        >Make Your Company Happen!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button 
            color='orange'
            size='large'
            style={{ margin: '1% 0 2% 0' }}
          >
              Contact Us
            <Icon name='right arrow' />
          </Button></Header>
      </Container></ImageWrapper>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading

/** <Segment attached textAlign='center'>
 *               style={{
                fontSize: mobile ? '1em' : '1.4em',
                fontWeight: 'bold',
                marginBottom: mobile ? '0.5em' : '0em',
              }}
 * 
 *               style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'bold',
                marginTop: mobile ? '0.5em' : '0em',
                paddingTop: mobile ? '0.5em' : '0em',
                marginBottom: mobile ? '0.5em' : '0em',
              }}
 */