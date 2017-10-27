import React, { Component } from 'react';
import '../styles/nav_bar.css';

class Navbar extends Component {



  render() {
    return(
      <nav className="navbar">
        <h1>Weather</h1>
        <ul>
          <li id="search" onClick={(e) => this.props.onNav(e.target.id)}>Search</li>
          <li id="current" onClick={(e) => this.props.onNav(e.target.id)}>Current</li>
          <li id="history" onClick={(e) => this.props.onNav(e.target.id)}>History</li>
          <li id="about" onClick={(e) => this.props.onNav(e.target.id)}>About</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
