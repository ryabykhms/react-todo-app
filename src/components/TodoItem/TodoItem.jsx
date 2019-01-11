import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

const TodoItem = ({text, isCompleted}) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" />
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};

TodoItem.defaultProps = {
  text: '',
  isCompleted: false,
};

export default TodoItem;