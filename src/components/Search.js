import React, { Component } from 'react';
import location from "../img/location.svg"
import '../styles/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  handleInput(event) {
    this.setState({ search: event.target.value });
  }

  getLocation(event) {
    console.log(event);
  }

  render() {
    return(
      <div id="search-component">
        <h1>Enter Location Name</h1>
        <form onSubmit={() => this.props.handleSearch(this.state.search)}>
          <input type="text" value={this.state.search} onChange={this.handleInput} />
          <input type="submit" value="Search" />
        </form>
        <img id="location-button" src={location} onClick={this.getLocation} alt="location-button" />
      </div>
    );
  }
}

export default Search;
