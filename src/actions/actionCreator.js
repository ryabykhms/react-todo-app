import {ADD_TASK, CHANGE_FILTER, COMPLETE_TASK, REMOVE_TASK} from '../constants';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter
});