import React, { Component } from 'react';
import location from "../img/location.svg";
import '../styles/search.css';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      api_ready: false,
    }

    this.handleInput = this.handleInput.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDsyK__nnyR25xifF6O_zOWAsTvsbmR3fw&libraries=places";

    script.onload = () => {
      this.setState({ api_ready: true });
    }

    document.body.appendChild(script);
  }

  handleInput(new_search) {
    console.log(new_search);
    this.setState({ search: new_search });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    geocodeByAddress(this.state.search)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
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
          {this.state.api_ready ? <PlacesAutocomplete inputProps={inputProps} classNames={cssClasses}/> : ""}
          <input type="submit" value="Search" />
        </form>
        <img id="location-button" src={location} onClick={this.getLocation} alt="location-button" />
      </div>
    );
  }
}

// <form onSubmit={() => this.props.handleSearch({query_string: this.state.search})}>

export default Search;
