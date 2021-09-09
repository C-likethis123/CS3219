import React, {useContext, useState} from 'react';

import {makeStyles, Button} from '@material-ui/core';
import {Edit as EditIcon, Delete as DeleteIcon} from '@material-ui/icons';

import EditableTask from './EditableTask';
import {TaskContext} from '../contexts/TaskContext';

import {Task} from '../types/Task';

const TaskDisplay: React.FC<Task> = ({
  id,
  title,
  date,
  description,
  isCompleted
}) => {
  const [editing, setEditing] = useState(false);
  const classes = useStyles();

  const {deleteTask} = useContext(TaskContext);
  const deleteTaskHandler = (_: React.MouseEvent) => deleteTask(id);

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className={classes.root}>
      {editing
        ? <EditableTask task={{id, title, date, description, isCompleted}} toggleEdit={toggleEdit} />
        : (
          <>
            <input type="checkbox" checked={isCompleted} />
            <div>
              <b>{title}</b>
              <div className={classes.information}>{date}</div>
              <div className={classes.information}>{description}</div>
            </div>
            <Button onClick={toggleEdit}>
              <EditIcon />
            </Button>
            <Button onClick={deleteTaskHandler}>
              <DeleteIcon />
            </Button>
          </>
        )}
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
