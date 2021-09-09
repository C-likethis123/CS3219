import React, {useContext} from 'react';

import TaskForm from './TaskForm';
import {TaskContext} from '../contexts/TaskContext';

const AddToDo = () => {
  const {createTask} = useContext(TaskContext);
  return (
    <TaskForm apiHandler={createTask} />
  )
};

export default AddToDo;
