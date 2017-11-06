import React, { Component } from 'react';
import location from "../img/location.svg";
import '../styles/search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      address: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  handleInput(event) {
    this.setState({ search: event.target.value });
  }

  getLocation(event) {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.props.handleSearch({coords: pos.coords})
    }, (err) => {
      console.warn(err);
    }, {
      timeout: 100000
    });
  }

  render() {

    return(
      <div id="search-component">
        <h1>Enter Location Name</h1>
        <form onSubmit={() => this.props.handleSearch({query_string: this.state.search})}>
          <input type="submit" value="Search" />
        </form>
        <img id="location-button" src={location} onClick={this.getLocation} alt="location-button" />
      </div>
    );
  }
}

export default Search;
