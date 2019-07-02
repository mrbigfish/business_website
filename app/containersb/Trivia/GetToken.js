/**
 *
 * This will get the Token for the user
 */
import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { getToken } from '../../src/actions/tokenActions'
import Welcome from './Welcome'

const AppWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4%;
`

const haveToken = ({ tokeninfo, onClickNext }) => {
  if (!tokeninfo.data) {
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

const mapStateToProps = state => ({
  tokeninfo: state.tokeninfo,
})

const mapDispatchToProps = dispatch => ({
  onClickNext: evt => dispatch(getToken()),
})

const GetToken = connect(
  mapStateToProps,
  mapDispatchToProps,
)(haveToken)

export default GetToken
