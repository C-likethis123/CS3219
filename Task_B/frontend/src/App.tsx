import React, {useEffect, useContext} from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';
import TaskDisplay from './components/TaskDisplay';

function App() {
  const [tasks, setTasks] = React.useState([]);

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
