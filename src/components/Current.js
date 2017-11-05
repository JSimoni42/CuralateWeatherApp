import React, { Component } from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css'

class Current extends Component {
  constructor(){
    super();
    this.state = {
      currentDescription: 0,
    }
    this.changeDescription = this.changeDescription.bind(this);
  }

  changeDescription(event) {
    const currentDescription = event.activeTooltipIndex;
    this.setState({ currentDescription });
  }

  render() {
    const data = [
      {name: 'Today', temp: 78, humidity: 90},
     {name: 'Tomorrow', temp: 70, humidity: 40},
     {name: 'Monday', temp: 82, humidity: 70},
     {name: 'Tuesday', temp: 75, humidity: 30},
     {name: 'Wednesday', temp: 73, humidity: 20},
     {name: 'Thursday', temp: 70, humidity: 10},
     {name: 'Friday', temp: 65, humidity: 5},
    ];

    const descriptions = [
      "Today: Partly wenis with a chance of rain",
      "Tomorrow: All sunny with tons of sun",
      "Monday: Who cares?",
      "Tuesday: Weather.",
      "Wednesday: Clouds with sky behind them, maybe some stars at night",
      "Thursday: Who reads this, anyway?",
      "Friday: I do weather things."
    ]

    return(
      <div>
        <h1>Current Forecast</h1>
        <LineChart className="current-chart" width={800} height={400} data={data} onClick={this.changeDescription}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#1a1a1a" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <p>{descriptions[this.state.currentDescription]}</p>
        <p>Click on another day to see its description above</p>
      </div>
    );
  }
}

export default Current;
