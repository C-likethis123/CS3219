import React, {useEffect, useContext} from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';
import TaskDisplay from './components/TaskDisplay';

import {TaskContext, TaskProvider} from './contexts/TaskContext';

function App() {
  const {tasks, getTasksHandler} = useContext(TaskContext);

  useEffect(() => {
    getTasksHandler();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <TaskProvider>
        <AddToDo />
        {tasks.map(({
          _id,
          title,
          date,
          description,
          isCompleted,
        }) => <TaskDisplay key={_id} id={_id} title={title} date={date} description={description} isCompleted={isCompleted} />
        )}
      </TaskProvider>
    </div>
  );
}

export default App;
