import React, {useContext} from 'react';

import TaskDisplay from './TaskDisplay';
import {TaskContext} from '../contexts/TaskContext';
import {makeStyles} from '@material-ui/core';

const TaskList = () => {
  const {tasks} = useContext(TaskContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tasks.map(({id, title, date, description, isCompleted}) => <TaskDisplay key={id} id={id} title={title} date={date} description={description} isCompleted={isCompleted} />)}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.grey[100],
  },
}));

export default TaskList;
