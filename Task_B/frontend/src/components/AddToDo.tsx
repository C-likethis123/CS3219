import React from 'react';

import {makeStyles, TextField} from '@material-ui/core';

const TopBar = () => {
  const classes = useStyles();
  return (
  <form autoComplete="off" className={classes.root}>
    <TextField label="Add a task" variant="outlined" />
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

export default TopBar;
