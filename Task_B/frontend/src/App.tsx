import React, {useEffect, useState} from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';

import useTaskApi from './api/useTaskApi';

function App() {
  const [tasks, setTasks] = useState([]);

  const {getAllTasks} = useTaskApi();
  const getTasksHandler = async () => {
    const tasks = await getAllTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    getTasksHandler();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <AddToDo />
    </div>
  );
}

export default App;
