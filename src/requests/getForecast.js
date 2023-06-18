import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation) => {
  const response = await axios.get(' https://cmd-shift-weather-app.onrender.com/forecast?city=London');
  setSelectedDate(response.data.forecasts[0].date);
  setForecasts(response.data.forecasts);
  setLocation(response.data.location);
  console.log(response.data);
};

export default getForecast;
