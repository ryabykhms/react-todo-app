import React from 'react';
import PropTypes from 'prop-types';

import './TodoInput.css';

const TodoInput = ({ value, onChange }) => (
  <div className="todo-input-wrapper">
    <i className="fas fa-plus" />
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
    />
  </div>
);

TodoInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

TodoInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default TodoInput;