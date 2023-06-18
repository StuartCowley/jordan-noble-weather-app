import axios from "axios";

const getForecast = async (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage,
) => {
  let response;
  try {
    if (!searchText) {
      response = await axios.get(`https://cmd-shift-weather-app.onrender.com/forecast?city=London`);
    } else {
      setErrorMessage("");
      response = await axios.get(`https://cmd-shift-weather-app.onrender.com/forecast?city=${searchText}`);
    }
  } catch (error) {
    if (error.response.status === 404) {
      // eslint-disable-next-line no-useless-escape
      setErrorMessage(`Sorry, \" ${searchText} \"  is not a valid town or city in the UK!`);
      // eslint-disable-next-line no-console
      console.error("Location is not valid", error);
    } else {
      setErrorMessage("Server error, try again later!");
      // eslint-disable-next-line no-console
      console.error("Server Error", error);
    }
  }
  setSelectedDate(response.data.forecasts[0].date);
  setForecasts(response.data.forecasts);
  setLocation(response.data.location);
};

export default getForecast;
