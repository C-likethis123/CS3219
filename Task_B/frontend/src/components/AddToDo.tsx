import React, {useState} from 'react';

import {makeStyles, TextField, Button, FormGroup} from '@material-ui/core';

import useTaskApi from '../api/useTaskApi';

const AddToDo = () => {
  const classes = useStyles();
  const {createTask} = useTaskApi();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
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
      <FormGroup>
        <TextField label="Title" autoFocus value={title} onChange={changeTitle} />
        <TextField label="Date" type="date" InputLabelProps={{shrink: true}} value={date} onChange={changeDate} />
        <TextField label="Description" value={description} onChange={changeDescription} />
      </FormGroup>
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </form>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    '& .MuiTextField-root': {
      width: '50%',
    },
    '& .MuiFormGroup-root': {
      alignContent: 'center',
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(2),
    }
  },
}));

export default AddToDo;
