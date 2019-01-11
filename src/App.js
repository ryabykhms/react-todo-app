import React, {Fragment} from 'react';
import Title from './components/Title/Title';
import Todo from './containers/Todo/Todo';

const App = () => (
  <Fragment>
    <Title title="ToDo App" />
    <Todo />
  </Fragment>
);

export default App;
