import React from 'react';
import logo from './Dice.png';
import './App.css';
import RollDice from './RollDice';

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <img className="App-logo" src={logo} />
      </div>
      <h1 className="App-title">Digital Dice</h1>
      <RollDice />
    </div>
  );
}

export default App;
