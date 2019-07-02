import PropTypes from 'prop-types'
import React from 'react'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer mobile>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
}

export default ResponsiveContainer;