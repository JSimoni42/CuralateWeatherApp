import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h1>Weather</h1>
          <ul>
            <li>Search</li>
            <li>Current</li>
            <li>History</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
