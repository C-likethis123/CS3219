import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <TopBar />
      <AddToDo />
    </div>
  );
}

export default App;
