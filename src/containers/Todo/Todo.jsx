import React, {Component} from 'react';
import './Todo.css';
import Footer from '../../components/Footer/Footer';
import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';

const TASKS = [
  {
    id: 1,
    text: 'Learn ReactJs',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  }
];

class Todo extends Component {
  state = {
    activeFilter: 'all',
  };

  render () {
    const {activeFilter} = this.state;
    const tasksList = TASKS;
    const isTasksExist = tasksList && tasksList.length > 0;

    return (
      <div className="todo-wrapper">
        <TodoInput />
        {isTasksExist && <TodoList tasksList={tasksList} />}
        {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
      </div>
    )
  }
}

export default Todo;

