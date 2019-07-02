import React from 'react';
import {Table } from 'semantic-ui-react';
import styled from 'styled-components';

const AppWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 2%;
`

const ScoreBoard = ({
  wrong,
  correct,
  score,
}) => {
  return (
    <AppWrapper>
      <Table collapsing color='violet'>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell colSpan='5' >SCOREBOARD</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>RIGHT</Table.Cell>
            <Table.Cell>{correct}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>WRONG</Table.Cell>
            <Table.Cell>{wrong}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>PERCENTAGE</Table.Cell>
            <Table.Cell>{Math.floor(100*(correct/(correct+wrong)))}%</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>TOTAL</Table.Cell>
            <Table.Cell>{wrong+correct}</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>SCORE</Table.Cell>
            <Table.Cell>{score} POINTS</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </AppWrapper>
  )
}

export default ScoreBoard;