import React, { Component } from 'react';
import {LineChart,
        Line,
        CartesianGrid,
        XAxis,
        YAxis,
        Tooltip
      } from 'recharts';
class Current extends Component {
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
    return(
      <div class="chart-container">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" />
          <Line type="monotone" dataKey="humidity" stroke="#1a1a1a" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}

export default Current;
