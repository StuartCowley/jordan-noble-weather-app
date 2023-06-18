import axios from "axios";

const getForecast = async (setSelectedDate, setForecasts, setLocation, searchText) => {
  let response;

  if (!searchText) {
    response = await axios.get(`https://cmd-shift-weather-app.onrender.com/forecast?city=London`);
  } else {
    response = await axios.get(`https://cmd-shift-weather-app.onrender.com/forecast?city=${searchText}`);
  }
  setSelectedDate(response.data.forecasts[0].date);
  setForecasts(response.data.forecasts);
  setLocation(response.data.location);
};

export default getForecast;
