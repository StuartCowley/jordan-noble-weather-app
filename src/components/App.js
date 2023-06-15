import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import forecast from "../data/forecast.json";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  // const { forecasts, setForecasts } = useState([]);
  // const { location, setLocation } = useState({ city: "", country: "" });

  // const getForecast = async () => {
  //   const response = await axios.get(' https://cmd-shift-weather-app.onrender.com/forecast?city=London');
  //   console.log(response.data);
  //   setSelectedDate(response.data.forecasts[0].date);
  //   setForecasts(response.data.forecasts);
  //   console.log(forecasts);
  //   setLocation(response.data.location);
  // };

  // getForecast();

  // useEffect(() => {
  //   // getForecast();
  //   const fetchData = async () => {
  //     const response = await axios.get(' https://cmd-shift-weather-app.onrender.com/forecast?city=London');
  //     console.log(response);
  //     setSelectedDate(response.data.forecasts[0].date);
  //     setForecasts(response.data.forecasts);
  //     setLocation(response.data.location);
  //   };
  //   fetchData();
  // });

  const selectedForecast = forecast.forecasts.find((item) => item.date === selectedDate);
  const { city, country } = forecast.location;

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecast.forecasts} onForecastSelect={handleForecastSelect} />
      {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
    </div>
  );
}

export default App;
