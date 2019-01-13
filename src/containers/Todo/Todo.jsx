import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTask, completeTask, removeTask, changeFilter} from '../../actions/actionCreator';
import './Todo.css';
import Footer from '../../components/Footer/Footer';
import TodoList from '../../components/TodoList/TodoList';
import TodoInput from '../../components/TodoInput/TodoInput';

class Todo extends Component {
  state = {
    taskText: '',
  };

  handleInputChange = ({target: {value}}) => {
    this.setState({
      taskText: value
    });
  };

  addTask = ({key}) => {
    const {taskText} = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      const {addTask} = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      })
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render () {
    const {taskText} = this.state;
    const {tasks, removeTask, completeTask, filters, changeFilter} = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div className="todo-wrapper">
        <TodoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <TodoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
      </div>
    )
  }
}

export default connect(({tasks, filters}) => ({
  tasks,
  filters,
}), {addTask, removeTask, completeTask, changeFilter})(Todo);

