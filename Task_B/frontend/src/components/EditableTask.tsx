import React, {useContext} from 'react';

import TaskForm from './TaskForm';
import {TaskContext} from '../contexts/TaskContext';

import {Task} from '../types/Task';

type EditableTaskProps = {
  task: Partial<Task>,
};

const EditableTask: React.FC<EditableTaskProps> = ({task}) => {
  const {editTask} = useContext(TaskContext);
  return (
    <TaskForm apiHandler={editTask} task={task} />
  )
}

export default EditableTask;
