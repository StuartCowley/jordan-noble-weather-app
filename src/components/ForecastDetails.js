import React from "react";

function ForecastDetails(props) {
  const { forecast } = props;

  const formattedDate = new Date(forecast.date).toDateString();

  return (
    <div className="forecast-details">
      <ul>
        <li>
          Date:
          {formattedDate}
        </li>
        <li>
          Temperature High/Low:
          {forecast.temperature.max}
          {forecast.temperature.min}
        </li>
        <li>
          Wind Speed/Direction:
          {forecast.wind.speed}
          {forecast.wind.direction}
        </li>
        <li>
          Humidity:
          {forecast.humidity}
          %
        </li>
      </ul>
    </div>
  );
}

export default ForecastDetails;
