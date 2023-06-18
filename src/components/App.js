import React, { useState, useEffect } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  const selectedForecast = forecasts.find((item) => item.date === selectedDate);
  const { city, country } = location;
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} onForecastSelect={handleForecastSelect} />
      {selectedForecast && (<ForecastDetails forecast={selectedForecast} />)}
    </div>
  );
}

export default App;
