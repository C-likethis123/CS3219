import React, {useEffect, useState} from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';
import TaskDisplay from './components/TaskDisplay';

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
      {tasks.map(({
        _id,
        title,
        date,
        description,
        isCompleted,
      }) => <TaskDisplay key={_id} id={_id} title={title} date={date} description={description} isCompleted={isCompleted} />
      )}
    </div>
  );
}

export default App;
