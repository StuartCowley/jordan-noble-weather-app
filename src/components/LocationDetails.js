import React from "react";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  return <h1>{`${city}, ${country}`}</h1>;
}

export default LocationDetails;
