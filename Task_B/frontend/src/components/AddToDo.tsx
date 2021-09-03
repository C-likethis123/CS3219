import React, {useState} from 'react';

import {makeStyles, TextField, Button} from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';

import useTaskApi from '../api/useTaskApi';

const AddToDo = () => {
  const classes = useStyles();
  const {createTask} = useTaskApi();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const createTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task = {
      title,
      date: new Date(date).valueOf(),
      description,
    };
    createTask(task);

  }

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const changeDate = (event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value);
  const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.target.value);
  return (
    <form autoComplete="off" className={classes.root} onSubmit={createTaskHandler}>
      <TextField label="Add a task" variant="outlined" value={title} onChange={changeTitle} />
      <TextField label="Date" format="dd/MM/yyyy" type="date" value={date} onChange={changeDate} />
      <TextField label="Description" value={description} onChange={changeDescription} />
      <Button type="submit">Add Task</Button>
    </form>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    '& .MuiTextField-root': {
      width: '80%',
    },
  },
}));

export default AddToDo;
