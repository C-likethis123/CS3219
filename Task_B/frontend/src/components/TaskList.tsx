import React, {useContext} from 'react';

import TaskDisplay from './TaskDisplay';
import {TaskContext} from '../contexts/TaskContext';

const TaskList = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <>
      {tasks.map(({_id, title, date, description, isCompleted}) => <TaskDisplay key={_id} id={_id} title={title} date={date} description={description} isCompleted={isCompleted} />)}
    </>
  )
}

export default TaskList;
