import React, { Component } from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css';
import { data, descriptions } from '../FakeGraphData';

class Current extends Component {
  constructor(){
    super();

    this.state = {
      currentDescription: 0,
    }
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
        <h1>Current Forecast</h1>
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

export default Current;
