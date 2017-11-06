import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './App.css';
require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      page: "search",
      api_ready: false
    }
    this.navigate = this.navigate.bind(this);
    this.onChange = (address) => this.setState({ address });
  }

  navigate(page){
    this.setState({ page })
  }

  componentDidMount(){
    const script = document.createElement("script");
    console.log(process.env);
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDsyK__nnyR25xifF6O_zOWAsTvsbmR3fw&libraries=places`;

    script.onload = () => {
      this.setState({ api_ready: true });
    }

    document.body.appendChild(script);
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    if (this.state.api_ready) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return (
        <h1>Nothing...</h1>
      )
    }
  }
}

export default App;
