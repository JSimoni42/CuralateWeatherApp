import React, {Component} from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css';
import { data, formattedHistory, icons } from '../FakeGraphData';
import DarkSkyApi from 'dark-sky-api';
import moment from 'moment';

class History extends Component {
  constructor(){
    super();
    this.state = {
      currentDescription: 0,
      history: ""
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
    const iconName = formattedHistory[this.state.currentDescription].icon;
    const dailySummary = formattedHistory[this.state.currentDescription].summary;
    const lat = this.props.location.coords.latitude.toPrecision(4);
    const long = this.props.location.coords.longitude.toPrecision(4);
    return(
      <div>
        <h1>Past 7 Days</h1>
        <h2>{this.props.location.place_name}</h2>
        <h3>{lat}, {long}</h3>
        <LineChart className="current-chart" width={1000} height={400} data={formattedHistory} onClick={this.changeDescription}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#1a1a1a" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <h3>{formattedHistory[this.state.currentDescription].date}</h3>
        <img className="weather-icon" src={icons[iconName]} alt={iconName} />
        <p>{dailySummary}</p>
        <p>Click on another day to see its description above</p>
      </div>
    );
  }
}

// <p>{descriptions[this.state.currentDescription].desc}</p>
// <img className="weather-icon" src={descriptions[this.state.currentDescription].icon} alt="weather-icon" />

export default History;
