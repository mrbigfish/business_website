/**
 *
 * TriviaApp
 *
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import { makeSelectGetToken, makeSelectStartGame } from './selectors'
import messages from './messages'

import reducer from './reducer'
import saga from './saga'

import GetToken from '../../containersb/Trivia/GetToken'
import PlayGame from '../../containersb/Trivia/PlayGame'

const key = 'trivia'

export function TriviaApp({ token, isPlaying }) {
  useInjectReducer({ key, reducer })
  useInjectSaga({ key, saga })

  const tokenProps = {
    token,
    isPlaying,
  }

  return (
    <div>
      <Helmet>
        <title>TriviaApp</title>
        <meta name='description' content='Description of TriviaApp' />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <GetToken {...tokenProps} />
      <PlayGame {...tokenProps} />
    </div>
  )
}

TriviaApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  isPlaying: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  token: makeSelectGetToken(),
  isPlaying: makeSelectStartGame(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(TriviaApp)
