import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: "search",
      api_ready: false,
    }
    this.navigate = this.navigate.bind(this);
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDsyK__nnyR25xifF6O_zOWAsTvsbmR3fw&libraries=places";

    script.onload = () => {
      this.setState({ api_ready: true });
    }
    document.body.appendChild(script);
  }

  navigate(page){
    this.setState({ page })
  }

  render() {
    return(
      <div className="App">
        <Navbar onNav={this.navigate}/>
        <Content page={this.state.page} api_ready={this.state.api_ready}/>
      </div>
    );
  }
}

export default App;
