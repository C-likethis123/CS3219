import React, {useEffect, useContext} from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';
import {TaskContext, TaskProvider} from './contexts/TaskContext';
import TaskList from './components/TaskList';

import {Container} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <TopBar />
      <TaskProvider>
        <Container>
        <AddToDo />
        <TaskList />
        </Container>
      </TaskProvider>
    </div>
  );
}

export default App;
