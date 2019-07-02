import React from 'react';
import { Button } from 'semantic-ui-react';

const NextSection = ({
  onNextSection,
}) => {
  return (
    <div>
      <h1>Next Section</h1>
      <h4>These Next Set of Questions Will be a Little Harder</h4>
      <h4>But Worth More Points. Click Next When You Are Ready!</h4>
      <Button onClick={onNextSection} />
    </div>
  )
}

export default NextSection;