import React from 'react';
import { Segment, List } from 'semantic-ui-react';
import styled from 'styled-components';

const ChildWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  margin: 10%;
`

const QuestionInfo = ({
  difficulty,
  category,
}) => {

  const decodedCategory = atob(category);

  return (
    <ChildWrapper>
      <Segment color='violet' inverted raised>
        <List divided inverted relaxed size='tiny' >
          <List.Item>
            <List.Content>
              <List.Header>Category</List.Header>
              {decodedCategory}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Difficulty</List.Header>
              This Question is {difficulty}
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </ChildWrapper>
  )
}

export default QuestionInfo;