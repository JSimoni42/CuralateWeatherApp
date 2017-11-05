import React, { Component } from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
import '../styles/current.css';
import drop from '../img/drop.svg';
import flash from '../img/flash.svg';
import sunny from '../img/sunny.svg';
import snow from '../img/snowflake.svg';

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
      {desc: "Today: Partly wenis with a chance of rain", icon: drop},
      {desc: "Tomorrow: All sunny with tons of sun", icon: sunny},
      {desc: "Monday: Who cares?", icon: flash},
      {desc: "Tuesday: Weather.", icon: flash},
      {desc: "Wednesday: Clouds with sky behind them, maybe some stars at night", icon: snow},
      {desc: "Thursday: Who reads this, anyway?", icon: flash},
      {desc: "Friday: I do weather things.", icon: snow}
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
        <p>{descriptions[this.state.currentDescription].desc}</p>
        <img className="weather-icon" src={descriptions[this.state.currentDescription].icon} />
        <p>Click on another day to see its description above</p>
      </div>
    );
  }
}

export default Current;
