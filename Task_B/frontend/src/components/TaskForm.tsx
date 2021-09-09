import React, {useState} from 'react';

import {makeStyles, TextField, Button, FormGroup} from '@material-ui/core';

import {Task} from '../types/Task';

type TaskFormProps = {
  apiHandler: (task: Partial<Task>) => Promise<void>,
  task?: Partial<Task>,
  callback?: Function;
}
const TaskForm: React.FC<TaskFormProps> = ({apiHandler, task: taskProps, callback}) => {
  const classes = useStyles();
  const [title, setTitle] = useState(taskProps?.title ?? '');
  const [date, setDate] = useState(taskProps?.date ?? '');
  const [description, setDescription] = useState(taskProps?.description ?? '');
  const createTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const task = {
      ...taskProps,
      title,
      date: new Date(date).valueOf(),
      description,
    };
    apiHandler(task as Partial<Task>)
      .then(() => callback?.());
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
}

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

export default TaskForm;
