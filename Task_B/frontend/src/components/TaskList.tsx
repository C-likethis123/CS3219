import React, {useContext} from 'react';

import TaskDisplay from './TaskDisplay';
import {TaskContext} from '../contexts/TaskContext';

const TaskList = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <>
      {tasks.map(({id, title, date, description, isCompleted}) => <TaskDisplay key={id} id={id} title={title} date={date} description={description} isCompleted={isCompleted} />)}
    </>
  )
}

export default TaskList;
