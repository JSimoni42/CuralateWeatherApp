import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content page="search" />
      </div>
    );
  }
}

export default App;
