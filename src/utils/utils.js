import moment from 'moment';

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const formatData = (dailyData) => {
  const formatted = [];
  dailyData.forEach((day) => {
    let avgTemp = (day.temperatureMax + day.temperatureMin) / 2;
    avgTemp = avgTemp.toFixed(2);
    const humidity = parseInt((day.humidity * 100).toFixed(0), 10);
    const date = new Date(day.dateTime);
    const weekday = weekdays[date.getDay()];
    formatted.push({ name: weekday,
                     temp: avgTemp,
                     humidity: humidity,
                     date: date.toDateString(),
                     summary: day.summary,
                     icon: day.icon,
                   });
  });
  return formatted;
};

export const last7Days = () => {
  const moments = [];
  for (let i = 0; i <= 7; i++){
    moments.push(moment().subtract(i, 'days'));
  }
  return moments;
}

export const getDailyHistorical = (history) => {
  const formatted = [];
  history.forEach(item => {
    formatted.push(item.daily.data[0]);
  });
  return formatted;
}
