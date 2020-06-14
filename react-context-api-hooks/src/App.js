import React, { Fragment } from 'react';
import Students from './components/students'
import Teachers from './components/teachers'

const App = () => {

  return (
    <Fragment>
      <Teachers />
      <Students />
    </Fragment>
  );
}

export default App;