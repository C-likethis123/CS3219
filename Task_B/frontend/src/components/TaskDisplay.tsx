import React from 'react';

import {makeStyles, Button} from '@material-ui/core';
import {Delete as DeleteIcon} from '@material-ui/icons';

import useTaskApi from '../api/useTaskApi';

type Task = {
  id: string,
  title: string,
  date?: number,
  description?: string,
  isCompleted: boolean,
};

const TaskDisplay: React.FC<Task> = ({
  id,
  title,
  date,
  description,
  isCompleted
}) => {
  const classes = useStyles();

  const {deleteTask} = useTaskApi();

  const deleteTaskHandler = () => {
    deleteTask(id);
  }

  return (
    <div className={classes.root}>
      <input type="checkbox" checked={isCompleted} />
      <div>{title}</div>
      <div>{date}</div>
      <div>{description}</div>
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
}));

export default TaskDisplay;
