import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ tasksList }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <TodoItem key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.array,
};

TodoList.propTypes = {
  tasksList: [],
};

export default TodoList;