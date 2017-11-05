import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';
require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: "search"
    }
    this.navigate = this.navigate.bind(this);
  }

  navigate(page){
    this.setState({ page })
  }

  render() {
    return (
      <div className="App">
        <Navbar onNav={this.navigate}/>
        <Content page={this.state.page} />
      </div>
    );
  }
}

export default App;
