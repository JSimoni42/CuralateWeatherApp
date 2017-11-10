import React, { Component } from 'react';
import location from "../img/location.svg";
import '../styles/search.css';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // ChIJidZEkT4VkFQR9ICo-0-86QY

  handleInput(new_search) {
    this.setState({ search: new_search });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    geocodeByAddress(this.state.search)
      .then(results => {
        const place_id = results[0].place_id;
        const place_name = results[0].formatted_address;
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        const res = {place_id, place_name, coords: { latitude, longitude }};
        this.props.handleSearch(res);
      })
      .catch(error => console.error("Error", error));
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
    const inputProps = {
      value: this.state.search,
      onChange: this.handleInput,
    }

    const cssClasses = {
      root: 'autocomplete-container',
    }

    return(
      <div id="search-component">
        <h1>Enter Location Name</h1>
        <form onSubmit={this.handleFormSubmit}>
          {this.props.api_ready ? <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/> : ""}
          <input type="submit" value="Search" />
        </form>
        <img id="location-button" src={location} onClick={this.getLocation} alt="location-button" />
      </div>
    );
  }
}

// <form onSubmit={() => this.props.handleSearch({query_string: this.state.search})}>

export default Search;
