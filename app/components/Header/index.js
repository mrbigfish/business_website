import React from 'react'
import { FormattedMessage } from 'react-intl'

import A from './A'
import BackgroundImg from './BackgroundImg'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import Banner from './cubes.jpg'
import messages from './messages'
import Nav from '../Nav'

function Header() {
  return (
    <div>
      <BackgroundImg imgObj={Banner} alt='banner - Logo'>
          <NavBar>
            <HeaderLink to='/'>
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            <HeaderLink to='/features'>
              <FormattedMessage {...messages.features} />
            </HeaderLink>
          </NavBar>
      </BackgroundImg>
    </div>
  )
}

export default Header
