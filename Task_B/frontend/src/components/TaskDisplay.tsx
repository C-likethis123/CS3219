import React, {useContext, useState} from 'react';

import {makeStyles, Button, Container, Checkbox} from '@material-ui/core';
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

  const {deleteTask, editTask} = useContext(TaskContext);
  const deleteTaskHandler = (_: React.MouseEvent) => deleteTask(id);

  const toggleEdit = () => setEditing(!editing);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editTask({
      id, 
      isCompleted: event.target.checked,
      title,
      date,
      description
    });
  };

  return editing
        ? <EditableTask task={{id, title, date, description, isCompleted}} toggleEdit={toggleEdit} />
        : (
    <div className={classes.root}>
    <Checkbox
        checked={isCompleted}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
            <Container className={classes.taskContents}>
              <b className={classes.title}>{title}</b>
              <div className={classes.information}>{date}</div>
              <div className={classes.information}>{description}</div>
            </Container>
            <Button onClick={toggleEdit}>
              <EditIcon />
            </Button>
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
    justifyContent: 'center',
  },
  title: {
    fontSize: '1.5rem',
  },
  information: {
    color: theme.palette.grey[600],
  },
  taskContents: {
    textAlign: 'left',
  },
}));

export default TaskDisplay;
