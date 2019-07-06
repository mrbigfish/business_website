/**
 *
 * This will get the Token for the user
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { compose } from 'redux'

// import { useInjectReducer } from 'utils/injectReducer'
// import { useInjectSaga } from 'utils/injectSaga'

import { getToken } from '../../containers/LocalApps/actions'
// import reducer from '../../containers/TriviaApp/reducer'
// import saga from '../../containers/TriviaApp/saga'

import Welcome from './Welcome'

const AppWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`

const GetToken = ({ isPlaying, onClickNext }) => {
  if (!isPlaying) {
    return (
      <AppWrapper>
        <Segment raised textAlign='center' padded='very'>
          <Welcome />
          <Segment basic padded>
            <Button
              icon
              labelPosition='right'
              onClick={onClickNext}
              color='green'
            >
              NEXT
              <Icon name='right arrow' />
            </Button>
          </Segment>
        </Segment>
      </AppWrapper>
    )
  }
  return null
}

GetToken.propTypes = {
  onClickNext: PropTypes.func,
  // loading: PropTypes.bool,
  // error: PropTypes.any,
  isPlaying: PropTypes.bool,
}

const mapStateToProps = state => ({
  token: state.data,
})

const mapDispatchToProps = dispatch => ({
  onClickNext: evt => dispatch(getToken()),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(
  withConnect,
  memo,
)(GetToken)
