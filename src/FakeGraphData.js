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
