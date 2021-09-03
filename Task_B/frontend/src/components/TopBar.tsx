import React from 'react';

import {AppBar, Toolbar, Typography} from '@material-ui/core';

const TopBar = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography variant="h3">
        CS3219 Task List
      </Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
