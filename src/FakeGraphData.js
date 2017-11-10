import drop from './img/drop.svg';
import flash from './img/flash.svg';
import sunny from './img/sunny.svg';
import snow from './img/snowflake.svg';

export const data  = [
  {name: 'Today', temp: 78, humidity: 90},
 {name: 'Tomorrow', temp: 70, humidity: 40},
 {name: 'Monday', temp: 82, humidity: 70},
 {name: 'Tuesday', temp: 75, humidity: 30},
 {name: 'Wednesday', temp: 73, humidity: 20},
 {name: 'Thursday', temp: 70, humidity: 10},
 {name: 'Friday', temp: 65, humidity: 5},
];

export const descriptions = [
  {desc: "Today: Partly sunny with a chance of rain", icon: drop},
  {desc: "Tomorrow: All sunny with tons of sun", icon: sunny},
  {desc: "Monday: Who cares?", icon: flash},
  {desc: "Tuesday: Weather.", icon: flash},
  {desc: "Wednesday: Clouds with sky behind them, maybe some stars at night", icon: snow},
  {desc: "Thursday: Who reads this, anyway?", icon: flash},
  {desc: "Friday: I do weather things.", icon: snow}
];

export const current = {"time":1510332964,"summary":"Partly Cloudy","icon":"partly-cloudy-day","nearestStormDistance":45,"nearestStormBearing":357,"precipIntensity":0,"precipProbability":0,"temperature":36.84,"apparentTemperature":30.16,"dewPoint":15.15,"humidity":0.41,"pressure":1023.8,"windSpeed":9.1,"windGust":18.03,"windBearing":323,"cloudCover":0.32,"uvIndex":2,"visibility":10,"ozone":289.91,"windDirection":"NW","nearestStormDirection":"N","dateTime":"2017-11-10T16:56:04.000Z"}
