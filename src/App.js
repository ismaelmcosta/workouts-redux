import React from 'react';
import './App.css';
import Workouts from './Components/Workouts';
function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Word Tracker</h1>
      </div>
      <Workouts />
    </div>
  );
}

export default App;
