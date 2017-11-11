import React, {Component} from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css';
import { data, descriptions } from '../FakeGraphData';
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
    return(
      <div>
        <h1>Past 7 Days</h1>
        <h2>{this.props.location.place_name}</h2>
        <h3>{this.props.location.coords.latitude}, {this.props.location.coords.longitude}</h3>
        <LineChart className="current-chart" width={800} height={400} data={data} onClick={this.changeDescription}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#1a1a1a" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <p>{descriptions[this.state.currentDescription].desc}</p>
        <img className="weather-icon" src={descriptions[this.state.currentDescription].icon} alt="weather-icon" />
        <p>Click on another day to see its description above</p>
      </div>
    );
  }
}

export default History;
