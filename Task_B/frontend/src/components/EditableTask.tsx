import React, {useContext} from 'react';

import TaskForm from './TaskForm';
import {TaskContext} from '../contexts/TaskContext';

import {Task} from '../types/Task';

type EditableTaskProps = {
  task: Partial<Task>,
  toggleEdit: () => void;
};

const EditableTask: React.FC<EditableTaskProps> = ({task, toggleEdit}) => {
  const {editTask} = useContext(TaskContext);
  return (
    <TaskForm apiHandler={editTask} task={task} callback={toggleEdit} />
  )
}

export default EditableTask;
