import React, { Component } from 'react';
import Parent from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timer</h1>
        </header>
        <Parent />
      </div>
    );
  }
}

export default App;
