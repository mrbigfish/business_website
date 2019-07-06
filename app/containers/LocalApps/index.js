/**
 *
 * LocalApps
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { compose } from 'redux'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import messages from './messages'

import reducer from './reducer'
import saga from './saga'
import AppList from '../../components/AppList'
import NewsApp from '../../containersb/NewsApp'
import TriviaApp from '../TriviaApp'
import NotFoundPage from '../NotFoundPage'

import ContactMe from '../../containersb/ContactMe'

const key = 'token'

export function LocalApps() {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  return (
    <div>
      <Helmet>
        <title>LocalApps</title>
        <meta name='description' content='Description of LocalApps' />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Switch>
        <Route exact path='/apps/' component={AppList} />
        <Route path='/apps/trivia' component={TriviaApp} />
        <Route path='/apps/news' component={NewsApp} />
        <Route path='/contact' component={ContactMe} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

LocalApps.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  null,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(LocalApps)
