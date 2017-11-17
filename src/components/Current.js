import React, { Component } from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css';
import { icons, dailyForecast, formattedForecast } from '../FakeGraphData';
import DarkSkyApi from 'dark-sky-api';

class Current extends Component {
  constructor(){
    super();
    this.state = {
      currentDescription: 0,
      currentWeather: "",
    }

    DarkSkyApi.apiKey = '70cb406e46fe0848ebbd51bc18b2a2df';
    this.changeDescription = this.changeDescription.bind(this);
  }

  changeDescription(event) {
    if (event) {
      const currentDescription = event.activeTooltipIndex;
      this.setState({ currentDescription });
    }
  }

  render() {
    const iconName = dailyForecast[this.state.currentDescription].icon;
    const dailySummary = dailyForecast[this.state.currentDescription].summary;
    return(
      <div>
        <h1>Current Forecast</h1>
        <h2>{this.props.location.place_name}</h2>
        <h3>{this.props.location.coords.latitude}, {this.props.location.coords.longitude}</h3>
        <LineChart className="current-chart" width={1000} height={400} data={formattedForecast} onClick={this.changeDescription}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#1a1a1a" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <h3>{formattedForecast[this.state.currentDescription].name}</h3>
        <img className="weather-icon" src={icons[iconName]} alt={iconName} />
        <p>{dailySummary}</p>
        <p>Click on another day to see its description above</p>
      </div>
    );
  }
}

export default Current;
