/**
 *
 * Nav
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components';

import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const Nav = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

Nav.propTypes = {
  children: PropTypes.node,
}

export default Nav
