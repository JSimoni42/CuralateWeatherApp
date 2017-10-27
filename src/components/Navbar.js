import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return(
      <nav className="navbar">
        <h1>Weather</h1>
        <ul>
          <li>Search</li>
          <li>Current</li>
          <li>History</li>
          <li>About</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
