/**
 *
 * AppList
 *
 */

import React, { memo } from 'react'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl'
import messages from './messages'

import ListApps from '../../containersb/Apps/ListApps'
import AppsHeader from '../../containersb/Apps/AppsHeader'
import ListAppInfo from '../../containersb/Apps/ListAppInfo'

function AppList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <AppsHeader />
      <ListApps />
      <ListAppInfo />
    </div>
  )
}

AppList.propTypes = {}

export default memo(AppList)
