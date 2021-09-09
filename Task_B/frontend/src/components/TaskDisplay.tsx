import React, {useContext} from 'react';

import {makeStyles, Button} from '@material-ui/core';
import {Delete as DeleteIcon} from '@material-ui/icons';

import {TaskContext} from '../contexts/TaskContext';

import {Task} from '../types/Task';

const TaskDisplay: React.FC<Task> = ({
  id,
  title,
  date,
  description,
  isCompleted
}) => {
  const classes = useStyles();

  const {deleteTask} = useContext(TaskContext);
  const deleteTaskHandler = (_: React.MouseEvent) => deleteTask(id);

  return (
    <div className={classes.root}>
      <input type="checkbox" checked={isCompleted} />
      <div>
        <b>{title}</b>
        <div className={classes.information}>{date}</div>
        <div className={classes.information}>{description}</div>
      </div>
      <Button onClick={deleteTaskHandler}>
        <DeleteIcon />
      </Button>
    </div>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
  },
  information: {
    color: theme.palette.grey[600],
  }
}));

export default TaskDisplay;
