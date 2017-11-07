import React, { Component } from 'react';
import location from "../img/location.svg"
import '../styles/search.css';
const googleMapsClient = require('@google/maps').createClient({
  key: "AIzaSyDsyK__nnyR25xifF6O_zOWAsTvsbmR3fw"
});

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
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log("Coordinates:", pos.coords);
      console.log(Object.getOwnPropertyNames(googleMapsClient));
      googleMapsClient.reverseGeocode({
        latlng: [pos.coords.latitude, pos.coords.longitude],
      }, (err, resp) => {
        if(err) {
          console.log(resp.json.results);          
        }
      })
      // this.props.handleSearch({coords: pos.coords})
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
          <input type="text" value={this.state.search} onChange={this.handleInput} />
          <input type="submit" value="Search" />
        </form>
        <img id="location-button" src={location} onClick={this.getLocation} alt="location-button" />
      </div>
    );
  }
}

export default Search;
